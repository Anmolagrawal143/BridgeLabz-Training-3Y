/**
 * Q5: Prototype Inheritance (Person -> Student)
 * Demonstrates traditional prototype inheritance using Object.create and Constructor linking.
 */

// Base Constructor: Person
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log(`Name: ${this.name}`);
};

// Derived Constructor: Student
function Student(name, branch) {
    // Call super constructor to initialize inherited properties
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person prototype methods
Student.prototype = Object.create(Person.prototype);

// Reset constructor reference
Student.prototype.constructor = Student;

// Add Student specific prototype method
Student.prototype.showBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

// Instantiation & Prototype Chain Demonstration
console.log("=== Q5: Prototype Inheritance (Person -> Student) ===");
const student1 = new Student("Rohan", "Computer Science");

// Methods from both Student and Person prototype are accessible
student1.sayName();    // Inherited from Person.prototype
student1.showBranch(); // Defined on Student.prototype

// Prototype Chain Inspection
console.log("student1 instanceof Student:", student1 instanceof Student);
console.log("student1 instanceof Person:", student1 instanceof Person);
