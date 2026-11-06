/**
 * Q3 – Bug Tracker: Callback to Promise Migration
 * Refactors legacy callback code into a modern Promise-based architecture.
 */

// Legacy Callback Function Reference:
/*
function fetchBugs(callback) {
    setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}
*/

// Modernized Promise-based Function
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random API network failure (30% failure rate)
            const isApiSuccess = Math.random() > 0.3;

            if (isApiSuccess) {
                const bugList = [
                    { id: 101, bug: "UI glitch", priority: "Low", status: "Open" },
                    { id: 102, bug: "API timeout", priority: "High", status: "In Progress" },
                    { id: 103, bug: "Login failure", priority: "Critical", status: "Open" }
                ];
                resolve(bugList);
            } else {
                reject(new Error("500 Internal Server Error: Failed to fetch bug records."));
            }
        }, 1000);
    });
}

console.log("=== Q3: BUG TRACKER (PROMISE MIGRATION) ===");

getBugs()
    .then((bugs) => {
        console.log("Successfully fetched bug records from server:");
        console.table(bugs);
    })
    .catch((error) => {
        console.error(`API Fetch Error: ${error.message}`);
    });
