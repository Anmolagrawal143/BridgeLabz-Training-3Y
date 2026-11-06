/**
 * Q5 – Frontend Rush: Avoiding Callback Hell
 * Refactors nested callback chains into clean async/await syntax.
 */

console.log("=== Q5: FRONTEND BUILD PIPELINE ===");

// --- APPROACH 1: NESTED CALLBACKS (CALLBACK HELL) ---
function runPipelineCallbackHell() {
    console.log("
--- Starting Pipeline (Callback Hell Approach) ---");
    setTimeout(() => {
        console.log("1. Design complete");
        setTimeout(() => {
            console.log("2. Build complete");
            setTimeout(() => {
                console.log("3. Test complete");
                setTimeout(() => {
                    console.log("4. Deploy complete");
                    setTimeout(() => {
                        console.log("5. Celebrate! 🥳");
                        runPipelineAsyncAwait(); // Trigger clean version after callback hell finishes
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

// Helper promise for async/await version
function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`[Async/Await] Stage complete: ${stageName}`);
            resolve(stageName);
        }, 1000);
    });
}

// --- APPROACH 2: CLEAN ASYNC / AWAIT ---
async function runPipelineAsyncAwait() {
    console.log("
--- Starting Pipeline (Clean Async/Await Approach) ---");
    try {
        await runStage("Design");
        await runStage("Build");
        await runStage("Test");
        await runStage("Deploy");
        await runStage("Celebrate 🥳");
        console.log("
Build pipeline finished successfully!");
    } catch (err) {
        console.error("Pipeline failed:", err);
    }
}

// Start execution
runPipelineCallbackHell();

/*
 * ============================================================================
 * WHY ASYNC / AWAIT IMPROVES READABILITY & MAINTAINABILITY:
 * ============================================================================
 * 1. Eliminates Deep Nesting: Prevents code from drifting right ("Pyramid of Doom").
 * 2. Sequential Code Structure: Async/await reads synchronously top-to-bottom,
 *    making control flow intuitive.
 * 3. Unified Error Handling: Errors in any stage can be caught using a single
 *    standard try/catch block instead of nested error callbacks.
 * ============================================================================
 */
