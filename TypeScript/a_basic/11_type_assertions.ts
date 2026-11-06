// ======================================================
// TOPIC: Type Assertions — as, angle-bracket, non-null assertion
// ======================================================
// Key Concepts:
// - 'as' syntax for type assertions
// - Angle-bracket syntax (<Type>)
// - Non-null assertion operator (!)
// - When and when NOT to use assertions
// - const assertions

// --- 1. Basic Type Assertion with 'as' ---
// Tell TypeScript "I know the type better than you"
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length;

console.log(strLength); // Output: 17

// --- 2. Angle-Bracket Syntax ---
// Alternative syntax (NOT available in .tsx files)
let anotherValue: unknown = "Hello again!";
let len: number = (<string>anotherValue).length;

console.log(len); // Output: 12

// Prefer 'as' syntax — it works everywhere including JSX/TSX

// --- 3. DOM Element Assertions ---
// Common use case: DOM API returns generic types
// const input = document.getElementById("myInput") as HTMLInputElement;
// input.value = "Hello"; // Without assertion, 'value' wouldn't be accessible

// With querySelector
// const canvas = document.querySelector("canvas") as HTMLCanvasElement;
// const ctx = canvas.getContext("2d");

// --- 4. Non-Null Assertion (!) ---
// Tells TypeScript a value is NOT null or undefined
function getLength(str: string | null): number {
    // We're asserting str is not null
    return str!.length; // Danger: will crash if str IS null!
}

console.log(getLength("hello")); // Output: 5
// getLength(null); // Runtime crash! Non-null assertion doesn't add runtime checks

// Safer alternative — use narrowing instead:
function safeLengthCheck(str: string | null): number {
    if (str === null) return 0;
    return str.length; // TypeScript knows str is string
}
console.log(safeLengthCheck(null)); // Output: 0

// --- 5. Assertions in Practice: API Responses ---
interface ApiUser {
    id: number;
    name: string;
    email: string;
}

// When you know the shape of API data
function processApiResponse(data: unknown): void {
    const user = data as ApiUser;
    console.log(`User: ${user.name} (${user.email})`);
}

processApiResponse({ id: 1, name: "Alice", email: "alice@test.com" });
// Output: User: Alice (alice@test.com)

// --- 6. Double Assertion ---
// When TypeScript won't allow a direct assertion
// Used to force incompatible type assertions (AVOID if possible)
let num: number = 42;
// let str: string = num as string; // Error: number and string aren't related

// Double assertion via unknown (escape hatch)
let forced: string = (num as unknown) as string;
// This compiles but is UNSAFE — forced is still 42 at runtime!

// --- 7. Const Assertions ---
// 'as const' makes values readonly with literal types
const config = {
    endpoint: "https://api.example.com",
    retries: 3,
    methods: ["GET", "POST"]
} as const;

// Type becomes:
// {
//   readonly endpoint: "https://api.example.com";
//   readonly retries: 3;
//   readonly methods: readonly ["GET", "POST"];
// }

// config.endpoint = "other"; // Error: readonly
// config.methods.push("PUT"); // Error: readonly

console.log(config.endpoint); // Output: https://api.example.com

// --- 8. Const Assertion with Arrays ---
const colors = ["red", "green", "blue"] as const;
// Type: readonly ["red", "green", "blue"]

type Color = typeof colors[number];
// Type: "red" | "green" | "blue"

let myColor: Color = "red"; // OK
// myColor = "yellow";       // Error

// --- 9. Assertion Functions (see also type_narrowing) ---
function assertDefined<T>(value: T | undefined | null, msg?: string): asserts value is T {
    if (value === undefined || value === null) {
        throw new Error(msg ?? "Value is not defined");
    }
}

function processItem(item: string | undefined): void {
    assertDefined(item, "Item must be provided");
    // After assertion, TypeScript knows item is string
    console.log(item.toUpperCase());
}

processItem("hello"); // Output: HELLO

// --- 10. Type Assertions vs Type Declarations ---
interface Point {
    x: number;
    y: number;
}

// Type declaration (preferred) — catches missing properties
// const p1: Point = { x: 1 }; // Error: missing 'y'

// Type assertion — does NOT catch missing properties!
const p2 = { x: 1 } as Point; // No error, but p2.y is undefined!

// Always prefer declarations over assertions when possible

// --- 11. Satisfies Operator (TS 5.0+) ---
// Validates a type without changing the inferred type
type RGB = [number, number, number];
type CSSColor = string | RGB;

const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255]
} satisfies Record<string, CSSColor>;

// palette.red is still inferred as number[] (not widened to CSSColor)
console.log(palette.red[0]); // Output: 255 (number, not string | number)
// palette.green[0];  // Error: string doesn't have index
console.log(palette.green.toUpperCase()); // OK: known to be string

// --- 12. When to Use Assertions vs. Guards ---
// ❌ BAD: Assertions hide bugs
function badExample(input: unknown): void {
    const str = input as string;
    // If input is a number, this will produce unexpected results
}

// ✅ GOOD: Type guards are safe
function goodExample(input: unknown): void {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    } else {
        console.log("Not a string:", input);
    }
}

goodExample("test");  // Output: TEST
goodExample(42);      // Output: Not a string: 42

// Rule of thumb:
// - Use assertions when you KNOW something TypeScript doesn't
// - Use guards when you NEED to check at runtime
// - Prefer guards over assertions whenever possible

console.log("--- End of Type Assertions ---");
