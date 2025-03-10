import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {LiveInventoryAPIURL } from "@utils/constants";

export async function getLocaleProps(context) {
  const locale = context.locale;
  
  try {
    // 1. Get translations
    const translations = await serverSideTranslations(locale, ['common']);
    
    // 2. Fetch inventory data
     const res = await fetch(LiveInventoryAPIURL);
    
    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    
    const jsonResponse = await res.json();
    console.log("📡 API Response in getLocaleProps:", JSON.stringify(jsonResponse).substring(0, 1000));
    
    // 3. Filter valid inventory items
    const filteredInventoryData = Array.isArray(jsonResponse?.data)
      ? jsonResponse.data.filter(item => [1, 2, 3, 4].includes(item.status))
      : [];
    
    // 4. Return combined props
    return {
      props: {
        locale,
        inventoryData: filteredInventoryData,
        ...translations,
      }
    };
  } catch (error) {
    console.error("❌ Error fetching data in getLocaleProps:", error.message);
    
    // Return locale props with empty inventory array on error
    return {
      props: {
        locale,
        inventoryData: [],
        ...(await serverSideTranslations(locale, ['common'])),
      }
    };
  }
}