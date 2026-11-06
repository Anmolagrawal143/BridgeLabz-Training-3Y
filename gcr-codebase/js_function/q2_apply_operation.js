/**
 * Q2: Higher-Order Function with Callbacks
 * applyOperation takes an array and a callback function to transform elements.
 */

function applyOperation(numbers, operation) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

// Callbacks logic definitions
const double = num => num * 2;
const square = num => num * num;

const inputNumbers = [1, 2, 3, 4];

console.log("=== Q2: Apply Operation Callback ===");
console.log("Input Array:", inputNumbers);
console.log("Doubled Array:", applyOperation(inputNumbers, double));
console.log("Squared Array:", applyOperation(inputNumbers, square));
