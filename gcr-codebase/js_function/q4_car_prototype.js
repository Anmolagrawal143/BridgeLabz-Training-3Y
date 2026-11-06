/**
 * Q4: Constructor Function & Prototype Method Sharing
 * Demonstrates how prototype methods are shared across multiple instances.
 */

// Constructor Function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype so all instances share the same memory location for the method
Car.prototype.getDetails = function() {
    return `Car: ${this.brand} ${this.model}`;
};

// Creating two instances
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Hyundai", "Creta");

console.log("=== Q4: Constructor Function & Prototypes ===");
console.log(car1.getDetails());
console.log(car2.getDetails());

// Verification of prototype method sharing
console.log("Do car1 and car2 share the exact same getDetails method in memory?", car1.getDetails === car2.getDetails);
