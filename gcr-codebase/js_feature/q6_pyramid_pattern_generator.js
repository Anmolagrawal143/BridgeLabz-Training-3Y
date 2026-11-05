/**
 * Q6 – Pyramid Pattern Generator
 * Demonstrates block scope (let/const) vs function scope (var) in loop iterations.
 */
"use strict";

// Default limit set to 5
function generatePattern(limit = 5) {
    console.log(`=== Q6: PYRAMID PATTERN (Limit = ${limit}) ===`);

    for (let i = 1; i <= limit; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += "* ";
        }
        console.log(line);
    }
}

generatePattern(5);

/*
DEBUG OBSERVATIONS (let vs var):
1. If 'let i' and 'let j' are replaced with 'var i' and 'var j':
   - 'var' creates function-scoped variables instead of block-scoped variables.
   - Using 'var' inside nested loops leaks variable states outside loop blocks.
   - In strict mode, failing to declare loop variables (e.g. `for(i=0;...)`) throws ReferenceError.
*/
