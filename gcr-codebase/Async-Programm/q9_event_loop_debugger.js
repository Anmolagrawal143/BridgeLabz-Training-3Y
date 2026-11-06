/**
 * Q9 – Debugging the Event Loop
 * Predicts and verifies microtask vs macrotask execution order.
 */

/*
 * ============================================================================
 * PREDICTED OUTPUT ORDER:
 * 1. "Script start"
 * 2. "Script end"
 * 3. "Promise callback"
 * 4. "Timeout callback"
 * ============================================================================
 */

console.log("=== Q9: DEBUGGING THE EVENT LOOP ===");

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
 * ============================================================================
 * EXPLANATION OF ACTUAL RESULTS:
 * ============================================================================
 * 1. Synchronous Code: "Script start" and "Script end" execute immediately on
 *    the Call Stack.
 * 2. Microtask Queue: Promise.resolve().then() schedules its callback into the
 *    Microtask Queue.
 * 3. Macrotask Queue: setTimeout(..., 0) schedules its callback into the
 *    Timer/Macrotask Queue.
 * 4. Event Loop Decision: Once the main call stack is empty, the Event Loop
 *    always processes the Microtask Queue FIRST before pulling any tasks from
 *    the Macrotask Queue. Thus, "Promise callback" logs before "Timeout callback".
 * ============================================================================
 */
