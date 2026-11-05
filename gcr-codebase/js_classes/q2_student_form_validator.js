/**
 * Q2: Student Form Validator (Forms + RegExp)
 * Validates Name (alphabets), Email (proper format), Phone (10 digits), Password (uppercase, number, special char).
 */

function validateStudentForm(data) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const results = {
        name: nameRegex.test(data.name),
        email: emailRegex.test(data.email),
        phone: phoneRegex.test(data.phone),
        password: passwordRegex.test(data.password)
    };

    results.isValidAll = results.name && results.email && results.phone && results.password;
    return results;
}

console.log("=== Q2: STUDENT FORM VALIDATION TEST ===");
const testValid = validateStudentForm({ name: "Aarav Sharma", email: "aarav@domain.com", phone: "9876543210", password: "Pass@1234" });
console.log("Valid Input Validation Result:", testValid);

const testInvalid = validateStudentForm({ name: "Aarav123", email: "aaravdomain", phone: "98765", password: "pass" });
console.log("Invalid Input Validation Result:", testInvalid);
