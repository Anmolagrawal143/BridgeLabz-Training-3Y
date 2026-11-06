/**
 * Q7: Closures - Multiplier Generator
 * Demonstrates closure by returning an inner function that retains access to outer function scope.
 */

function makeMultiplier(multiplier) {
    // Outer scope variable 'multiplier'
    return function(number) {
        // Inner function retains access to 'multiplier' even after makeMultiplier has finished executing
        return number * multiplier;
    };
}

// Creating multiplier functions
const triple = makeMultiplier(3);
const quadruple = makeMultiplier(4);

console.log("=== Q7: Closures - Multiplier Generator ===");
console.log("triple(5):", triple(5));         // Output: 15
console.log("quadruple(5):", quadruple(5));   // Output: 20

console.log("\n[CLOSURE EXPLANATION]:");
console.log("A closure is created when an inner function retains access to variables from its outer (lexical) scope,");
console.log("even after the outer function has completed execution.");
console.log("Here, 'triple' remembers multiplier = 3 because the returned inner function forms a closure over 'multiplier'.");
