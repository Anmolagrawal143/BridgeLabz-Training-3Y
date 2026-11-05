/**
 * Q3: Monthly Expense Tracker
 * Logic: Sum up expense categories from an array.
 * Apply arithmetic operators to calculate total, average, and 10% tax.
 * Round the calculated amounts to 2 decimal places using toFixed(2).
 */

// Array of monthly expenses [Food, Travel, Rent, Bills, Leisure]
const expenses = [3500, 1200, 12000, 2500, 1800];

// Calculate total expense using array reduce
let totalExpense = expenses.reduce((sum, item) => sum + item, 0);

// Calculate average expense
const averageExpense = totalExpense / expenses.length;

// Apply 10% tax using arithmetic assignment operator
const taxRate = 0.10;
const taxAmount = totalExpense * taxRate;
const finalAmountWithTax = totalExpense + taxAmount;

// Output results formatted to 2 decimal places
console.log("=== Monthly Expense Summary ===");
console.log(`Total Expense: ₹${totalExpense.toFixed(2)}`);
console.log(`Average Expense per Category: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax Amount (10%): ₹${taxAmount.toFixed(2)}`);
console.log(`Final Amount After Tax: ₹${finalAmountWithTax.toFixed(2)}`);
