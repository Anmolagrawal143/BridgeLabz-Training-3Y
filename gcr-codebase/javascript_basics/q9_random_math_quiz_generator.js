/**
 * Q9: Random Math Quiz Generator
 * Logic: Generate 2 random integers between 1-20 and select a random operator.
 * Compute correct answer using a switch statement and format division to 2 decimal places.
 */

// Generate random operands between 1 and 20
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

// Operators array
const operators = ['+', '-', '*', '/'];
const randomOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer = 0;

switch (randomOperator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        correctAnswer = Number((num1 / num2).toFixed(2));
        break;
}

// Display Question and Correct Answer
console.log("=== Random Math Quiz Generator ===");
console.log(`Question: What is ${num1} ${randomOperator} ${num2}?`);
console.log(`Correct Answer: ${correctAnswer}`);
