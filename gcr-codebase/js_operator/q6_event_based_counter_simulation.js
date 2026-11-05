/**
 * Q6: Event-Based Counter Simulation
 * Simulates click events modifying a closure variable using nested functions.
 */

// Counter state variable
let count = 0;

/**
 * Increments counter and prints value
 */
function increment() {
    function updateState() {
        count++;
        console.log(`[Event: Increment] Current Count: ${count}`);
    }
    updateState();
}

/**
 * Decrements counter and prints value
 */
function decrement() {
    function updateState() {
        count--;
        console.log(`[Event: Decrement] Current Count: ${count}`);
    }
    updateState();
}

console.log("=== Q6: Event-Based Counter Simulation ===");
console.log(`Initial Count: ${count}`);

// Simulating manual user click interactions
increment(); // Count: 1
increment(); // Count: 2
increment(); // Count: 3
decrement(); // Count: 2
increment(); // Count: 3
decrement(); // Count: 2
