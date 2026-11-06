// =============================================================
// TOPIC: Hello World — console.log, tsc basics, tsconfig intro
// =============================================================
// Key Concepts:
// - Running TypeScript with tsc compiler
// - console.log for output
// - tsconfig.json configuration basics
// - Differences from plain JavaScript

// --- 1. Basic Output ---
// TypeScript uses the same console API as JavaScript
console.log("Hello, TypeScript!");
console.log("TypeScript is a typed superset of JavaScript.");

// --- 2. Variables with Type Inference ---
// TypeScript can infer types automatically
let greeting = "Hello, World!"; // inferred as string
let year = 2024;                // inferred as number
let isActive = true;            // inferred as boolean

console.log(greeting);          // Output: Hello, World!
console.log(`Year: ${year}`);   // Output: Year: 2024
console.log(`Active: ${isActive}`); // Output: Active: true

// --- 3. Explicit Type Annotations ---
// You can also explicitly annotate types
let message: string = "Welcome to TypeScript!";
let count: number = 42;
let verbose: boolean = false;

console.log(message);

// --- 4. Template Literals ---
// Works exactly like JavaScript template literals
let name: string = "Developer";
let age: number = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: My name is Developer and I am 25 years old.

// --- 5. Multi-line Output ---
console.log(`
  TypeScript Basics:
  1. TypeScript compiles to JavaScript
  2. Types are checked at compile time
  3. Use 'tsc' to compile .ts files
  4. Use 'tsc --init' to generate tsconfig.json
`);

// --- 6. Console Methods ---
// TypeScript supports all console methods
console.log("Regular log");
console.warn("This is a warning");
console.error("This is an error");
console.info("This is informational");

// console.table for structured data
console.table({ name: "TypeScript", version: 5.0, typed: true });

// --- 7. Compiling and Running ---
// To compile:   tsc 01_hello_world.ts
// To run:       node 01_hello_world.js
// Or use ts-node: npx ts-node 01_hello_world.ts

// --- 8. tsconfig.json Basics ---
// Generate with: tsc --init
// Key options:
// {
//   "compilerOptions": {
//     "target": "ES2020",        // JS version to compile to
//     "module": "commonjs",      // Module system
//     "strict": true,            // Enable all strict checks
//     "outDir": "./dist",        // Output directory
//     "rootDir": "./src",        // Source directory
//     "esModuleInterop": true,   // Better import compatibility
//     "sourceMap": true,         // Generate .map files for debugging
//     "declaration": true        // Generate .d.ts declaration files
//   },
//   "include": ["src/**/*"],
//   "exclude": ["node_modules"]
// }

// --- 9. Type Errors at Compile Time ---
// Uncomment below to see a compile-time error:
// let num: number = "hello"; // Error: Type 'string' is not assignable to type 'number'

// --- 10. TypeScript vs JavaScript ---
// TypeScript:
//   - Static type checking
//   - Better IDE support (autocomplete, refactoring)
//   - Catches bugs before runtime
//   - Compiles to clean JavaScript
//   - Supports latest JS features with downlevel compilation

// JavaScript equivalent of this file would look nearly identical,
// but without any type annotations.
let jsEquivalent = "Same code, minus the types!";
console.log(jsEquivalent);

console.log("--- End of Hello World ---");
