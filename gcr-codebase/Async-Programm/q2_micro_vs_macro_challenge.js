/**
 * Q2 – Task Scheduler: Micro vs Macro Challenge
 * Visualizes how the JavaScript Event Loop prioritizes synchronous code,
 * Microtasks (Promises), and Macrotasks (setTimeout).
 */

console.log("=== Q2: EVENT LOOP TASK ORDER DEMONSTRATION ===");

// 1. Synchronous Log
console.log("Start");

// 2. Macrotask (Timer Queue)
setTimeout(() => {
    console.log("Macrotask Callback: setTimeout()");
}, 0);

// 3. Microtask (Microtask Queue)
Promise.resolve().then(() => {
    console.log("Microtask Callback: Promise.then()");
});

// 4. Synchronous Log
console.log("End");

/*
 * ============================================================================
 * EVENT LOOP EXECUTION ORDER EXPLANATION:
 * ============================================================================
 * Output Order:
 * 1. "Start" (Synchronous execution)
 * 2. "End" (Synchronous execution)
 * 3. "Microtask Callback: Promise.then()" (Microtask queue)
 * 4. "Macrotask Callback: setTimeout()" (Macrotask queue)
 *
 * WHY MICROTASKS EXECUTE BEFORE MACROTASKS:
 * 1. Call Stack Execution: The JavaScript Engine first executes all synchronous
 *    code present on the Call Stack.
 * 2. Microtask Queue Processing: Once the Call Stack is empty, the Event Loop
 *    checks the Microtask Queue (Promises, process.nextTick, queueMicrotask).
 *    The Event Loop MUST drain the entire Microtask Queue completely before moving on.
 * 3. Macrotask Queue Processing: Only after all microtasks are finished does the
 *    Event Loop pick the next task from the Macrotask Queue (setTimeout, setInterval, I/O).
 * ============================================================================
 */
