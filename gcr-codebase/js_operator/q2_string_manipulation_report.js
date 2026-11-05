/**
 * Q2: String Manipulation Report
 * Formats e-commerce product titles using string methods.
 */

// Original product title with irregular casing and whitespace
const rawTitle = " wireless headphones PRO ";

// 1. Trim extra spaces
const trimmedTitle = rawTitle.trim();

// 2. Convert to lowercase and capitalize first letter of each word
const formattedWords = trimmedTitle
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// 3. Replace "pro" or "Pro" with "Pro Edition"
const finalTitle = formattedWords.replace(/Pro/gi, "Pro Edition");

// Output report
console.log("=== Q2: String Manipulation Report ===");
console.log(`Original Title : "${rawTitle}"`);
console.log(`Cleaned Title  : "${finalTitle}"`);
console.log(`Title Length   : ${finalTitle.length} characters`);
