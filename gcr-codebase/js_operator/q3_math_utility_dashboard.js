/**
 * Q3: Math Utility Dashboard
 * Demonstrates core Math functions for a scientific calculator module.
 */

const x = 16.75;

// Mathematical calculations
const roundedVal = Math.round(x);
const sqrtVal = Math.sqrt(x).toFixed(2);
const powVal = Math.pow(x, 3).toFixed(2);

// Random number between 10 and 50 (inclusive)
const randomNum = Math.floor(Math.random() * 41) + 10;

// Result summary using template literals
const summary = `
=== Q3: Math Utility Dashboard ===
Input Value (x)          : ${x}
Rounded Value            : ${roundedVal}
Square Root              : ${sqrtVal}
Cube Power (x³)          : ${powVal}
Random Number (10 - 50)  : ${randomNum}
`;

console.log(summary);
