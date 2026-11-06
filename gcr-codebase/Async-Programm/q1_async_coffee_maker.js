/**
 * Q1 – The Startup Morning: Async Coffee Maker
 * Simulates asynchronous coffee preparation steps using Promise chaining.
 */

// Helper function to simulate step execution with random failure risk
function stepWrapper(stepName, delayMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 15% random failure probability to test .catch()
            const isSuccess = Math.random() > 0.15;
            if (isSuccess) {
                console.log(`[Step Complete] ${stepName}`);
                resolve(stepName);
            } else {
                reject(new Error(`Failed during step: ${stepName}`));
            }
        }, delayMs);
    });
}

function boilWater() {
    console.log("Starting: Boiling water...");
    return stepWrapper("Boiling water", 1200);
}

function brewCoffee() {
    console.log("Starting: Brewing coffee grounds...");
    return stepWrapper("Brewing coffee", 1500);
}

function pourIntoCup() {
    console.log("Starting: Pouring coffee into cup...");
    return stepWrapper("Pouring into cup", 1000);
}

console.log("=== Q1: STARTUP MORNING COFFEE MAKER ===");

boilWater()
    .then(() => brewCoffee())
    .then(() => pourIntoCup())
    .then(() => {
        console.log("
☕ Coffee ready for the team!");
    })
    .catch((error) => {
        console.error(`
❌ Coffee Making Failed: ${error.message}`);
    });
