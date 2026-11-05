/**
 * Q8: Dynamic Discount Evaluator
 * Calculates product and cart-level discounts using loops and reduce().
 */

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

console.log("=== Q8: Dynamic Discount Evaluator ===");

// 1. Calculate item-level discounted prices based on category
const discountedCart = cart.map(product => {
    let categoryDiscountRate = 0;

    if (product.category === "electronics") {
        categoryDiscountRate = 0.10; // 10%
    } else if (product.category === "fashion") {
        categoryDiscountRate = 0.05; // 5%
    }

    const discountAmount = product.price * categoryDiscountRate;
    const finalPrice = product.price - discountAmount;

    console.log(`Item: ${product.item} | Original: ₹${product.price} | Category Discount: ${categoryDiscountRate * 100}% | Price After Item Discount: ₹${finalPrice}`);

    return { ...product, discountedPrice: finalPrice };
});

// 2. Compute subtotal of item-discounted prices using reduce()
const subtotalAfterCategoryDiscounts = discountedCart.reduce((total, product) => total + product.discountedPrice, 0);

// 3. Apply extra 5% overall discount if raw subtotal exceeds 50,000
const rawTotal = cart.reduce((total, p) => total + p.price, 0);
let overallDiscountRate = 0;

if (rawTotal > 50000) {
    overallDiscountRate = 0.05; // Extra 5%
}

const finalCartTotal = subtotalAfterCategoryDiscounts * (1 - overallDiscountRate);

console.log(`
Raw Cart Total        : ₹${rawTotal}`);
console.log(`Subtotal After Item   : ₹${subtotalAfterCategoryDiscounts}`);
console.log(`Overall Cart Discount : ${overallDiscountRate * 100}%`);
console.log(`Final Payable Amount  : ₹${finalCartTotal.toFixed(2)}`);
