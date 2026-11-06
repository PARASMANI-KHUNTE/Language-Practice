// ============================================================
// Topic: Variables and Data Types
// Key Concepts: let, const, var, primitives, typeof, null vs undefined
// ============================================================

// --- 1. Variable declarations: var, let, const ---

// `var` — function-scoped, hoisted, can be redeclared (legacy, avoid)
var oldStyle = "I'm function-scoped";
var oldStyle = "I can be redeclared with var";  // No error

// `let` — block-scoped, can be reassigned but NOT redeclared in same scope
let counter = 0;
counter = 1;          // ✓ Reassignment is fine
// let counter = 2;   // ✗ SyntaxError: already declared

// `const` — block-scoped, CANNOT be reassigned, must be initialized
const PI = 3.14159;
// PI = 3.14;         // ✗ TypeError: Assignment to constant variable
// const X;           // ✗ SyntaxError: Missing initializer

// IMPORTANT: const with objects/arrays — the REFERENCE is constant, not contents
const user = { name: "Alice" };
user.name = "Bob";    // ✓ Mutating properties is allowed
// user = {};         // ✗ Cannot reassign the variable itself

const nums = [1, 2, 3];
nums.push(4);         // ✓ Mutating array is allowed
console.log(nums);    // => [1, 2, 3, 4]

// --- 2. The 7 Primitive Data Types ---

// (a) Number — integers and floating-point
let integer = 42;
let float = 3.14;
let negative = -100;
let scientific = 2.5e4;        // 25000
let hex = 0xFF;                // 255
let binary = 0b1010;           // 10
let octal = 0o777;             // 511
console.log("Number examples:", integer, float, scientific);

// Special number values
console.log(Infinity);         // Infinity
console.log(-Infinity);        // -Infinity
console.log(NaN);              // NaN (Not a Number)
console.log(0.1 + 0.2);       // 0.30000000000000004 (floating-point quirk!)
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

// (b) BigInt — arbitrary precision integers (ES2020)
let bigNum = 9007199254740991n;
let anotherBig = BigInt("123456789012345678901234567890");
console.log(bigNum + 1n);     // 9007199254740992n
// Cannot mix BigInt and Number: bigNum + 1 => TypeError

// (c) String — text data
let singleQ = 'Hello';
let doubleQ = "World";
let template = `${singleQ}, ${doubleQ}!`;  // Template literal
console.log(template);         // => Hello, World!

// (d) Boolean — true or false
let isActive = true;
let isDeleted = false;
console.log(typeof isActive);  // => "boolean"

// (e) undefined — declared but not assigned
let notAssigned;
console.log(notAssigned);      // => undefined
console.log(typeof notAssigned); // => "undefined"

// (f) null — intentional absence of value
let empty = null;
console.log(empty);            // => null
console.log(typeof empty);     // => "object" (known JS quirk!)

// (g) Symbol — unique, immutable identifier
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2);    // => false (every Symbol is unique)

// --- 3. Non-primitive: Object ---
let person = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "coding"]
};
console.log(typeof person);    // => "object"

// --- 4. typeof operator ---
console.log(typeof 42);           // => "number"
console.log(typeof "hello");      // => "string"
console.log(typeof true);         // => "boolean"
console.log(typeof undefined);    // => "undefined"
console.log(typeof null);         // => "object"  (historical bug)
console.log(typeof Symbol());     // => "symbol"
console.log(typeof 10n);          // => "bigint"
console.log(typeof {});           // => "object"
console.log(typeof []);           // => "object"  (arrays are objects)
console.log(typeof function(){}); // => "function"

// --- 5. Checking for null and arrays ---
// Since typeof null === "object", use strict equality:
let val = null;
console.log(val === null);        // => true

// Since typeof [] === "object", use Array.isArray():
console.log(Array.isArray([1,2]));  // => true
console.log(Array.isArray({}));     // => false

// --- 6. Dynamic typing ---
// Variables can change type (JS is dynamically typed)
let dynamic = "I'm a string";
console.log(typeof dynamic);      // => "string"
dynamic = 42;
console.log(typeof dynamic);      // => "number"
dynamic = true;
console.log(typeof dynamic);      // => "boolean"

// --- 7. Falsy and Truthy values ---
// Falsy: false, 0, -0, 0n, "", null, undefined, NaN
// Truthy: everything else (including [], {}, "0", "false")
console.log(Boolean(0));          // => false
console.log(Boolean(""));         // => false
console.log(Boolean(null));       // => false
console.log(Boolean("hello"));    // => true
console.log(Boolean([]));         // => true  (empty array is truthy!)
console.log(Boolean({}));         // => true  (empty object is truthy!)

// --- Quick recap ---
// • Use `const` by default, `let` when reassignment is needed, avoid `var`
// • 7 primitives: number, bigint, string, boolean, undefined, null, symbol
// • typeof has quirks: null → "object", arrays → "object"
// • JavaScript is dynamically typed — variables can hold any type
// • Know the falsy values: false, 0, "", null, undefined, NaN
