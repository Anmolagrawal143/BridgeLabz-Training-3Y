/**
 * Q4 – Debugging Mystery
 * Identifies strict mode undeclared global error and fixes scope declarations.
 */
"use strict";

// Problem Analysis:
// Under "use strict", assigning a value to an undeclared variable (greeting = "Welcome") 
// throws a ReferenceError instead of creating an implicit global variable on the window/global scope object.

// Fixed Implementation using explicit variable declaration (const/let):
function showMessage() {
    const greeting = "Welcome"; // Fixed: declared variable using 'const'
    console.log(greeting);
}

console.log("=== Q4: DEBUGGING MYSTERY FIXED ===");
showMessage();

/**
 * DEBUGGER OBSERVATION & CALL STACK EXPLANATION:
 * 1. Scope Rules: In non-strict mode, `greeting = "Welcome"` attaches `greeting` to global scope (window/global).
 *    In strict mode, implicit globals are disabled to prevent scope pollution and hard-to-find bugs.
 * 2. VS Code Call Stack Observation:
 *    - Call showMessage() -> Stack pushes `showMessage()` execution context.
 *    - Watch window tracks `greeting` variable transitioning from uninitialized/local to "Welcome".
 */
