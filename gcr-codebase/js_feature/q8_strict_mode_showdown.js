/**
 * Q8 – Strict Mode Showdown
 * Explains illegal operations in strict mode and provides ES6 clean solution.
 */

/*
NON-STRICT vs STRICT MODE BEHAVIOR ANALYSIS:

Code in Non-Strict Mode:
function demo(a, a) { // Allowed (duplicate parameters ignored/overwritten)
    total = 10;       // Allowed (creates global variable implicitly)
    delete total;     // Allowed (deletes global variable property)
}

Errors in Strict Mode ("use strict"):
1. Duplicate parameter name 'a' -> SyntaxError: Duplicate parameter name not allowed in this context.
2. 'total = 10'                 -> ReferenceError: total is not defined.
3. 'delete total'               -> SyntaxError: Delete of an unqualified identifier in strict mode.

WHY ILLEGAL:
- Duplicate parameters lead to silent bugs where parameter values get overwritten.
- Undeclared variables cause global namespace pollution.
- Unqualified delete statements produce ambiguous code execution.
*/

"use strict";

// Correct ES6 Compliant Version
function demoFixed(a, b) {
    const total = 10; // Properly declared local constant
    console.log(`Param A: ${a}, Param B: ${b}, Total: ${total}`);
}

console.log("=== Q8: STRICT MODE SHOWDOWN FIXED ===");
demoFixed(5, 10);
