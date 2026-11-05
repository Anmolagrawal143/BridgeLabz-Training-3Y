/**
 * Q5: Boolean Logic Access System
 * Evaluates smart home security using logical operators (&&, ||, !).
 */

function evaluateSecurityStatus(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // Security Condition: Alarm MUST be on AND door closed AND window closed AND owner inside
    const isSystemSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    const status = isSystemSecure ? "Secure" : "Unsafe";
    
    console.log(`Door Locked: ${isDoorLocked} | Window Closed: ${isWindowClosed} | Alarm On: ${isAlarmOn} | Owner Inside: ${isOwnerInside}`);
    console.log(`-> System Status: [${status}]
`);
}

console.log("=== Q5: Boolean Logic Access System ===");

console.log("Test Case 1 (All Conditions Met):");
evaluateSecurityStatus(true, true, true, true);

console.log("Test Case 2 (Door Unlocked):");
evaluateSecurityStatus(false, true, true, true);

console.log("Test Case 3 (Alarm Off):");
evaluateSecurityStatus(true, true, false, true);

console.log("Test Case 4 (Window Open & Owner Outside):");
evaluateSecurityStatus(true, false, true, false);
