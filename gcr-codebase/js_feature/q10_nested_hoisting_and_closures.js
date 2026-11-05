/**
 * Q10 – Nested Hoisting and Closures
 * Demonstrates lexical scope, function execution contexts, and hoisting traps.
 */
"use strict";

console.log("=== Q10: NESTED HOISTING & CLOSURES ===");

/*
1. PREDICTION & OUTPUT EXPLANATION:
Original Code:
function outer() {
    console.log(count); // Output 1: undefined
    var count = 5;
    function inner() {
        console.log(count); // Output 2: undefined
        var count = 10;
    }
    inner();
}
outer();

WHY OUTPUT IS 'undefined' TWICE:
- In outer(), 'var count' is hoisted to top of outer's scope, initialized as 'undefined' prior to console.log(count).
- In inner(), 'var count' inside inner is hoisted to top of inner's scope, shadowing outer's 'count' variable, initialized as 'undefined' prior to console.log(count).
*/

// 2. Corrected Version revealing expected lexical values
function outerFixed() {
    let count = 5;
    console.log(`Outer Count: ${count}`);

    // Converting inner function to arrow function
    const innerArrow = () => {
        // Accesses outer's lexical 'count' scope if not shadowed by local redeclaration
        console.log(`Inner Arrow accessing Lexical Outer Count: ${count}`);
    };

    innerArrow();
}

outerFixed();

/**
 * CALL STACK FLOW & DEBUG OBSERVATIONS:
 * 1. Global Context -> Calls outerFixed() -> Stack: [Global, outerFixed]
 * 2. outerFixed Context -> Defines 'count = 5', logs it -> Calls innerArrow() -> Stack: [Global, outerFixed, innerArrow]
 * 3. innerArrow Context -> Looks up 'count' lexically in outerFixed execution context scope chain.
 */
