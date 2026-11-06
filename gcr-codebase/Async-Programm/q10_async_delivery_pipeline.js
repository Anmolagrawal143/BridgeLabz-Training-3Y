/**
 * Q10 – The Final Delivery: Async Pipeline Debugger
 * Simulates a multi-stage food delivery pipeline with error handling.
 */

function pipelineStep(stepNumber, stepDescription) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000; // 1-2 seconds delay
        setTimeout(() => {
            const isSuccess = Math.random() > 0.1; // 90% success rate per step
            if (isSuccess) {
                console.log(`Step ${stepNumber}: ${stepDescription}`);
                resolve(stepDescription);
            } else {
                reject(new Error(`Failure at Step ${stepNumber}: ${stepDescription}`));
            }
        }, delay);
    });
}

function takeOrder() { return pipelineStep(1, "Order taken"); }
function prepareFood() { return pipelineStep(2, "Food prepared"); }
function packFood() { return pipelineStep(3, "Package ready"); }
function dispatchDelivery() { return pipelineStep(4, "Out for delivery"); }
function deliverOrder() { return pipelineStep(5, "Delivery completed!"); }

async function runPipeline() {
    console.log("=== Q10: FOOD DELIVERY PIPELINE SIMULATOR ===");
    console.log("Start Pipeline");

    try {
        await takeOrder();
        await prepareFood();
        await packFood();
        await dispatchDelivery();
        await deliverOrder();
        console.log("
✨ Food delivery pipeline completed successfully!");
    } catch (error) {
        console.error(`
🚨 Pipeline failed! (${error.message})`);
    }
}

runPipeline();

/*
 * ============================================================================
 * DETAILED ASYNC BEHAVIOR & EVENT LOOP CONTROL FLOW EXPLANATION:
 * ============================================================================
 * 1. Non-Blocking Execution: Each pipeline step returns a Promise containing a
 *    setTimeout call. This delegates timer management to Web APIs / Node.js C++ bindings
 *    without freezing the single-threaded JavaScript thread.
 * 2. Suspending Execution with 'await': When 'await' is encountered, execution
 *    of 'runPipeline' pauses at that exact step, yielding control back to the main Event Loop.
 * 3. Resuming Execution: When the timer expires and the Promise resolves, the resolved
 *    callback is placed into the Microtask Queue. The Event Loop pushes it back onto
 *    the Call Stack, allowing the pipeline to proceed to the next step.
 * 4. Exception Propagation: If any Promise rejects, the 'await' expression throws an error,
 *    immediately jumping to the 'catch' block and terminating subsequent pipeline steps.
 * ============================================================================
 */
