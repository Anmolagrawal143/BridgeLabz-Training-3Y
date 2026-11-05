/**
 * Q1 – Dynamic Data Parser
 * Demonstrates type coercion, conversion, and validation using "use strict".
 */
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidNumericData = [];

console.log("=== Q1: DYNAMIC DATA PARSER REPORT ===");

apiData.forEach((item, index) => {
    // 1. Convert to String, Boolean, and Number
    const strVal = String(item);
    const boolVal = Boolean(item);
    const numVal = Number(item);

    // Check for invalid numbers:
    // - Number(" ") gives 0, but " " is whitespace (invalid number string context)
    // - Number("100px") gives NaN
    // - Number("NaN") gives NaN
    const isWhitespace = typeof item === "string" && item.trim() === "";
    const isInvalidNumber = Number.isNaN(numVal) || isWhitespace;

    console.log(`[Item ${index}] Raw: ${JSON.stringify(item)} | String: "${strVal}" | Boolean: ${boolVal} | Number: ${numVal}`);

    // 2 & 3. Sort into valid vs invalid numeric arrays
    if (isInvalidNumber) {
        invalidNumericData.push({ index, raw: item, numConverted: numVal });
    } else {
        validNumericData.push({ index, raw: item, parsedNumber: numVal });
    }
});

console.log("
--- SUMMARY REPORT ---");
console.log("Valid Numeric Entries:", validNumericData);
console.log("Invalid Numeric Entries (Skipped):", invalidNumericData);
