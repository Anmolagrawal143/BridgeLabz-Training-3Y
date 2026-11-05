/**
 * Q10: Citizen Eligibility Validator
 * Logic: Evaluate voting, driving, and passport service eligibility based on age and citizenship status.
 * Uses nested conditional checks and logical operators.
 */

// Test Inputs
const age = 19;
const isCitizen = true;

console.log("=== Citizen Eligibility Evaluation ===");
console.log(`Age: ${age} | Citizen: ${isCitizen}`);

// Validation logic
if (isCitizen && age >= 18) {
    if (age >= 18 && age <= 20) {
        console.log("Status: Eligible to vote only.");
    } else {
        console.log("Status: Eligible for all services.");
    }
} else if (!isCitizen && age >= 18) {
    console.log("Status: Only age criteria met.");
} else {
    console.log("Status: Not eligible yet.");
}
