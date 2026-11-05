/**
 * Q8: Dynamic Object Updater
 * Updates user object properties dynamically in real time.
 */

let user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

function updateUser(newName, newEmail, newAge) {
    if (newName) user.name = newName.trim();
    if (newEmail) user.email = newEmail.trim();
    if (newAge) user.age = Number(newAge);

    console.log("[Updated Object State]:", user);
    return user;
}

console.log("=== Q8: DYNAMIC OBJECT UPDATER ===");
console.log("Initial User Object:", user);

console.log("\n--- Simulating Form Submit with New Values ---");
updateUser("John Doe", "john.doe@gmail.com", 25);
