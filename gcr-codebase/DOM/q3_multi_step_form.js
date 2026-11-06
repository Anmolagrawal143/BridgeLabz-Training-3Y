/**
 * Q3: Multi-Step Form with Next/Back & Validation
 * Logic:
 * - Manages step index (1 to 3).
 * - Validates input at each step before allowing "Next".
 * - Step 1: Name (not empty), Step 2: Email (valid format), Step 3: Password (min 6 chars).
 * - Displays final user summary upon completion.
 */

class MultiStepForm {
    constructor() {
        this.currentStep = 1;
        this.formData = { name: '', email: '', password: '' };
    }

    validateStep(step, value) {
        if (step === 1) {
            return value.trim().length > 0 ? { valid: true } : { valid: false, msg: "Name is required" };
        } else if (step === 2) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value.trim()) ? { valid: true } : { valid: false, msg: "Valid email containing @ is required" };
        } else if (step === 3) {
            return value.length >= 6 ? { valid: true } : { valid: false, msg: "Password must be at least 6 characters" };
        }
        return { valid: false, msg: "Invalid step" };
    }

    next(value) {
        const res = this.validateStep(this.currentStep, value);
        if (!res.valid) return res;

        if (this.currentStep === 1) this.formData.name = value.trim();
        if (this.currentStep === 2) this.formData.email = value.trim();
        if (this.currentStep === 3) this.formData.password = value;

        if (this.currentStep < 3) {
            this.currentStep++;
            return { valid: true, step: this.currentStep };
        } else {
            return { valid: true, complete: true, data: this.formData };
        }
    }

    back() {
        if (this.currentStep > 1) {
            this.currentStep--;
        }
        return this.currentStep;
    }
}

// Demo Execution
console.log("=== Q3: Multi-Step Form Execution Test ===");
const form = new MultiStepForm();
console.log("Step 1 Next ('John'):", form.next("John"));
console.log("Step 2 Next ('john@mail.com'):", form.next("john@mail.com"));
console.log("Step 3 Next ('sec1234'):", form.next("sec1234"));
