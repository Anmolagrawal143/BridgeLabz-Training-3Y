/**
 * Q2 – Employee Bonus Calculator
 * Strict validation, numerical parsing, and robust error handling using try...catch.
 */
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" },
    { name: "InvalidEmployee", salary: "abc", years: "3" } // Included for try...catch testing
];

console.log("=== Q2: EMPLOYEE BONUS CALCULATOR ===");

employees.forEach((emp, index) => {
    try {
        // Validate required properties existence
        if (!emp.name || emp.salary === undefined || emp.years === undefined) {
            throw new Error(`Missing required properties for employee entry at index ${index}`);
        }

        // 1. Convert salary and years to numbers
        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) {
            throw new Error(`Invalid numeric conversion for ${emp.name}: salary='${emp.salary}', years='${emp.years}'`);
        }

        // 2. Calculate bonus (10% for years > 3, else 5%)
        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalPayout = salary + bonus;

        // 4. Print details using template strings
        console.log(`Employee: ${emp.name.padEnd(8)} | Years: ${years} | Base Salary: ₹${salary.toFixed(2)} | Bonus: ₹${bonus.toFixed(2)} | Total Payout: ₹${totalPayout.toFixed(2)}`);

    } catch (error) {
        // 5. Catch block handles errors cleanly
        console.error(`[ERROR processing record ${index}]: ${error.message}`);
    }
});
