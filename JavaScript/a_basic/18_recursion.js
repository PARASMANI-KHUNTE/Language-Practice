// ============================================================
// TOPIC: Recursion in JavaScript
// Key Concepts: Base cases, factorial, fibonacci, recursive
//               traversal, stack overflow, tail call optimization
// ============================================================

// --- 1. What is Recursion? ---
// A function that calls itself to solve smaller sub-problems.
// Every recursive function MUST have:
//   1. A BASE CASE — condition that stops the recursion
//   2. A RECURSIVE CASE — the function calls itself with a simpler input

// Simple example: counting down
function countDown(n) {
    if (n <= 0) {           // Base case
        console.log("Done!");
        return;
    }
    console.log(n);
    countDown(n - 1);       // Recursive case: smaller problem
}
console.log("--- Countdown ---");
countDown(5);
// Output: 5, 4, 3, 2, 1, Done!

// --- 2. Factorial (n!) ---
// 5! = 5 × 4 × 3 × 2 × 1 = 120
// n! = n × (n-1)!    and    0! = 1

function factorial(n) {
    if (n < 0) throw new Error("Negative numbers not allowed");
    if (n === 0 || n === 1) return 1;  // Base case
    return n * factorial(n - 1);        // Recursive case
}

console.log("\n--- Factorial ---");
console.log("0! =", factorial(0));   // 1
console.log("5! =", factorial(5));   // 120
console.log("10! =", factorial(10)); // 3628800

// Trace of factorial(4):
// factorial(4) → 4 * factorial(3)
//                    → 3 * factorial(2)
//                          → 2 * factorial(1)
//                                → 1  (base case)
//                          → 2 * 1 = 2
//                    → 3 * 2 = 6
//              → 4 * 6 = 24

// --- 3. Fibonacci Sequence ---
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// fib(n) = fib(n-1) + fib(n-2),   fib(0)=0, fib(1)=1

// Naive recursive (exponential time O(2^n) — very slow for large n!)
function fibonacci(n) {
    if (n <= 0) return 0;   // Base case 1
    if (n === 1) return 1;  // Base case 2
    return fibonacci(n - 1) + fibonacci(n - 2);  // Two recursive calls
}

console.log("\n--- Fibonacci ---");
for (let i = 0; i <= 10; i++) {
    process.stdout.write(fibonacci(i) + " ");
}
console.log(); // 0 1 1 2 3 5 8 13 21 34 55

// Optimized with memoization (top-down dynamic programming)
function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n];    // Return cached result
    if (n <= 0) return 0;
    if (n === 1) return 1;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

console.log("fib(40) memoized:", fibMemo(40));  // 102334155 (instant!)
// Without memo, fibonacci(40) would take billions of calls

// --- 4. Recursive Sum of an Array ---
function sumArray(arr, index = 0) {
    if (index >= arr.length) return 0;               // Base case: past end
    return arr[index] + sumArray(arr, index + 1);     // Add current + rest
}

console.log("\n--- Recursive Array Operations ---");
console.log("Sum [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5])); // 15

// --- 5. Recursive Array Flattening ---
// Flatten nested arrays: [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]
function flatten(arr) {
    let result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));   // Recurse into sub-array
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log("Flatten:", flatten([1, [2, [3, [4]], 5], 6]));
// [1, 2, 3, 4, 5, 6]

// --- 6. Recursive Object Traversal ---
// Deep clone an object (handles nested objects and arrays)
function deepClone(obj) {
    if (obj === null || typeof obj !== "object") return obj; // Base case
    if (Array.isArray(obj)) return obj.map(item => deepClone(item));

    const clone = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);  // Recurse into each property
        }
    }
    return clone;
}

const original = { a: 1, b: { c: 2, d: [3, { e: 4 }] } };
const cloned = deepClone(original);
cloned.b.c = 999;
console.log("\n--- Deep Clone ---");
console.log("Original b.c:", original.b.c);  // 2 (unchanged)
console.log("Cloned b.c:", cloned.b.c);      // 999

// Find all values for a given key in a deeply nested object
function findAllValues(obj, targetKey) {
    let results = [];
    for (const key in obj) {
        if (key === targetKey) {
            results.push(obj[key]);
        }
        if (typeof obj[key] === "object" && obj[key] !== null) {
            results = results.concat(findAllValues(obj[key], targetKey));
        }
    }
    return results;
}

const nestedData = {
    name: "root",
    children: [
        { name: "child1", children: [{ name: "grandchild1" }] },
        { name: "child2" }
    ]
};
console.log("All 'name' values:", findAllValues(nestedData, "name"));
// ["root", "child1", "grandchild1", "child2"]

// --- 7. Recursive DOM Traversal (Concept) ---
// In a browser, you can walk the DOM tree recursively:
/*
function walkDOM(node, callback) {
    callback(node);                          // Process current node
    node = node.firstElementChild;           // Move to first child
    while (node) {
        walkDOM(node, callback);             // Recurse into child
        node = node.nextElementSibling;      // Move to sibling
    }
}
walkDOM(document.body, (node) => console.log(node.tagName));
*/

// --- 8. Classic Recursive Problems ---

// Power function: base^exponent
function power(base, exp) {
    if (exp === 0) return 1;
    if (exp < 0) return 1 / power(base, -exp);
    return base * power(base, exp - 1);
}
console.log("\n--- More Examples ---");
console.log("2^10:", power(2, 10));    // 1024
console.log("5^-2:", power(5, -2));    // 0.04

// Reverse a string recursively
function reverseString(str) {
    if (str.length <= 1) return str;  // Base case
    return reverseString(str.slice(1)) + str[0];
}
console.log("Reverse 'hello':", reverseString("hello")); // "olleh"

// Check if a string is a palindrome
function isPalindrome(str) {
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}
console.log("'racecar' palindrome?", isPalindrome("racecar")); // true
console.log("'hello' palindrome?", isPalindrome("hello"));     // false

// --- 9. Stack Overflow ---
// Every recursive call adds a frame to the call stack.
// Too many calls → stack overflow!

// This will crash:
// function infinite() { return infinite(); }
// infinite(); // RangeError: Maximum call stack size exceeded

// Node.js typically allows ~10,000-15,000 frames.
// Always ensure your base case is reachable!

function safeRecursion(n) {
    if (n <= 0) return "Done";     // Base case MUST be reachable
    return safeRecursion(n - 1);
}
console.log("\n--- Stack Safety ---");
console.log("safeRecursion(100):", safeRecursion(100)); // "Done"
// safeRecursion(100000); // Would crash — too deep!

// --- 10. Tail Call Optimization (TCO) Concept ---
// A "tail call" is when the recursive call is the LAST operation.
// With TCO, the engine can reuse the current stack frame instead of adding a new one.

// NOT tail-recursive (must multiply AFTER the recursive call returns):
// function factorial(n) {
//     if (n <= 1) return 1;
//     return n * factorial(n - 1);  // Must wait for result to multiply
// }

// TAIL-recursive version (result accumulated in parameter):
function factorialTail(n, accumulator = 1) {
    if (n <= 1) return accumulator;           // Base case returns accumulated result
    return factorialTail(n - 1, n * accumulator); // Tail position — nothing after this
}
console.log("Tail-recursive 5!:", factorialTail(5)); // 120

// NOTE: TCO is part of the ES2015 spec but only Safari implements it.
// In practice, use iteration or trampolining for very deep recursion.

// Trampoline pattern — avoids stack overflow for any depth
function trampoline(fn) {
    return function (...args) {
        let result = fn(...args);
        while (typeof result === "function") {
            result = result(); // Keep calling until we get a non-function
        }
        return result;
    };
}

function factorialTrampoline(n, acc = 1) {
    if (n <= 1) return acc;
    return () => factorialTrampoline(n - 1, n * acc); // Return a thunk, not a call
}

const safeFact = trampoline(factorialTrampoline);
console.log("Trampolined 20!:", safeFact(20)); // 2432902008176640000

console.log("\n--- Recursion Guidelines ---");
console.log("1. Always define a clear base case");
console.log("2. Ensure each call moves toward the base case");
console.log("3. Consider memoization for overlapping subproblems");
console.log("4. Watch out for stack overflow with deep recursion");
console.log("5. Consider iteration for performance-critical code");
