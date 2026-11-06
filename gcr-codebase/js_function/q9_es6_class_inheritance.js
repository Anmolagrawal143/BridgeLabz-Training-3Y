/**
 * Q9: ES6 Class Inheritance (Person -> Student)
 * Rewriting Q5 prototype inheritance using ES6 class syntax with extends & super().
 */

// Base Class
class Person {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(`Name: ${this.name}`);
    }
}

// Derived Class
class Student extends Person {
    constructor(name, branch) {
        // Call super class constructor
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

console.log("=== Q9: ES6 Class Inheritance (Person -> Student) ===");
const studentES6 = new Student("Ananya", "Electronics");

// Method calls
studentES6.sayName();    // Inherited from Person
studentES6.showBranch(); // Defined on Student

console.log("\n[COMPARISON & VERIFICATION]:");
console.log("studentES6 instanceof Student:", studentES6 instanceof Student);
console.log("studentES6 instanceof Person:", studentES6 instanceof Person);
console.log("Is method on prototype?", typeof Student.prototype.showBranch === 'function');
console.log("Behavioral equivalence: ES6 classes are syntactic sugar over JS prototype inheritance.");
