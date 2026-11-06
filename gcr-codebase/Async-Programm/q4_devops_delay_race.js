/**
 * Q4 – DevOps Delay: Async Timeout Race
 * Tracks deployment completion across multiple servers using Promise.all() and Promise.race().
 */

function createServerDeployment(serverName, delayMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.2; // 20% random failure chance
            if (isSuccess) {
                resolve({ server: serverName, responseTime: `${delayMs / 1000}s` });
            } else {
                reject(new Error(`Deployment failed on ${serverName}`));
            }
        }, delayMs);
    });
}

const serverA = createServerDeployment("Server A", 2000);
const serverB = createServerDeployment("Server B", 3000);

console.log("=== Q4: DEVOPS SERVER DEPLOYMENT MANAGEMENT ===");

// Track first responder using Promise.race()
Promise.race([serverA, serverB])
    .then((winner) => {
        console.log(`⚡ Fastest response: ${winner.server} finished in ${winner.responseTime}`);
    })
    .catch((err) => {
        console.error(`⚡ Race Error: ${err.message}`);
    });

// Track all server completions using Promise.all()
Promise.all([serverA, serverB])
    .then((results) => {
        console.log("✅ Deployment completed for all servers.");
        console.log("Summary Results:", results);
    })
    .catch((err) => {
        console.error(`❌ Deployment Error (Promise.all): ${err.message}`);
    });
