/**
 * Topic: String and Number Built-in Methods
 * Concepts Covered:
 *   - String: slice, split, trim, replace, replaceAll, startsWith, padStart
 *   - Number: parseInt, parseFloat, toFixed, isNaN, isFinite, Number.EPSILON
 */

// String manipulation
const rawEmail = "   user.name@example.com   ";
const cleanedEmail = rawEmail.trim().toLowerCase();
console.log("Cleaned email:", cleanedEmail);

const sentence = "JavaScript is amazing and JavaScript is fast";
console.log("Replaced:", sentence.replaceAll("JavaScript", "JS"));

const paddedId = "42".padStart(6, "0");
console.log("Padded Order ID:", paddedId);

// Number manipulation
const parsedInt = parseInt("100px", 10);
const parsedFloat = parseFloat("3.14159rad");
console.log("Parsed numbers:", parsedInt, parsedFloat);

const financialValue = (123.4567).toFixed(2);
console.log("Fixed 2 decimals:", financialValue);

console.log("NaN check:", Number.isNaN(NaN), Number.isFinite(1 / 0));
