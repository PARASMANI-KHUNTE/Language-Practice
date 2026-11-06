// ======================================================
// TOPIC: Type Annotations — string, number, boolean, any, unknown
// ======================================================
// Key Concepts:
// - Primitive type annotations
// - any vs unknown
// - void, null, undefined, never
// - Type inference vs explicit annotation

// --- 1. Primitive Types ---
let userName: string = "Alice";
let userAge: number = 30;
let isLoggedIn: boolean = true;

console.log(typeof userName);   // Output: string
console.log(typeof userAge);    // Output: number
console.log(typeof isLoggedIn); // Output: boolean

// --- 2. Number Subtypes ---
// TypeScript has a single 'number' type for all numeric values
let integer: number = 42;
let float: number = 3.14;
let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;
let bigInteger: bigint = 100n; // bigint is a separate type

console.log(integer, float, hex, binary, octal);
// Output: 42 3.14 255 10 484

// --- 3. String Variations ---
let single: string = 'single quotes';
let double: string = "double quotes";
let template: string = `template literal with ${userName}`;

console.log(template); // Output: template literal with Alice

// --- 4. The 'any' Type ---
// 'any' disables type checking — use sparingly!
let flexible: any = "I can be anything";
flexible = 42;        // No error
flexible = true;      // No error
flexible = [1, 2, 3]; // No error

// Danger: any allows unsafe operations without errors
let dangerousAny: any = "hello";
// dangerousAny.nonExistentMethod(); // No compile error, but runtime crash!
console.log("any type bypasses all checks");

// --- 5. The 'unknown' Type ---
// 'unknown' is the type-safe counterpart of 'any'
let safeValue: unknown = "I could be anything";
safeValue = 42;
safeValue = true;

// Unlike any, unknown requires type checking before use
// let result: string = safeValue; // Error! Can't assign unknown to string

// Must narrow the type first
if (typeof safeValue === "boolean") {
    let confirmed: boolean = safeValue; // OK after type check
    console.log(`Safe value is boolean: ${confirmed}`);
}

// --- 6. void ---
// Used for functions that don't return a value
function logMessage(msg: string): void {
    console.log(msg);
    // No return statement needed
}
logMessage("void means no return value");

// --- 7. null and undefined ---
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// With strictNullChecks, null/undefined aren't assignable to other types
// let name: string = null; // Error with strictNullChecks

// Use union types to allow null
let nullableName: string | null = null;
nullableName = "Bob";
console.log(nullableName); // Output: Bob

// --- 8. never ---
// Represents values that never occur
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        // This function never returns
    }
}

// never is useful in exhaustive checks (see type_narrowing)

// --- 9. Type Inference ---
// TypeScript infers types when you initialize variables
let inferredString = "hello";   // inferred as string
let inferredNumber = 42;        // inferred as number
let inferredBool = true;        // inferred as boolean
let inferredArray = [1, 2, 3];  // inferred as number[]

// Hover over variables in your IDE to see inferred types!
// Best practice: let TypeScript infer when the type is obvious

// --- 10. When to Annotate vs. When to Infer ---
// Annotate: function parameters, return types, complex objects
function add(a: number, b: number): number {
    return a + b;
}

// Infer: simple variable assignments
let sum = add(5, 3); // TypeScript infers 'number'
console.log(`Sum: ${sum}`); // Output: Sum: 8

// --- 11. Symbol and unique symbol ---
let sym: symbol = Symbol("description");
const uniqueSym: unique symbol = Symbol("unique");

console.log(sym.toString()); // Output: Symbol(description)

// --- 12. Comparing any vs unknown ---
// any:     Opt out of type system entirely. Avoid when possible.
// unknown: Force type checking before use. Prefer over any.
function processInput(input: unknown): string {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    if (typeof input === "number") {
        return input.toFixed(2);
    }
    return String(input);
}

console.log(processInput("hello"));  // Output: HELLO
console.log(processInput(3.14159));  // Output: 3.14
console.log(processInput(true));     // Output: true

console.log("--- End of Type Annotations ---");
