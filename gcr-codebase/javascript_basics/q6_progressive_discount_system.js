/**
 * Q6: Progressive Discount System
 * Logic: Calculate dynamic discount rate based on total purchasing tier.
 * Compute final price and round values using Math.round().
 */

const purchaseAmount = 6500;
let discountPercent = 0;

// Determine discount tier
if (purchaseAmount >= 10000) {
    discountPercent = 25;
} else if (purchaseAmount >= 5000) {
    discountPercent = 15;
} else if (purchaseAmount >= 2000) {
    discountPercent = 5;
} else {
    discountPercent = 0;
}

// Calculations
const discountAmount = Math.round((purchaseAmount * discountPercent) / 100);
const finalPrice = Math.round(purchaseAmount - discountAmount);

// Output results
console.log("=== Billing & Discount Summary ===");
console.log(`Original Total: ₹${Math.round(purchaseAmount)}`);
console.log(`Discount Applied: ${discountPercent}% (Saved ₹${discountAmount})`);
console.log(`Final Price After Discount: ₹${finalPrice}`);
