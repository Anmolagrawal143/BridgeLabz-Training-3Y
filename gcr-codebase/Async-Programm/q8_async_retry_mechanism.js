/**
 * Q8 – Order Processing Flow: Async Retry Mechanism
 * Retries an unreliable API call up to 3 times before failing.
 */

// Simulated unreliable order API
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Fails 50% of the time
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                resolve("Order submitted successfully!");
            } else {
                reject(new Error("Network connection dropped."));
            }
        }, 800);
    });
}

async function processOrder() {
    console.log("=== Q8: ORDER PROCESSING RETRY SYSTEM ===");
    const maxAttempts = 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            console.log(`Attempt ${attempt}: Sending order request...`);
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success -> ${result}`);
            return result; // Order completed successfully
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed -> (${error.message})`);
            if (attempt === maxAttempts) {
                throw new Error("Order could not be processed after 3 attempts.");
            }
        }
    }
}

// Execute with error handling
processOrder()
    .then((msg) => console.log(`
🎉 Final Outcome: ${msg}`))
    .catch((err) => console.error(`
💥 Final Failure: ${err.message}`));
