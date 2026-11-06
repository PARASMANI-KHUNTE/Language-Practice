// ============================================================
// Topic: Arrays
// Key Concepts: Creating arrays, accessing elements, mutating methods,
//               non-mutating methods, spread operator, iteration
// ============================================================

// --- 1. Creating arrays ---
const arr1 = [1, 2, 3, 4, 5];                     // Array literal (most common)
const arr2 = new Array(5);                          // Creates array with 5 empty slots
const arr3 = Array.of(1, 2, 3);                    // Array.of() — avoids the single-number trap
const arr4 = Array.from("hello");                   // From iterable: ["h","e","l","l","o"]
const arr5 = Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]

console.log(arr1);  // => [1, 2, 3, 4, 5]
console.log(arr4);  // => ["h", "e", "l", "l", "o"]
console.log(arr5);  // => [0, 1, 2, 3, 4]

// Mixed types (JavaScript allows this)
const mixed = [1, "hello", true, null, { name: "Alice" }, [1, 2]];
console.log(mixed);

// --- 2. Accessing elements ---
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits[0]);        // => "apple"  (zero-indexed)
console.log(fruits[2]);        // => "cherry"
console.log(fruits[fruits.length - 1]);  // => "elderberry" (last element)
console.log(fruits.at(-1));    // => "elderberry" (ES2022 — negative indexing)
console.log(fruits.at(-2));    // => "date"

// --- 3. Modifying elements ---
fruits[1] = "blueberry";
console.log(fruits);  // => ["apple", "blueberry", "cherry", "date", "elderberry"]

// --- 4. Array length ---
console.log(fruits.length);    // => 5
// Setting length truncates the array
const temp = [1, 2, 3, 4, 5];
temp.length = 3;
console.log(temp);  // => [1, 2, 3]

// --- 5. Mutating methods (modify the original array) ---

// push — add to end, returns new length
const colors = ["red", "green"];
colors.push("blue");
colors.push("yellow", "purple");
console.log(colors);  // => ["red", "green", "blue", "yellow", "purple"]

// pop — remove from end, returns removed element
const last = colors.pop();
console.log(last);    // => "purple"
console.log(colors);  // => ["red", "green", "blue", "yellow"]

// unshift — add to beginning
colors.unshift("white");
console.log(colors);  // => ["white", "red", "green", "blue", "yellow"]

// shift — remove from beginning
const first = colors.shift();
console.log(first);   // => "white"
console.log(colors);  // => ["red", "green", "blue", "yellow"]

// splice(start, deleteCount, ...items) — insert, remove, or replace
const nums = [1, 2, 3, 4, 5];

// Remove 2 elements starting at index 1
const removed = nums.splice(1, 2);
console.log(removed);  // => [2, 3]
console.log(nums);     // => [1, 4, 5]

// Insert without removing (deleteCount = 0)
nums.splice(1, 0, 20, 30);
console.log(nums);     // => [1, 20, 30, 4, 5]

// Replace: remove 1, insert 1
nums.splice(2, 1, 99);
console.log(nums);     // => [1, 20, 99, 4, 5]

// reverse — reverses in place
const letters = ["a", "b", "c"];
letters.reverse();
console.log(letters);  // => ["c", "b", "a"]

// sort — sorts in place (alphabetically by default!)
const words = ["banana", "apple", "cherry"];
words.sort();
console.log(words);    // => ["apple", "banana", "cherry"]

// GOTCHA: Numeric sort needs a compare function
const numbers = [10, 1, 21, 2];
numbers.sort();                        // BAD: ["1", "10", "2", "21"] (lexicographic)
console.log(numbers);                  // => [1, 10, 2, 21]
numbers.sort((a, b) => a - b);        // GOOD: ascending numeric
console.log(numbers);                  // => [1, 2, 10, 21]

// fill — fill with a value
const filled = new Array(5).fill(0);
console.log(filled);  // => [0, 0, 0, 0, 0]

// --- 6. Non-mutating methods (return a new array/value) ---

// slice(start, end) — extract portion (end exclusive)
const items = [10, 20, 30, 40, 50];
console.log(items.slice(1, 3));    // => [20, 30]
console.log(items.slice(-2));      // => [40, 50]
console.log(items.slice());        // => [10, 20, 30, 40, 50] (shallow copy)

// concat — merge arrays
const a = [1, 2];
const b = [3, 4];
const c = a.concat(b, [5, 6]);
console.log(c);  // => [1, 2, 3, 4, 5, 6]

// join — convert array to string
console.log(["Hello", "World"].join(" "));     // => "Hello World"
console.log([2024, 1, 15].join("-"));           // => "2024-1-15"

// includes — check if value exists
console.log([1, 2, 3].includes(2));   // => true
console.log([1, 2, 3].includes(5));   // => false

// indexOf / lastIndexOf
console.log([1, 2, 3, 2].indexOf(2));     // => 1  (first occurrence)
console.log([1, 2, 3, 2].lastIndexOf(2)); // => 3  (last occurrence)

// flat — flatten nested arrays
console.log([1, [2, [3, [4]]]].flat());    // => [1, 2, [3, [4]]] (1 level)
console.log([1, [2, [3, [4]]]].flat(Infinity)); // => [1, 2, 3, 4] (all levels)

// --- 7. Spread operator (...) ---
const original = [1, 2, 3];

// Copy an array
const copy = [...original];
console.log(copy);              // => [1, 2, 3]

// Merge arrays
const merged = [...[1, 2], ...[3, 4], 5];
console.log(merged);            // => [1, 2, 3, 4, 5]

// Convert string to array of characters
const chars = [..."Hello"];
console.log(chars);             // => ["H", "e", "l", "l", "o"]

// Use in function calls
console.log(Math.max(...[5, 2, 8, 1]));  // => 8

// --- 8. Destructuring arrays ---
const [x, y, z] = [10, 20, 30];
console.log(x, y, z);  // => 10 20 30

// Skip elements
const [, second, , fourth] = [1, 2, 3, 4];
console.log(second, fourth);  // => 2 4

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head);   // => 1
console.log(tail);   // => [2, 3, 4, 5]

// Default values
const [p = 0, q = 0, r = 0] = [10, 20];
console.log(p, q, r);  // => 10 20 0

// Swap variables
let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n);  // => 2 1

// --- 9. Checking for arrays ---
console.log(Array.isArray([1, 2]));    // => true
console.log(Array.isArray("hello"));   // => false
console.log(Array.isArray({ 0: "a" })); // => false

// --- Quick recap ---
// • Create arrays with [], Array.of(), Array.from()
// • push/pop (end), unshift/shift (beginning), splice (anywhere)
// • sort() needs a compare function for numbers: (a, b) => a - b
// • slice() returns a new array; splice() mutates the original
// • Spread (...) copies, merges, and expands arrays
// • Destructuring extracts values with [a, b, ...rest] syntax
// • Use Array.isArray() to check type (typeof [] returns "object")
