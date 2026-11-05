/**
 * Q4: Array Performance Analyzer
 * Analyzes student test scores using functional array methods.
 */

// Generate array of 8 random scores between 30 and 100
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Highest and Lowest scores
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Average score calculation using reduce()
const totalScoreSum = scores.reduce((acc, score) => acc + score, 0);
const averageScore = (totalScoreSum / scores.length).toFixed(2);

// Passing students (>= 50) using filter()
const passedStudents = scores.filter(score => score >= 50);
const passCount = passedStudents.length;

console.log("=== Q4: Array Performance Analyzer ===");
console.log(`All Student Scores : [${scores.join(", ")}]`);
console.log(`Highest Score      : ${highestScore}`);
console.log(`Lowest Score       : ${lowestScore}`);
console.log(`Average Score      : ${averageScore}`);
console.log(`Students Passed    : ${passCount} / ${scores.length} (Scores: [${passedStudents.join(", ")}])`);
