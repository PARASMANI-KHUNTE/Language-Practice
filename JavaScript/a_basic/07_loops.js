// ============================================================
// Topic: Loops
// Key Concepts: for, while, do-while, for...of, for...in,
//               break, continue, labeled statements, iteration patterns
// ============================================================

// --- 1. for loop ---
// Syntax: for (initialization; condition; update) { body }
console.log("--- for loop ---");
for (let i = 0; i < 5; i++) {
    process.stdout.write(`${i} `);  // print without newline
}
console.log();  // => 0 1 2 3 4

// Counting backwards
for (let i = 5; i > 0; i--) {
    process.stdout.write(`${i} `);
}
console.log();  // => 5 4 3 2 1

// Stepping by 2
for (let i = 0; i <= 10; i += 2) {
    process.stdout.write(`${i} `);
}
console.log();  // => 0 2 4 6 8 10

// --- 2. while loop ---
// Runs while condition is true; condition checked BEFORE each iteration
console.log("\n--- while loop ---");
let count = 0;
while (count < 5) {
    process.stdout.write(`${count} `);
    count++;
}
console.log();  // => 0 1 2 3 4

// --- 3. do...while loop ---
// Runs at least ONCE; condition checked AFTER each iteration
console.log("\n--- do...while loop ---");
let num = 10;
do {
    console.log(`num = ${num}`);
    num++;
} while (num < 10);
// => num = 10  (executes once even though 10 < 10 is false)

// Practical: input validation simulation
let attempts = 0;
let password;
do {
    password = attempts === 2 ? "correct" : "wrong";  // simulate input
    attempts++;
} while (password !== "correct" && attempts < 5);
console.log(`Logged in after ${attempts} attempts`);  // => 3

// --- 4. for...of — iterating over iterables ---
// Works with: Arrays, Strings, Maps, Sets, NodeLists, etc.
console.log("\n--- for...of ---");

// Array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
    console.log(fruit);
}
// => apple, banana, cherry

// String (iterates characters)
for (const char of "Hello") {
    process.stdout.write(`${char}-`);
}
console.log();  // => H-e-l-l-o-

// With destructuring
const entries = [["name", "Alice"], ["age", 30]];
for (const [key, value] of entries) {
    console.log(`${key}: ${value}`);
}
// => name: Alice
// => age: 30

// Getting index with entries()
for (const [index, fruit] of fruits.entries()) {
    console.log(`${index}: ${fruit}`);
}
// => 0: apple, 1: banana, 2: cherry

// --- 5. for...in — iterating over object keys ---
// Iterates over enumerable properties (including inherited ones)
console.log("\n--- for...in ---");

const person = { name: "Alice", age: 30, city: "NYC" };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// => name: Alice, age: 30, city: NYC

// CAUTION with arrays — for...in gives you indices as strings, not values
const arr = [10, 20, 30];
for (const index in arr) {
    console.log(typeof index, index);  // "string" "0", "string" "1", etc.
}
// Use for...of for arrays instead!

// Filter to own properties only (skip inherited)
for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`Own: ${key}`);
    }
}

// --- 6. break — exit the loop entirely ---
console.log("\n--- break ---");
for (let i = 0; i < 10; i++) {
    if (i === 5) break;  // stop when i reaches 5
    process.stdout.write(`${i} `);
}
console.log();  // => 0 1 2 3 4

// Searching for a value
const numbers = [3, 7, 1, 9, 4, 6];
let found = -1;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 9) {
        found = i;
        break;
    }
}
console.log(`Found 9 at index: ${found}`);  // => Found 9 at index: 3

// --- 7. continue — skip to next iteration ---
console.log("\n--- continue ---");
// Print only odd numbers
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;  // skip even numbers
    process.stdout.write(`${i} `);
}
console.log();  // => 1 3 5 7 9

// --- 8. Labeled statements — break/continue outer loops ---
console.log("\n--- labeled statements ---");
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log(`Breaking outer at i=${i}, j=${j}`);
            break outer;  // breaks the OUTER loop
        }
        console.log(`  i=${i}, j=${j}`);
    }
}
// => i=0,j=0  i=0,j=1  i=0,j=2  i=1,j=0  Breaking outer at i=1,j=1

// --- 9. Nested loops — common patterns ---
console.log("\n--- Nested loop: multiplication table ---");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += `${(i * j).toString().padStart(3)} `;
    }
    console.log(row);
}

// --- 10. Infinite loops (use with caution!) ---
// while (true) { ... break; }  — must have a break condition
// for (;;) { ... break; }      — equivalent infinite for loop

// --- 11. Loop performance tip ---
// Cache array length for large arrays
const bigArray = new Array(1000).fill(0);
for (let i = 0, len = bigArray.length; i < len; i++) {
    // more efficient: length is read once
}

// --- 12. Choosing the right loop ---
// • for:        when you need an index counter
// • while:      when the number of iterations is unknown
// • do-while:   when you need at least one execution
// • for...of:   iterating array values, strings, Maps, Sets
// • for...in:   iterating object keys (avoid for arrays)
// • .forEach(): array method (see 12_array_methods.js)

// --- Quick recap ---
// • for is the classic counted loop
// • while checks before, do-while checks after (runs at least once)
// • for...of iterates VALUES of iterables (arrays, strings, maps)
// • for...in iterates KEYS of objects (use hasOwnProperty to filter)
// • break exits the loop; continue skips to the next iteration
// • Labels let you break/continue outer loops from inner loops
