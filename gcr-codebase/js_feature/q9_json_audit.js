/**
 * Q9 – JSON Audit
 * Parses JSON entries safely, validates required keys, and filters records.
 */
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}',
    '{"user":"Rohan","age":16}'
];

const cleanUsers = [];

console.log("=== Q9: JSON AUDIT REPORT ===");

rawData.forEach((entry, index) => {
    const lineNumber = index + 1;
    try {
        // 1. Parse JSON safely
        const parsed = JSON.parse(entry);

        // 2. Validate required keys
        if (!parsed.hasOwnProperty("user") || !parsed.hasOwnProperty("age")) {
            throw new Error(`Missing required keys ('user' or 'age') at Line ${lineNumber}.`);
        }

        // Convert age to Number
        const ageNum = Number(parsed.age);
        if (Number.isNaN(ageNum)) {
            throw new Error(`Invalid numeric age value '${parsed.age}' at Line ${lineNumber}.`);
        }

        parsed.age = ageNum;

        // 5. Bonus: Filter under-18 users
        if (parsed.age < 18) {
            console.log(`[FILTERED OUT] Line ${lineNumber}: User '${parsed.user}' is under 18 (Age: ${parsed.age}).`);
            return;
        }

        // 3. Push to clean array
        cleanUsers.push(parsed);
        console.log(`[VALID USER] Line ${lineNumber}:`, parsed);

    } catch (error) {
        // Log errors with line numbers
        console.error(`[JSON ERROR] Line ${lineNumber}: ${error.message}`);
    }
});

console.log("
--- FINAL CLEANED AUDITED USERS ---");
console.log(cleanUsers);
