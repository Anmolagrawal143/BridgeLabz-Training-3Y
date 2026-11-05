/**
 * Q1: Scope Conflict Resolver
 * Demonstrates global vs local variable scope using payroll logic.
 */

// Global variable scope
let bonus = 5000;

/**
 * Calculates total salary based on permanent status
 * @param {boolean} isPermanent 
 */
function calculateSalary(isPermanent) {
    // Local variable scope
    let salary = 40000;
    let totalSalary = salary;

    if (isPermanent) {
        totalSalary += bonus; // Accessing global variable inside local scope
    }

    console.log(`[Scope Check] Is Permanent: ${isPermanent}`);
    console.log(`[Local Scope] Total Salary: ₹${totalSalary}`);
}

// Testing function execution
console.log("=== Q1: Scope Conflict Resolver ===");
console.log(`[Global Scope] Initial Bonus: ₹${bonus}`);

calculateSalary(true);  // Should include bonus (40000 + 5000 = 45000)
calculateSalary(false); // Should not include bonus (40000)

// Demonstrating global scope isolation
console.log(`[Global Scope] Bonus remains unchanged: ₹${bonus}`);
