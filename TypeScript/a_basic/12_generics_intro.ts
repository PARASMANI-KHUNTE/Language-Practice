// ======================================================
// TOPIC: Generics Intro — Generic functions, generic interfaces
// ======================================================
// Key Concepts:
// - Generic type parameters
// - Generic functions
// - Generic interfaces and types
// - Type inference with generics
// - Multiple type parameters

// --- 1. The Problem: Why Generics? ---
// Without generics, we lose type information or repeat code

// Option A: specific types (inflexible)
function identityNumber(value: number): number { return value; }
function identityString(value: string): string { return value; }

// Option B: any (loses type safety)
function identityAny(value: any): any { return value; }
const result1 = identityAny("hello"); // result1 is 'any', not 'string'

// Option C: Generics! (flexible AND type-safe)
function identity<T>(value: T): T {
    return value;
}

const str = identity<string>("hello"); // str is string
const num = identity<number>(42);      // num is number
const inferred = identity("world");    // TypeScript infers T = string

console.log(str, num, inferred);
// Output: hello 42 world

// --- 2. Generic Functions ---
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

console.log(firstElement([1, 2, 3]));        // Output: 1 (number)
console.log(firstElement(["a", "b", "c"]));  // Output: a (string)
console.log(firstElement([]));               // Output: undefined

// --- 3. Multiple Type Parameters ---
function pair<A, B>(first: A, second: B): [A, B] {
    return [first, second];
}

const p1 = pair("hello", 42);        // [string, number]
const p2 = pair(true, [1, 2, 3]);    // [boolean, number[]]

console.log(p1); // Output: ["hello", 42]
console.log(p2); // Output: [true, [1, 2, 3]]

// Map function with two type parameters
function mapArray<T, U>(arr: T[], fn: (item: T) => U): U[] {
    return arr.map(fn);
}

const lengths = mapArray(["hello", "world", "!"], s => s.length);
console.log(lengths); // Output: [5, 5, 1]

const doubled = mapArray([1, 2, 3], n => n * 2);
console.log(doubled); // Output: [2, 4, 6]

// --- 4. Generic Interfaces ---
interface Container<T> {
    value: T;
    getValue(): T;
    setValue(newValue: T): void;
}

class Box<T> implements Container<T> {
    constructor(public value: T) {}

    getValue(): T {
        return this.value;
    }

    setValue(newValue: T): void {
        this.value = newValue;
    }
}

const stringBox = new Box<string>("hello");
console.log(stringBox.getValue()); // Output: hello
stringBox.setValue("world");
console.log(stringBox.getValue()); // Output: world

const numberBox = new Box(42); // T inferred as number
console.log(numberBox.getValue()); // Output: 42

// --- 5. Generic Type Aliases ---
type Result<T> = {
    success: boolean;
    data: T | null;
    error: string | null;
};

function fetchData<T>(data: T): Result<T> {
    return { success: true, data, error: null };
}

function fetchError<T>(message: string): Result<T> {
    return { success: false, data: null, error: message };
}

const userResult = fetchData({ name: "Alice", age: 30 });
console.log(userResult);
// Output: { success: true, data: { name: 'Alice', age: 30 }, error: null }

const errorResult = fetchError<string>("Not found");
console.log(errorResult);
// Output: { success: false, data: null, error: 'Not found' }

// --- 6. Generic with Constraints ---
// Restrict what types T can be using 'extends'
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): T {
    console.log(`Length: ${item.length}`);
    return item;
}

logLength("hello");     // Output: Length: 5
logLength([1, 2, 3]);   // Output: Length: 3
logLength({ length: 10, custom: true }); // Output: Length: 10
// logLength(42);        // Error: number doesn't have 'length'

// --- 7. keyof Constraint ---
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person = { name: "Alice", age: 30, email: "alice@test.com" };
console.log(getProperty(person, "name"));  // Output: Alice
console.log(getProperty(person, "age"));   // Output: 30
// getProperty(person, "phone");            // Error: "phone" not in keyof

// --- 8. Generic Utility Functions ---
function wrapInArray<T>(value: T): T[] {
    return [value];
}

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

console.log(wrapInArray(42));          // Output: [42]
console.log(wrapInArray("hello"));     // Output: ["hello"]

const merged = mergeObjects(
    { name: "Alice" },
    { age: 30, email: "alice@test.com" }
);
console.log(merged);
// Output: { name: 'Alice', age: 30, email: 'alice@test.com' }

// --- 9. Default Type Parameters ---
interface ApiResponse<T = unknown> {
    status: number;
    data: T;
}

const response1: ApiResponse<string> = { status: 200, data: "OK" };
const response2: ApiResponse = { status: 404, data: null }; // T defaults to unknown

console.log(response1);
console.log(response2);

// --- 10. Generic with Arrays ---
function lastElement<T>(arr: readonly T[]): T | undefined {
    return arr[arr.length - 1];
}

function reverseArray<T>(arr: T[]): T[] {
    return [...arr].reverse();
}

function uniqueValues<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}

console.log(lastElement([1, 2, 3]));          // Output: 3
console.log(reverseArray(["a", "b", "c"]));   // Output: ["c", "b", "a"]
console.log(uniqueValues([1, 2, 2, 3, 3]));   // Output: [1, 2, 3]

console.log("--- End of Generics Intro ---");
