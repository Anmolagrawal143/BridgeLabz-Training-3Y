/**
 * Q7: Customer Feedback Processor
 * Analyzes customer review text length and sentiment keywords.
 */

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count total words in feedback
const wordList = feedback.trim().split(/\s+/);
const wordCount = wordList.length;

// Check sentiment keywords
const lowerFeedback = feedback.toLowerCase();
const containsNegativeKeyword = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

const sentimentResult = containsNegativeKeyword ? "Needs Improvement" : "Positive Feedback";

console.log("=== Q7: Customer Feedback Processor ===");
console.log(`Feedback Text    : "${feedback}"`);
console.log(`Total Word Count : ${wordCount} words`);
console.log(`Feedback Result  : [${sentimentResult}]`);
