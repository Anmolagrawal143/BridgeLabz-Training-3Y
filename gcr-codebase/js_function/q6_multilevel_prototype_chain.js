/**
 * Q6: 3-Level Prototype Chain (Person -> Faculty -> Professor)
 * Demonstrates multi-level inheritance chain using constructor functions.
 */

// Level 1: Person
function Person(name) {
    this.name = name;
}
Person.prototype.getPersonInfo = function() {
    return `[Person] Name: ${this.name}`;
};

// Level 2: Faculty (Inherits Person)
function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.getFacultyInfo = function() {
    return `[Faculty] Department: ${this.department}`;
};

// Level 3: Professor (Inherits Faculty)
function Professor(name, department, researchArea) {
    Faculty.call(this, name, department);
    this.researchArea = researchArea;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.getProfessorInfo = function() {
    return `[Professor] Research Area: ${this.researchArea}`;
};

// Instantiation & Multilevel Chain Demonstration
console.log("=== Q6: Multi-level Prototype Chain (Person -> Faculty -> Professor) ===");
const prof = new Professor("Dr. Sharma", "Computer Science", "Artificial Intelligence");

// Accessing methods up the prototype chain
console.log(prof.getPersonInfo());    // Found at Person.prototype
console.log(prof.getFacultyInfo());   // Found at Faculty.prototype
console.log(prof.getProfessorInfo()); // Found at Professor.prototype
