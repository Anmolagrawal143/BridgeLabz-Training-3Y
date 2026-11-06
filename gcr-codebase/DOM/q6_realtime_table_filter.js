/**
 * Q6: Real-Time Table Filter Using input Event
 * Logic:
 * - Filters student records (Name, Branch, CGPA) dynamically on input.
 * - Case-insensitive matching across columns.
 * - Shows "No results found" row if no matching rows exist.
 */

const studentsData = [
    { name: "Aarav Sharma", branch: "CSE", cgpa: "9.2" },
    { name: "Rohan Patel", branch: "ECE", cgpa: "8.5" },
    { name: "Priya Das", branch: "ME", cgpa: "8.9" },
    { name: "Ananya Roy", branch: "CSE", cgpa: "9.6" },
    { name: "Kiran Kumar", branch: "EEE", cgpa: "7.8" }
];

function filterStudents(query) {
    const q = query.toLowerCase().trim();
    const results = studentsData.filter(student => 
        student.name.toLowerCase().includes(q) ||
        student.branch.toLowerCase().includes(q) ||
        student.cgpa.toLowerCase().includes(q)
    );

    if (results.length === 0) {
        return "No results found";
    }
    return results;
}

console.log("=== Q6: Real-Time Table Filter Test ===");
console.log("Filter query 'cse':", filterStudents('cse'));
console.log("Filter query '9.':", filterStudents('9.'));
console.log("Filter query 'xyz':", filterStudents('xyz'));
