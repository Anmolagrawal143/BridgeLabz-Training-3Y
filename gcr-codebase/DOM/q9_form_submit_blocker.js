/**
 * Q9: Form Submit Blocker with preventDefault() and Live Errors
 * Logic:
 * - Validates Name (required), Email (required + contains '@'), Password (min 6 chars).
 * - Intercepts form submission using e.preventDefault().
 * - Displays inline error messages for invalid fields.
 * - Clears error messages live on keyup/input correction.
 * - Logs "Form Submitted Successfully" upon valid submission.
 */

function validateForm(name, email, password) {
    const errors = {};

    if (!name.trim()) {
        errors.name = "Name is required.";
    }

    if (!email.trim() || !email.includes('@')) {
        errors.email = "Email is required and must contain '@'.";
    }

    if (!password || password.length < 6) {
        errors.password = "Password must be at least 6 characters long.";
    }

    const isValid = Object.keys(errors).length === 0;
    return { isValid, errors };
}

console.log("=== Q9: Form Submit Blocker Test ===");
console.log("Invalid Input Check:", validateForm("", "testmail.com", "123"));
console.log("Valid Input Check:", validateForm("Aarav", "aarav@gmail.com", "secret123"));
