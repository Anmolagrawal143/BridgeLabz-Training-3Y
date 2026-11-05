/**
 * Q5 – Hoisting Lab: The Sequence Trap
 * Demonstrates hoisting mechanisms of var, let, and function declarations.
 */
"use strict";

console.log("=== Q5: HOISTING LAB ===");

/*
ORIGINAL CODE ANALYSIS:
console.log(score); // Output: undefined (var score is hoisted and initialized as undefined)
announce();         // Output: "Game started" (function declarations are fully hoisted with definition)
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();        // Output: "ready" (works because startGame function is fully hoisted)
function startGame() {
    console.log(status);
}

MEMORIES STATES EXPLANATION:
- 'var score': Hoisted during creation phase and initialized as 'undefined'.
- 'announce()': Hoisted with its entire function definition.
- 'let status': Hoisted, but placed in TDZ (Temporal Dead Zone) until executed line is reached. Accessing before line throws ReferenceError.
- 'startGame()': Hoisted with function definition.
*/

// 1. Fixed Sequential Code
console.log("--- Fixed Sequential Execution ---");
var score = 50;
let status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(`Game Status: ${status}`);
}

announce();
console.log(`Initial Score: ${score}`);
startGame();

// 2. Rewritten using Arrow Functions (Arrow functions assigned to let/const are NOT hoisted as functions)
console.log("
--- Arrow Function Hoisting Comparison ---");

const announceArrow = () => {
    console.log("Game started (Arrow)");
};

const startGameArrow = () => {
    console.log(`Game Status: ${status} (Arrow)`);
};

// Calling after definition because arrow functions reside in TDZ if declared with let/const
announceArrow();
startGameArrow();
