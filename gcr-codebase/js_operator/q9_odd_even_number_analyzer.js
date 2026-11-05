/**
 * Q9: Odd–Even Number Analyzer
 * Classifies numbers from 1 to 30 into FizzBuzz, Even, or Odd.
 */

const numbers = [];
// Populate array with numbers 1 to 30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

const analysisResults = [];

// Analyze each number
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    let classification = "";

    if (num % 3 === 0 && num % 5 === 0) {
        classification = "FizzBuzz";
    } else if (num % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    analysisResults.push(`${num}: ${classification}`);
}

console.log("=== Q9: Odd–Even Number Analyzer ===");
console.log(analysisResults.join("
"));
