// ============================================================
// Topic: String Operations
// Key Concepts: Template literals, string methods, slice, split,
//               search, replace, padding, repeat
// ============================================================

// --- 1. Creating strings ---
let single = 'Hello';
let double = "World";
let backtick = `Hello, ${double}!`;  // Template literal with interpolation
console.log(backtick);               // => Hello, World!

// --- 2. Template literals (backticks) ---
// Expression interpolation
let a = 10, b = 20;
console.log(`${a} + ${b} = ${a + b}`);  // => 10 + 20 = 30

// Multiline strings
let multiline = `
  Line 1
  Line 2
  Line 3
`;
console.log(multiline);

// Calling functions inside template literals
console.log(`Uppercase: ${"hello".toUpperCase()}`); // => Uppercase: HELLO

// Tagged template literals (advanced usage)
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) =>
        result + str + (values[i] !== undefined ? `**${values[i]}**` : ""), "");
}
let name = "Alice";
let age = 30;
console.log(highlight`Name: ${name}, Age: ${age}`);
// => Name: **Alice**, Age: **30**

// --- 3. String length and character access ---
let str = "JavaScript";
console.log(str.length);       // => 10
console.log(str[0]);           // => "J"  (bracket notation)
console.log(str.charAt(4));    // => "S"  (charAt method)
console.log(str.charCodeAt(0)); // => 74  (Unicode code point)
console.log(str.at(-1));       // => "t"  (negative index, ES2022)

// Strings are IMMUTABLE — you cannot change individual characters
// str[0] = "j";  // silently fails (no error, but no change)

// --- 4. Case conversion ---
console.log("hello".toUpperCase());     // => "HELLO"
console.log("HELLO".toLowerCase());     // => "hello"

// --- 5. Searching in strings ---
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(sentence.indexOf("fox"));       // => 16 (first occurrence)
console.log(sentence.indexOf("cat"));       // => -1 (not found)
console.log(sentence.lastIndexOf("the"));   // => 31 (last occurrence, case-sensitive)
console.log(sentence.includes("quick"));    // => true
console.log(sentence.startsWith("The"));    // => true
console.log(sentence.endsWith("dog"));      // => true

// --- 6. slice, substring, substr ---
let text = "Hello, World!";
// slice(start, end) — end is exclusive, supports negative indices
console.log(text.slice(0, 5));     // => "Hello"
console.log(text.slice(7));        // => "World!"
console.log(text.slice(-6));       // => "orld!"
console.log(text.slice(-6, -1));   // => "orld"

// substring(start, end) — like slice but no negative indices
console.log(text.substring(0, 5)); // => "Hello"
console.log(text.substring(7, 12)); // => "World"

// --- 7. split — convert string to array ---
let csv = "apple,banana,cherry,date";
let fruits = csv.split(",");
console.log(fruits);    // => ["apple", "banana", "cherry", "date"]

let words = "Hello World".split(" ");
console.log(words);     // => ["Hello", "World"]

let chars = "ABC".split("");
console.log(chars);     // => ["A", "B", "C"]

// Split with limit
console.log(csv.split(",", 2));  // => ["apple", "banana"]

// --- 8. replace and replaceAll ---
let greeting = "Hello World, Hello JS!";
console.log(greeting.replace("Hello", "Hi"));       // => "Hi World, Hello JS!" (first only)
console.log(greeting.replaceAll("Hello", "Hi"));     // => "Hi World, Hi JS!"
console.log(greeting.replace(/hello/gi, "Hey"));     // => "Hey World, Hey JS!" (regex, case-insensitive)

// --- 9. trim — remove whitespace ---
let padded = "   Hello, World!   ";
console.log(padded.trim());        // => "Hello, World!"
console.log(padded.trimStart());   // => "Hello, World!   "
console.log(padded.trimEnd());     // => "   Hello, World!"

// --- 10. Padding ---
let num = "42";
console.log(num.padStart(5, "0"));  // => "00042"
console.log(num.padEnd(5, "0"));    // => "42000"
console.log(num.padStart(5));       // => "   42" (default pad is space)

// --- 11. repeat ---
console.log("ha".repeat(3));       // => "hahaha"
console.log("-".repeat(20));       // => "--------------------"

// --- 12. Concatenation ---
// Using + operator
let full = "Hello" + " " + "World";
console.log(full);    // => Hello World

// Using concat()
console.log("Hello".concat(" ", "World", "!"));  // => Hello World!

// Template literals (preferred for readability)
let firstName = "John";
let lastName = "Doe";
console.log(`${firstName} ${lastName}`);  // => John Doe

// --- 13. Converting to/from strings ---
console.log(String(123));          // => "123"
console.log(String(true));         // => "true"
console.log(String(null));         // => "null"
console.log((42).toString());      // => "42"
console.log((255).toString(16));   // => "ff" (hexadecimal)
console.log((10).toString(2));     // => "1010" (binary)

// --- Quick recap ---
// • Template literals (``) support interpolation and multiline
// • Strings are immutable — methods return NEW strings
// • slice() supports negative indices; substring() does not
// • split() converts string to array; join() does the reverse
// • includes(), startsWith(), endsWith() for boolean searches
// • trim(), padStart(), padEnd() for formatting
// • replace() changes first match; replaceAll() changes all
