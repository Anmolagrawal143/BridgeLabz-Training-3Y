/**
 * Q1: Personalized Login Greeting
 * Logic: Get the user's name and current hour using Date object.
 * Determine time-based greeting using conditional logic and template literals.
 */

// Declare variables
const userName = "Aarav";
const currentHour = new Date().getHours();

let greeting = "";

// Time-based condition checking
if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour <= 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

// Display output
console.log(greeting);
