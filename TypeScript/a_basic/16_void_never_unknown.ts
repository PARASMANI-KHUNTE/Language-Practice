// ============================================================
// Topic: void, never, and unknown Types in TypeScript
// Key Concepts: void return type, never type for exhaustive
//   checks and functions that never return, unknown as safe
//   alternative to any, type narrowing, comparisons
// ============================================================

// ------------------------------------------------------------
// 1. THE void TYPE
// ------------------------------------------------------------
// void indicates a function does NOT return a meaningful value.
// It's the return type of functions that perform side effects.

function logMessage(msg: string): void {
    console.log(`[LOG]: ${msg}`);
    // No return statement — implicitly returns undefined
}

// A void function CAN explicitly return undefined (but nothing else)
function greet(name: string): void {
    console.log(`Hello, ${name}`);
    return undefined; // OK — undefined is assignable to void
    // return "hello"; // ERROR: Type 'string' is not assignable to type 'void'
}

// void vs undefined — they are NOT identical
// A variable of type void can hold undefined, but the intent differs:
let v: void = undefined;      // OK
// let v2: void = null;        // ERROR in strict mode
let u: undefined = undefined;  // OK

// Key difference: void means "ignore the return value"
// undefined means "the value IS undefined"
type CallbackReturningVoid = () => void;

// Contextual typing with void allows returning values (they're just ignored)
const nums = [1, 2, 3];
const result: void = nums.forEach((n) => n * 2);
// forEach's callback is typed as () => void, so the returned value is discarded
console.log(result); // undefined
// Output: undefined

// ------------------------------------------------------------
// 2. THE never TYPE
// ------------------------------------------------------------
// never represents values that NEVER occur. It is the bottom
// type — a subtype of every type, but no type is a subtype of never.

// 2a. Functions that never return (they throw or loop forever)
function throwError(message: string): never {
    throw new Error(message);
    // Code after throw is unreachable — return type is never
}

function infiniteLoop(): never {
    while (true) {
        // This function never terminates
    }
}

// 2b. Exhaustive checks with never (exhaustiveness checking)
// never ensures you've handled ALL cases in a union
type Shape = "circle" | "square" | "triangle";

function getArea(shape: Shape): number {
    switch (shape) {
        case "circle":
            return Math.PI * 10 * 10;
        case "square":
            return 10 * 10;
        case "triangle":
            return (10 * 8) / 2;
        default:
            // If all cases are handled, shape is narrowed to 'never'
            const _exhaustive: never = shape;
            return _exhaustive;
            // If you add a new shape to the union but forget a case,
            // TypeScript will error HERE, forcing you to handle it!
    }
}

console.log(getArea("circle"));   // Output: 314.159...
console.log(getArea("square"));   // Output: 100
console.log(getArea("triangle")); // Output: 40

// 2c. never vs void
// void = function returns but with no meaningful value
// never = function NEVER returns (throws, infinite loop, or impossible state)
function returnsVoid(): void { console.log("done"); }    // Returns (undefined)
// function returnsNever(): never { console.log("done"); } // ERROR: must not return

// never is assignable to every type (bottom type)
function fail(msg: string): never { throw new Error(msg); }
const x: number = fail("oops"); // OK — never is assignable to number
const y: string = fail("oops"); // OK — never is assignable to string

// But nothing is assignable to never (except never itself)
// let z: never = 42;   // ERROR: Type 'number' is not assignable to type 'never'
// let w: never = void 0; // ERROR

// ------------------------------------------------------------
// 3. THE unknown TYPE
// ------------------------------------------------------------
// unknown is the type-safe counterpart of any.
// ANY value can be assigned to unknown, but you CANNOT use it
// without first narrowing the type.

let value: unknown;

value = 42;             // OK
value = "hello";        // OK
value = true;           // OK
value = [1, 2, 3];      // OK
value = { key: "val" }; // OK

// But you can't DO anything with it directly:
// value.toUpperCase(); // ERROR: Object is of type 'unknown'
// value + 1;           // ERROR
// value.key;           // ERROR

// 3a. Type narrowing is REQUIRED to use unknown values
function processUnknown(input: unknown): string {
    // typeof narrowing
    if (typeof input === "string") {
        return input.toUpperCase(); // OK — narrowed to string
    }
    // typeof narrowing for numbers
    if (typeof input === "number") {
        return input.toFixed(2); // OK — narrowed to number
    }
    // instanceof narrowing
    if (input instanceof Date) {
        return input.toISOString(); // OK — narrowed to Date
    }
    // Array check
    if (Array.isArray(input)) {
        return input.join(", "); // OK — narrowed to any[]
    }
    return String(input);
}

console.log(processUnknown("hello"));           // Output: HELLO
console.log(processUnknown(3.14159));            // Output: 3.14
console.log(processUnknown(new Date(2024, 0)));  // Output: 2024-01-01T...
console.log(processUnknown([1, 2, 3]));          // Output: 1, 2, 3

// 3b. Type assertion with unknown (use when you're confident)
const rawData: unknown = '{"name": "Alice", "age": 30}';
interface User { name: string; age: number; }

// Option 1: assertion
const user1 = JSON.parse(rawData as string) as User;
console.log(user1.name); // Output: Alice

// Option 2: type guard function (SAFER)
function isUser(obj: unknown): obj is User {
    return (
        typeof obj === "object" && obj !== null &&
        "name" in obj && typeof (obj as User).name === "string" &&
        "age" in obj && typeof (obj as User).age === "number"
    );
}

const parsed: unknown = JSON.parse(rawData as string);
if (isUser(parsed)) {
    console.log(`${parsed.name} is ${parsed.age}`); // Output: Alice is 30
}

// ------------------------------------------------------------
// 4. unknown vs any — COMPARISON
// ------------------------------------------------------------
// | Feature             | any              | unknown            |
// |---------------------|------------------|--------------------|
// | Assign TO it        | anything ✅      | anything ✅        |
// | Use WITHOUT check   | yes (UNSAFE) ⚠️  | NO (SAFE) ✅       |
// | Assign FROM it      | to anything ⚠️   | only after narrow ✅|
// | Type checking       | disabled ❌      | enforced ✅         |

let anyVal: any = "hello";
anyVal.whatever.deep.call(); // No error at compile time — CRASHES at runtime!

let unknownVal: unknown = "hello";
// unknownVal.whatever; // ERROR at compile time — catches bugs early ✅

// RULE OF THUMB: Use unknown instead of any whenever possible.
// It forces you to validate before using, preventing runtime errors.

// ------------------------------------------------------------
// 5. PRACTICAL EXAMPLE: Safe API Response Handler
// ------------------------------------------------------------
interface ApiSuccess { status: "ok"; data: string[]; }
interface ApiError   { status: "error"; message: string; }
type ApiResponse = ApiSuccess | ApiError;

function handleResponse(response: ApiResponse): string {
    switch (response.status) {
        case "ok":
            return `Data: ${response.data.join(", ")}`;
        case "error":
            return `Error: ${response.message}`;
        default:
            // Exhaustive check — guarantees all cases handled
            const _never: never = response;
            return _never;
    }
}

// Simulating unknown data from a fetch call
function safeParse(raw: unknown): ApiResponse {
    if (typeof raw !== "object" || raw === null) {
        throw new Error("Invalid response");
    }
    const obj = raw as Record<string, unknown>;
    if (obj.status === "ok" && Array.isArray(obj.data)) {
        return { status: "ok", data: obj.data as string[] };
    }
    if (obj.status === "error" && typeof obj.message === "string") {
        return { status: "error", message: obj.message };
    }
    throw new Error("Unrecognized response shape");
}

const fakeApiData: unknown = { status: "ok", data: ["alpha", "beta"] };
const parsed2 = safeParse(fakeApiData);
console.log(handleResponse(parsed2)); // Output: Data: alpha, beta

const fakeError: unknown = { status: "error", message: "Not found" };
const parsed3 = safeParse(fakeError);
console.log(handleResponse(parsed3)); // Output: Error: Not found

console.log("\n=== void, never, unknown — Practice Complete ===");
