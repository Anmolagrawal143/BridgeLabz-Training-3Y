/**
 * Q7 – Smart Calculator
 * Implements mathematical operation handling with custom error checks.
 */
"use strict";

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, num1, num2) {
    try {
        let result;

        switch (operation.toLowerCase()) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    throw new Error("DivisionByZeroError: Cannot divide by zero.");
                }
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) {
                    throw new Error("NegativeRootError: Cannot calculate square root of a negative number.");
                }
                result = Math.sqrt(num1);
                break;
            default:
                throw new InvalidOperationError(`InvalidOperationError: '${operation}' is an unrecognized operation.`);
        }

        console.log(`[SUCCESS] Op: ${operation.padEnd(8)} | Inputs: (${num1}, ${num2}) => Result: ${result}`);
        return result;

    } catch (error) {
        console.error(`[FAILURE] Op: ${operation.padEnd(8)} | Error: ${error.message}`);
    }
}

console.log("=== Q7: SMART CALCULATOR DEMO ===");
calculate("add", 25, 5);
calculate("divide", 25, 0); // Throws DivisionByZero
calculate("root", -25, 0);  // Throws NegativeRoot
calculate("power", 2, 3);
calculate("invalidOp", 10, 2); // Throws InvalidOperationError
