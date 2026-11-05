/**
 * Q4: Academic Performance Evaluator
 * Logic: Check if any subject score is below the passing threshold of 35.
 * Calculate overall percentage and evaluate promotion grade using logical operators.
 */

// Marks for 5 subjects
const marks = [88, 92, 79, 85, 90];
const totalSubjects = marks.length;

// Validation check: If any subject mark < 35, student is automatically detained
const hasFailedSubject = marks.some(score => score < 35);

// Calculate total and percentage
const totalMarks = marks.reduce((sum, score) => sum + score, 0);
const percentage = totalMarks / totalSubjects;

let status = "";

if (hasFailedSubject) {
    status = "Detained (Failed in one or more individual subjects < 35)";
} else if (percentage >= 85) {
    status = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    status = "Promoted";
} else {
    status = "Detained";
}

// Output evaluation report
console.log("=== Academic Performance Report ===");
console.log(`Subject Marks: [${marks.join(", ")}]`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
console.log(`Final Result: ${status}`);
