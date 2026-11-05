/**
 * Q10: Departmental Employee Evaluator
 * Evaluates performance scores of departments using nested arrays and conditional loops.
 */

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("=== Q10: Departmental Employee Evaluator ===");

for (let i = 0; i < departments.length; i++) {
    const deptName = departments[i][0];
    const score = departments[i][1];
    let evaluation = "";

    if (score >= 90) {
        evaluation = "Excellent";
    } else if (score >= 75 && score <= 89) {
        evaluation = "Good";
    } else if (score >= 60 && score <= 74) {
        evaluation = "Average";
    } else {
        evaluation = "Needs Improvement";
    }

    console.log(`Department: ${deptName.padEnd(8)} | Score: ${score} | Performance: [${evaluation}]`);
}
