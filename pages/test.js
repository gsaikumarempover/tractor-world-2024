
export async function getServerSideProps(context) {
    console.log("🚀 getServerSideProps is running...");

    try {
        console.log("🌍 Context Locale:", context.locale);

        const apiUrl = "https://used-tractor-backend.azurewebsites.net/inventory/web/v2/tractor/";
        console.log("🔗 Fetching API:", apiUrl);

        // Ensure fetch waits and handle slow response
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 10000); // 10 seconds timeout

        const res = await fetch(apiUrl, { signal: controller.signal }).catch((err) => {
            console.error("❌ Fetch Error:", err.message);
            return null;
        });

        clearTimeout(timeout); // Clear timeout if response is received

        if (!res || !res.ok) {
            console.error("❌ Fetch Error:", res ? res.statusText : "No response");
            return {
                props: {
                    inventoryData: null,
                    error: `Failed to fetch inventory data: ${res ? res.statusText : "No response"}`,
                },
            };
        }

        const textResponse = await res.text();
        console.log("📜 Raw Response Data:", textResponse);

        try {
            const inventoryData = JSON.parse(textResponse);
            console.log("✅ Parsed Inventory Data:", inventoryData);

            return {
                props: {
                    inventoryData,
                    ...(await serverSideTranslations(context.locale, ["common"])),
                },
            };
        } catch (jsonError) {
            console.error("❌ JSON Parsing Error:", jsonError.message);
            return {
                props: {
                    inventoryData: null,
                    error: "Invalid JSON response from API",
                },
            };
        }
    } catch (error) {
        console.error("❌ Error in getServerSideProps:", error);
        return {
            props: {
                inventoryData: null,
                error: error.message,
            },
        };
    }
}
export default function TestPage({ message ,inventoryData}) {
    return <div>{inventoryData}</div>;
}