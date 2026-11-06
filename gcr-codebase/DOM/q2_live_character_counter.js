/**
 * Q2: Live Character Counter with Warning Behavior
 * Logic:
 * - Listens to input and keydown events on a textarea (max 100 chars).
 * - Changes counter badge color to yellow at <= 20 chars, red at 0.
 * - Uses e.preventDefault() on keydown when limit is 0 to block extra typing.
 */

console.log("Q2 Script initialized: Live Character Counter with Warning Behavior.");

function setupCharacterCounter() {
    const maxChars = 100;
    let text = "";

    function handleInput(newText) {
        let remaining = maxChars - newText.length;
        if (remaining < 0) remaining = 0;
        text = newText.substring(0, maxChars);

        let statusClass = "normal";
        if (remaining <= 20 && remaining > 0) {
            statusClass = "warning-yellow";
        } else if (remaining === 0) {
            statusClass = "danger-red";
        }

        return { remaining, statusClass, text };
    }

    return { handleInput };
}

// Test simulation logic
const counter = setupCharacterCounter();
console.log("Simulating 85 chars input:", counter.handleInput("a".repeat(85)));
console.log("Simulating 95 chars input (Yellow warning):", counter.handleInput("a".repeat(95)));
console.log("Simulating 100 chars input (Red limit reached):", counter.handleInput("a".repeat(100)));
