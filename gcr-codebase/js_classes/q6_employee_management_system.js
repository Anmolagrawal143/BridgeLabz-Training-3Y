/**
 * Q6: Employee Management System (Classes + Object Methods)
 * Employee class with getAnnualSalary(), applyBonus(), and total company payout using reduce().
 */

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent > 0) {
            const bonusAmount = (this.salary * percent) / 100;
            this.salary += bonusAmount;
            console.log(`Applied ${percent}% bonus to ${this.name}. New Monthly: ₹${this.salary}`);
        }
    }

    getDetails() {
        return `ID: ${this.id} | Name: ${this.name.padEnd(15)} | Dept: ${this.department.padEnd(10)} | Monthly: ₹${this.salary} | Annual: ₹${this.getAnnualSalary()}`;
    }
}

const employees = [
    new Employee(1, "Rohan Das", "Tech", 65000),
    new Employee(2, "Priya Sharma", "HR", 48000),
    new Employee(3, "Vikram Patel", "Tech", 82000),
    new Employee(4, "Sneha Reddy", "Finance", 55000),
    new Employee(5, "Amit Kumar", "Marketing", 42000)
];

console.log("=== Q6: EMPLOYEE MANAGEMENT SYSTEM ===");
employees.forEach(emp => console.log(emp.getDetails()));

const totalAnnualPayout = employees.reduce((total, emp) => total + emp.getAnnualSalary(), 0);

console.log(`\n==============================================`);
console.log(`Total Company Annual Payout: ₹${totalAnnualPayout.toLocaleString()}`);
console.log(`==============================================`);
