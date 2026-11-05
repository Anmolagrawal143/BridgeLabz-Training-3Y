/**
 * Q7: Login Form Validation using RegExp
 * Validates Username (>=5 chars) and Password (>=8 chars, number, uppercase, lowercase, special char).
 */

function validateLogin(username, password) {
    const errors = [];

    if (!username || username.length < 5) {
        errors.push("Username must be at least 5 characters long.");
    }

    if (!password || password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/\d/.test(password)) {
        errors.push("Password must contain at least one number.");
    }
    if (!/[@$!%*?&]/.test(password)) {
        errors.push("Password must contain at least one special character (@$!%*?&).");
    }

    if (errors.length === 0) {
        console.log(`[LOGIN SUCCESS] Welcome back, ${username}!`);
        return { success: true, message: "Validation passed!" };
    } else {
        console.log(`[LOGIN FAILED] Errors for '${username}':`);
        errors.forEach(err => console.log(` - ${err}`));
        return { success: false, errors };
    }
}

console.log("=== Q7: LOGIN FORM VALIDATION TEST ===");
console.log("--- Test Case 1: Valid Credentials ---");
validateLogin("alex_dev", "SecurePass@123");

console.log("\n--- Test Case 2: Invalid Credentials ---");
validateLogin("alex", "pass");
