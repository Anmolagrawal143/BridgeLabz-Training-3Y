/**
 * Q6 – E-Commerce Dashboard: Product Card Fetcher
 * Fetches mock product listings from Fake Store API using async/await.
 */

async function fetchProducts() {
    console.log("=== Q6: FETCHING E-COMMERCE PRODUCTS FROM FAKE STORE API ===");
    const apiUrl = "https://fakestoreapi.com/products?limit=5";

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }

        const products = await response.json();

        console.log(`
Successfully fetched ${products.length} products:
`);

        products.forEach((prod, index) => {
            console.log(`--- Product #${index + 1} ---`);
            console.log(`Product: ${prod.title}`);
            console.log(`Price: $${prod.price.toFixed(2)}`);
            console.log(`Image: ${prod.image}
`);
        });

        // DOM Rendering (if executed in browser environment)
        if (typeof document !== "undefined") {
            const container = document.getElementById("product-container") || document.body;
            products.forEach(p => {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                    <h3>${p.title}</h3>
                    <p><strong>Price:</strong> $${p.price}</p>
                    <img src="${p.image}" alt="${p.title}" style="width:100px;" />
                `;
                container.appendChild(card);
            });
        }

    } catch (error) {
        console.error("Failed to load products. Please try again.");
        console.error("Technical Error:", error.message);
    }
}

fetchProducts();
