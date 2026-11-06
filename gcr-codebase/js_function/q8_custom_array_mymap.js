/**
 * Q8: Custom Array Prototype Method (myMap)
 * Extends Array.prototype to create a custom implementation of Array.prototype.map().
 */

Array.prototype.myMap = function(callback) {
    const result = [];
    // 'this' refers to the array on which myMap is invoked
    for (let i = 0; i < this.length; i++) {
        // Pass current element, index, and original array to callback
        result.push(callback(this[i], i, this));
    }
    return result;
};

console.log("=== Q8: Custom Array Prototype Method (myMap) ===");
const arr = [1, 2, 3, 4];
const doubled = arr.myMap(num => num * 2);
const squaredWithIndex = arr.myMap((num, idx) => `Index ${idx}: ${num * num}`);

console.log("Original Array:", arr);
console.log("Doubled Array (myMap):", doubled);
console.log("Squared with Index (myMap):", squaredWithIndex);
