/**
 * Q3: Arrow Function vs Regular Function 'this' Binding
 */

// 1. Object with Arrow Function
const userWithArrow = {
    name: "Aarav",
    showName: () => {
        // Arrow functions do NOT have their own 'this'.
        // They inherit 'this' lexically from the enclosing scope (which is global/module scope here).
        // Therefore, 'this.name' is undefined in strict/module scope or doesn't refer to the object.
        console.log("Arrow Function Output:", this.name);
    }
};

console.log("=== Q3: Arrow Function vs Regular Function 'this' ===");
console.log("--- Arrow Function Call ---");
userWithArrow.showName();

// Explanation log:
console.log("\n[EXPLANATION]:");
console.log("Arrow functions do not bind their own 'this'. Instead, they lexically bind 'this' to the surrounding scope.");
console.log("Inside an object literal, the surrounding scope is the outer/global scope, where 'name' is not defined on 'this'.");

// 2. Fixed version using a Regular Function
const userWithRegularFunction = {
    name: "Aarav",
    showName: function() {
        // Regular functions get 'this' bound dynamically depending on how they are called.
        // When called as userWithRegularFunction.showName(), 'this' refers to userWithRegularFunction object.
        console.log("Regular Function Output: Hello", this.name);
    }
};

console.log("\n--- Fixed Regular Function Call ---");
userWithRegularFunction.showName();
