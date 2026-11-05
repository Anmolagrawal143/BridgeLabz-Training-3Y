/**
 * Q2: Multi-Type Data Summary
 * Logic: Store values of different JavaScript data types in an array of objects.
 * Use typeof operator and Array.isArray() to identify the exact data type.
 * Output the summary formatted as a table using console.table().
 */

// Declare variables of various data types
const stringVal = "TechPulse";
const numberVal = 2026;
const booleanVal = true;
const arrayVal = [10, 20, 30];
const objectVal = { role: "Developer", city: "Delhi" };
const nullVal = null;
let undefinedVal;

// Function to accurately detect type
function getType(val) {
    if (val === null) return "null";
    if (Array.isArray(val)) return "array";
    return typeof val;
}

// Build data report array
const report = [
    { Label: "Company Name", Value: stringVal, Type: getType(stringVal) },
    { Label: "Founded Year", Value: numberVal, Type: getType(numberVal) },
    { Label: "Is Active", Value: booleanVal, Type: getType(booleanVal) },
    { Label: "Scores List", Value: JSON.stringify(arrayVal), Type: getType(arrayVal) },
    { Label: "User Object", Value: JSON.stringify(objectVal), Type: getType(objectVal) },
    { Label: "Null Entry", Value: String(nullVal), Type: getType(nullVal) },
    { Label: "Undefined Entry", Value: String(undefinedVal), Type: getType(undefinedVal) }
];

// Display single formatted console table
console.table(report);
