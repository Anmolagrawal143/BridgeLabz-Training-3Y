/**
 * Q7: Smart Guessing Game (Number Range)
 * Logic: Generate a secret random number between 1 and 50 using Math.random().
 * Evaluate test user guess against secret using nested conditional checks.
 */

// Generate secret number between 1 and 50
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test user guess variable
const userGuess = 25;

console.log(`Secret Number (Generated): ${secretNumber}`);
console.log(`User Guess: ${userGuess}`);

// Evaluate guess
if (userGuess === secretNumber) {
    console.log("Result: Correct guess!");
} else {
    // Check if within ±3 range
    const difference = Math.abs(userGuess - secretNumber);
    if (difference <= 3) {
        console.log("Result: Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Result: Too high");
    } else {
        console.log("Result: Too low");
    }
}
