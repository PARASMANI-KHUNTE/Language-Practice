// ============================================================
// Topic: Hello World — console.log, Comments, Basic Syntax
// Key Concepts: Output, single/multi-line comments, semicolons,
//               strict mode, basic program structure
// ============================================================

// --- 1. Single-line comments ---
// This is a single-line comment. The engine ignores everything after //

// --- 2. Multi-line (block) comments ---
/*
  This is a multi-line comment.
  Useful for longer explanations or temporarily disabling code.
*/

// --- 3. console.log — printing output ---
// console.log() writes to the standard output (terminal or browser console)
console.log("Hello, World!");                    // => Hello, World!
console.log('Single quotes work too!');          // => Single quotes work too!
console.log(`Backticks (template literals) also work`); // => Backticks (template literals) also work

// --- 4. Printing multiple values ---
// You can pass multiple arguments separated by commas
console.log("Name:", "Alice", "| Age:", 30);     // => Name: Alice | Age: 30

// --- 5. Other console methods ---
console.warn("This is a warning");              // Shows a warning (yellow in browsers)
console.error("This is an error message");      // Shows an error (red in browsers)
console.info("Informational message");          // Same as log in most environments
console.table({ name: "Alice", age: 30 });      // Displays data as a table

// --- 6. Semicolons ---
// Semicolons are optional due to Automatic Semicolon Insertion (ASI),
// but using them explicitly is considered good practice.
let greeting = "Hello";    // explicit semicolon
let name = "World"         // works without semicolon (ASI kicks in)
console.log(greeting + ", " + name + "!");  // => Hello, World!

// --- 7. Case sensitivity ---
// JavaScript is case-sensitive: `myVar` and `myvar` are different
let myVar = 10;
// let myvar = 20;  // This would be a completely separate variable

// --- 8. Strict mode ---
// "use strict" enables stricter parsing and error handling
// It must be the FIRST statement in a script or function
"use strict";
// Examples of what strict mode catches:
// x = 10;           // ReferenceError: x is not defined (no undeclared vars)
// delete Object.prototype; // TypeError

// --- 9. Unicode identifiers ---
// JavaScript supports Unicode in identifiers
let café = "Latte";
let π = 3.14159;
console.log(café, π);  // => Latte 3.14159

// --- 10. Expression vs Statement ---
// Expression: produces a value
//   Examples: 5 + 3, "hello".toUpperCase(), true && false
// Statement: performs an action
//   Examples: let x = 5; if (...) { }; for (...) { }

// --- 11. Template literal for formatted output ---
let language = "JavaScript";
let year = 1995;
console.log(`${language} was created in ${year}`);
// => JavaScript was created in 1995

// --- 12. Escape characters ---
console.log("Line 1\nLine 2");       // \n = newline
console.log("Column1\tColumn2");     // \t = tab
console.log("She said \"Hi!\"");     // \" = escaped quote
console.log('It\'s a lovely day');   // \' = escaped single quote
console.log("Backslash: \\");       // \\ = literal backslash

// --- 13. Multiline strings ---
// Using template literals (backticks) for multiline
let poem = `
  Roses are red,
  Violets are blue,
  JavaScript is fun,
  And so are you!
`;
console.log(poem);

// --- Quick recap ---
// • console.log() is your primary debugging/output tool
// • Use // for single-line and /* */ for multi-line comments
// • Semicolons are recommended but not strictly required
// • JavaScript is case-sensitive
// • "use strict" catches common mistakes
// • Template literals (``) allow embedded expressions and multiline strings
