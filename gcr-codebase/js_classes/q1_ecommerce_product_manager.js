/**
 * Q1: E-Commerce Product Manager (Classes + Objects)
 * Defines a Product class with methods to apply discounts and format details.
 * Filters products with price > 1000.
 */

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent > 0 && percent <= 100) {
            const discountAmount = (this.price * percent) / 100;
            this.price -= discountAmount;
            console.log(`[Discount] Applied ${percent}% off on ${this.name}. New Price: ₹${this.price.toFixed(2)}`);
        } else {
            console.log("[Discount Error] Invalid discount percentage.");
        }
    }

    getDetails() {
        return `ID: ${this.id} | Name: ${this.name.padEnd(20)} | Category: ${this.category.padEnd(12)} | Price: ₹${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(101, "Wireless Headphones", 2500, "Electronics"),
    new Product(102, "USB Cable", 350, "Accessories"),
    new Product(103, "Gaming Mouse", 1800, "Electronics"),
    new Product(104, "Notebook", 120, "Stationery"),
    new Product(105, "Smart Watch", 4500, "Electronics"),
    new Product(106, "Pen Set", 250, "Stationery")
];

console.log("=== Q1: ALL PRODUCTS ===");
products.forEach(p => console.log(p.getDetails()));

products[0].applyDiscount(10);

const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\n=== PRODUCTS WITH PRICE > ₹1000 ===");
expensiveProducts.forEach(p => console.log(p.getDetails()));
