/**
 * Q1: Callback Function Demonstration
 * Function greetUser takes a name and a callback function.
 * It first prints "Hello <name>", then invokes the callback.
 */

// Callback function to be executed after greeting
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Higher-order function accepting name and callback
function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    // Check if callback is provided and is a function before executing
    if (typeof callback === "function") {
        callback();
    }
}

// Execution and Callback Flow Demonstration
console.log("=== Q1: Greet User with Callback ===");
greetUser("Aarav", showEndMessage);
