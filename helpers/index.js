import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {LiveInventoryAPIURL } from "@utils/constants";


export async function getLocaleProps(context) {
  const locale = context.locale;
  console.log("🔍 getLocaleProps called with locale:", locale);
  
  try {
    // Fetch translations
    const translations = await serverSideTranslations(locale, ['common']);
    
    // Fetch inventory data
     console.log("🌐 Using API URL:", LiveInventoryAPIURL);
    
    const res = await fetch(LiveInventoryAPIURL);
    
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    
    const jsonResponse = await res.json();
    
    // Filter valid inventory items
    const filteredInventoryData = Array.isArray(jsonResponse?.data)
      ? jsonResponse.data.filter(item => [1, 2, 3, 4].includes(item.status))
      : [];
    
    console.log(`📝 Found ${filteredInventoryData.length} valid inventory items`);
    
    // Explicitly construct the return object
    const returnProps = {
      locale,
      inventoryData: filteredInventoryData,
      ...translations,
    };
    
    console.log("📦 Props object keys:", Object.keys(returnProps));
    console.log("🧪 inventoryData type:", Array.isArray(returnProps.inventoryData) ? "Array" : typeof returnProps.inventoryData);
    
    return { props: returnProps };
  } catch (error) {
    console.error("❌ Error in getLocaleProps:", error);
    
    return {
      props: {
        locale,
        inventoryData: [], // Explicit empty array
        ...(await serverSideTranslations(locale, ['common'])),
      }
    };
  }
}