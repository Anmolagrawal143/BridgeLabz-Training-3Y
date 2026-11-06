/**
 * Q7 – The Lazy Loader: Promise Combinator Practice
 * Loads dashboard modules asynchronously and tracks state with Promise.allSettled().
 */

function loadProfile() {
    return new Promise((resolve) => setTimeout(() => resolve("Profile Loaded"), 2000));
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Randomly reject posts to test allSettled behavior
            if (Math.random() > 0.5) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed to Load");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve) => setTimeout(() => resolve("Messages Loaded"), 1000));
}

async function loadDashboard() {
    console.log("=== Q7: DASHBOARD MODULE LAZY LOADER ===");
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const totalTimeTaken = Date.now() - startTime;

    console.log("
--- Module Loading Results ---");
    results.forEach((res, index) => {
        const moduleNames = ["Profile", "Posts", "Messages"];
        if (res.status === "fulfilled") {
            console.log(`✅ [${moduleNames[index]}] Success: ${res.value}`);
        } else {
            console.log(`❌ [${moduleNames[index]}] Rejected: ${res.reason}`);
        }
    });

    console.log(`
Total time taken for allSettled: ${totalTimeTaken}ms`);
}

loadDashboard();
