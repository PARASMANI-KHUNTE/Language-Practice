// ======================================================
// TOPIC: Typed Functions — Parameter types, return types, optional, default
// ======================================================
// Key Concepts:
// - Parameter and return type annotations
// - Optional and default parameters
// - Rest parameters
// - Function types and callbacks
// - Arrow functions

// --- 1. Basic Function with Types ---
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: Hello, Alice!

// --- 2. Multiple Parameters ---
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

// --- 3. Return Type Inference ---
// TypeScript can infer the return type, but explicit is often better
function multiply(a: number, b: number) {
    return a * b; // Return type inferred as number
}

// --- 4. void Return Type ---
function logMessage(message: string): void {
    console.log(message);
    // No return value
}
logMessage("This returns void");

// --- 5. Optional Parameters ---
// Use '?' to mark a parameter as optional (must come after required)
function buildName(first: string, last?: string): string {
    if (last) {
        return `${first} ${last}`;
    }
    return first;
}
console.log(buildName("Alice"));        // Output: Alice
console.log(buildName("Alice", "Doe")); // Output: Alice Doe

// --- 6. Default Parameters ---
function createUser(name: string, role: string = "user"): string {
    return `${name} (${role})`;
}
console.log(createUser("Bob"));          // Output: Bob (user)
console.log(createUser("Bob", "admin")); // Output: Bob (admin)

// --- 7. Rest Parameters ---
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

// Rest with leading parameters
function tag(label: string, ...values: number[]): string {
    return `${label}: [${values.join(", ")}]`;
}
console.log(tag("scores", 90, 85, 92)); // Output: scores: [90, 85, 92]

// --- 8. Arrow Functions ---
const square = (n: number): number => n * n;
const hello = (name: string): string => `Hi, ${name}`;

console.log(square(5));     // Output: 25
console.log(hello("World")); // Output: Hi, World

// --- 9. Function Type Expressions ---
// Define the shape of a function
type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => a - b;
const divide: MathOperation = (a, b) => a / b;

console.log(subtract(10, 3)); // Output: 7
console.log(divide(15, 3));   // Output: 5

// --- 10. Callback Functions ---
function processArray(arr: number[], callback: (n: number) => number): number[] {
    return arr.map(callback);
}

const doubled = processArray([1, 2, 3], n => n * 2);
console.log(doubled); // Output: [2, 4, 6]

// --- 11. Functions Returning Functions (Closures) ---
function multiplier(factor: number): (n: number) => number {
    return (n: number) => n * factor;
}

const triple = multiplier(3);
console.log(triple(5));  // Output: 15
console.log(triple(10)); // Output: 30

// --- 12. Object Parameter Destructuring ---
interface UserOptions {
    name: string;
    age: number;
    email?: string;
}

function createProfile({ name, age, email = "N/A" }: UserOptions): string {
    return `${name}, ${age}, ${email}`;
}
console.log(createProfile({ name: "Alice", age: 30 }));
// Output: Alice, 30, N/A

// --- 13. Generic Functions (Preview) ---
function identity<T>(value: T): T {
    return value;
}
console.log(identity<string>("hello"));  // Output: hello
console.log(identity<number>(42));       // Output: 42
console.log(identity(true));             // Type inferred: boolean

// --- 14. Readonly Parameters ---
function printIds(ids: readonly number[]): void {
    // ids.push(4); // Error: readonly
    console.log(ids.join(", "));
}
printIds([1, 2, 3]); // Output: 1, 2, 3

// --- 15. never Return Type ---
function fail(message: string): never {
    throw new Error(message);
}

// Function that has unreachable end
function assertNonNull<T>(value: T | null | undefined): T {
    if (value === null || value === undefined) {
        throw new Error("Value is null/undefined");
    }
    return value;
}
console.log(assertNonNull("valid")); // Output: valid

// --- 16. this Parameter ---
// Explicitly type 'this' as the first parameter (erased at runtime)
interface Button {
    label: string;
    onClick(this: Button): void;
}

const button: Button = {
    label: "Submit",
    onClick() {
        console.log(`Button clicked: ${this.label}`);
    }
};
button.onClick(); // Output: Button clicked: Submit

console.log("--- End of Typed Functions ---");
