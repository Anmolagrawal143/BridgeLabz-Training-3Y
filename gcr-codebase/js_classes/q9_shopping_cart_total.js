/**
 * Q9: Shopping Cart Total (Classes + RegExp for Coupon)
 * Cart class calculating total and applying coupon validation using RegExp (e.g. SAVE20, DISC10).
 */

class Cart {
    constructor() {
        this.items = []; // Array of { name, price, quantity }
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
        console.log(`Added ${quantity}x '${name}' at ₹${price} each.`);
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    applyCoupon(couponCode) {
        const rawTotal = this.getTotal();
        console.log(`\nCart Subtotal: ₹${rawTotal.toFixed(2)}`);

        // Coupon format: SAVE20 or DISC10
        const couponRegex = /^(SAVE|DISC)(\d{2})$/;
        const match = couponCode.trim().toUpperCase().match(couponRegex);

        if (match) {
            const discountPercent = Number(match[2]);
            const discountAmount = (rawTotal * discountPercent) / 100;
            const finalTotal = rawTotal - discountAmount;

            console.log(`[Coupon Applied] Code: '${couponCode}' (${discountPercent}% Discount)`);
            console.log(`Discount Amount: ₹${discountAmount.toFixed(2)}`);
            console.log(`Final Total: ₹${finalTotal.toFixed(2)}`);
            return finalTotal;
        } else {
            console.log(`[Invalid Coupon] Code '${couponCode}' is invalid. Must follow format like SAVE20 or DISC10.`);
            console.log(`Final Total: ₹${rawTotal.toFixed(2)}`);
            return rawTotal;
        }
    }
}

console.log("=== Q9: SHOPPING CART TOTAL WITH COUPON VALIDATION ===");
const myCart = new Cart();

myCart.addItem("Wireless Headphones", 1500, 2);
myCart.addItem("Mousepad", 300, 1);

console.log("--- Applying Valid Coupon 'SAVE20' ---");
myCart.applyCoupon("SAVE20");

console.log("--- Applying Valid Coupon 'DISC10' ---");
myCart.applyCoupon("DISC10");

console.log("--- Applying Invalid Coupon 'OFF500' ---");
myCart.applyCoupon("OFF500");
