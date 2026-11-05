/**
 * Q5: Weather Activity Planner
 * Logic: Combine temperature, rain status, and wind speed using logical operators (&&, ||).
 * Suggest appropriate outdoor or indoor activity based on conditions.
 */

// Weather variables
const temperature = 28; // in Celsius
const isRaining = false;
const windSpeed = 12; // in km/h

let recommendation = "";

// Conditional logic execution
if (isRaining) {
    recommendation = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    recommendation = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    recommendation = "Too cold and windy — stay home.";
} else {
    recommendation = "Perfect day for a walk.";
}

// Display recommendation
console.log("=== Weather Activity Advice ===");
console.log(`Temperature: ${temperature}°C | Raining: ${isRaining} | Wind Speed: ${windSpeed} km/h`);
console.log(`Advice: ${recommendation}`);
