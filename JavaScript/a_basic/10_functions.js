/**
 * Topic: Functions in JavaScript
 * Concepts Covered:
 *   - Function Declarations vs Function Expressions
 *   - Arrow functions and lexical 'this'
 *   - Default parameters & Rest parameters (...)
 *   - First-class citizen functions & Callbacks
 */

// 1. Function Declaration (Hoisted)
function calculateArea(width, height = 10) {
  return width * height;
}

// 2. Function Expression
const formatCurrency = function(amount, symbol = '$') {
  return `${symbol}${amount.toFixed(2)}`;
};

// 3. Arrow Function
const multiply = (a, b) => a * b;

// 4. Rest Parameters
function sumAll(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// 5. Higher-Order Functions / Callbacks
function executeWithLog(label, fn, ...args) {
  console.log(`[Executing] ${label}`);
  const result = fn(...args);
  console.log(`[Result] ${result}`);
  return result;
}

console.log("Area:", calculateArea(5));
console.log("Formatted:", formatCurrency(49.5));
console.log("Multiplied:", multiply(6, 7));
console.log("Sum All:", sumAll(10, 20, 30, 40));
executeWithLog("Multiply 3x9", multiply, 3, 9);
