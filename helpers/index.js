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
        
    // First filter valid items
    const filteredItems = (jsonResponse?.data || [])
      .filter(item => [1, 2, 3, 4].includes(item.status));

    // Then take just the first 10 for testing
    const slicedItems = filteredItems.slice(0, 10);

    // Finally map to only include essential fields
    const filteredInventoryData = slicedItems.map(item => ({
      id: item.tractor_id,
      brand: item.brand,
      model: item.model,
      year: item.year,
      price: item.max_price,
      location: item.user_location,
      state: item.state
    }));

    console.log(`Reduced inventory: ${filteredInventoryData.length} items out of ${filteredItems.length} total`);
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