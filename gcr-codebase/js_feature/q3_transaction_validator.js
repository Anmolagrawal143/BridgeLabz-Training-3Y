/**
 * Q3 – Transaction Validator
 * Custom error handling, categorizing valid/invalid transactions, and debugging observations.
 */
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

console.log("=== Q3: TRANSACTION VALIDATOR ===");

transactions.forEach((tx, index) => {
    try {
        // Breakpoint Observation: Set a breakpoint here in VS Code debugger to inspect 'tx' and 'index'.
        
        // 2. Custom validation throws
        if (tx === null || tx === undefined) {
            throw new Error("Null or Undefined transaction entry detected.");
        }

        if (tx.id === undefined || tx.amount === undefined) {
            throw new Error(`Missing required fields (id or amount) in transaction record.`);
        }

        if (typeof tx.amount !== "number" || Number.isNaN(tx.amount)) {
            throw new Error(`Invalid amount data type for Transaction ID ${tx.id}.`);
        }

        if (tx.amount < 0) {
            throw new Error(`Negative transaction amount (₹${tx.amount}) for Transaction ID ${tx.id}.`);
        }

        // If valid
        validTransactions.push(tx);
        console.log(`[VALID] Transaction ID ${tx.id}: ₹${tx.amount}`);

    } catch (error) {
        // 3. Catch & categorize invalid
        invalidTransactions.push({ index, record: tx, reason: error.message });
        console.error(`[INVALID] Entry ${index}: ${error.message}`);
    }
});

// 4. Final summary reports
console.log("
--- FINAL AUDIT REPORT ---");
console.log(`Total Transactions Evaluated : ${transactions.length}`);
console.log(`Successful/Valid Count       : ${validTransactions.length}`);
console.log(`Failed/Invalid Count         : ${invalidTransactions.length}`);
