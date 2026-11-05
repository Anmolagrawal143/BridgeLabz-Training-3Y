/**
 * Q8: Employee Salary Projection
 * Logic: Calculate yearly salary growth over 5 years based on annual increment rate.
 * Display results structured in a console table.
 */

let currentSalary = 50000;
const annualIncrementPercent = 8; // 8% increment per year

const projectionData = [];

for (let year = 1; year <= 5; year++) {
    // Compute increment
    const increment = (currentSalary * annualIncrementPercent) / 100;
    currentSalary += increment;

    projectionData.push({
        Year: `Year ${year}`,
        "Increment Rate": `${annualIncrementPercent}%`,
        "Projected Salary (₹)": Math.round(currentSalary)
    });
}

// Display formatted console table
console.log("=== 5-Year Salary Growth Projection ===");
console.table(projectionData);
