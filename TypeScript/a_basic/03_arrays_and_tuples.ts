// ======================================================
// TOPIC: Arrays and Tuples — Typed arrays, tuples, readonly
// ======================================================
// Key Concepts:
// - Array type syntax (Type[] vs Array<Type>)
// - Tuple types with fixed lengths
// - Readonly arrays and tuples
// - Common array operations with type safety

// --- 1. Typed Arrays ---
// Two syntax options — both are equivalent
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

// Type safety: can only add matching types
numbers.push(6);      // OK
// numbers.push("7"); // Error: Argument of type 'string' is not assignable

console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]
console.log(names);   // Output: ["Alice", "Bob", "Charlie"]

// --- 2. Array of Mixed Types (Union) ---
let mixed: (string | number)[] = [1, "two", 3, "four"];
mixed.push(5);      // OK
mixed.push("six");  // OK
// mixed.push(true); // Error: boolean not in union

console.log(mixed); // Output: [1, "two", 3, "four", 5, "six"]

// --- 3. Array Type Inference ---
let inferred = [1, 2, 3];         // inferred as number[]
let mixedInferred = [1, "hello"]; // inferred as (string | number)[]
let empty: string[] = [];         // Must annotate empty arrays

// --- 4. Multi-dimensional Arrays ---
let matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Output: 6

// --- 5. Tuples — Fixed-length Arrays with Specific Types ---
// Each position has a specific type
let person: [string, number] = ["Alice", 30];
let coordinate: [number, number, number] = [10.5, 20.3, 5.0];

console.log(person[0]);     // Output: Alice (string)
console.log(person[1]);     // Output: 30 (number)
// console.log(person[2]);  // Error: Tuple type has no element at index 2

// --- 6. Named Tuples (Labels for Documentation) ---
type UserRecord = [name: string, age: number, active: boolean];
let user: UserRecord = ["Bob", 25, true];
// Labels are for documentation only — accessed by index
console.log(`${user[0]} is ${user[1]} years old`); // Output: Bob is 25 years old

// --- 7. Optional Tuple Elements ---
type FlexPoint = [number, number, number?];
let point2D: FlexPoint = [10, 20];
let point3D: FlexPoint = [10, 20, 30];

console.log(point2D); // Output: [10, 20]
console.log(point3D); // Output: [10, 20, 30]

// --- 8. Rest Elements in Tuples ---
type StringAndNumbers = [string, ...number[]];
let labeled: StringAndNumbers = ["scores", 90, 85, 92, 88];

console.log(labeled[0]); // Output: scores
console.log(labeled.slice(1)); // Output: [90, 85, 92, 88]

// --- 9. Readonly Arrays ---
// Cannot be modified after creation
const readonlyArr: readonly number[] = [1, 2, 3];
// readonlyArr.push(4);    // Error: Property 'push' does not exist
// readonlyArr[0] = 10;    // Error: Index signature only permits reading

// Alternative syntax
const alsoReadonly: ReadonlyArray<string> = ["a", "b", "c"];

console.log(readonlyArr);  // Output: [1, 2, 3]
console.log(alsoReadonly); // Output: ["a", "b", "c"]

// --- 10. Readonly Tuples ---
const readonlyTuple: readonly [string, number] = ["Alice", 30];
// readonlyTuple[0] = "Bob"; // Error: Cannot assign to '0'

// --- 11. Tuple Destructuring ---
let rgb: [number, number, number] = [255, 128, 0];
let [red, green, blue] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);
// Output: R: 255, G: 128, B: 0

// --- 12. Common Array Methods with Types ---
let scores: number[] = [85, 92, 78, 95, 88];

// map: transforms each element
let doubled: number[] = scores.map(s => s * 2);
console.log(doubled); // Output: [170, 184, 156, 190, 176]

// filter: keeps elements matching condition
let high: number[] = scores.filter(s => s >= 90);
console.log(high); // Output: [92, 95]

// reduce: accumulates a result
let total: number = scores.reduce((sum, s) => sum + s, 0);
console.log(`Total: ${total}`); // Output: Total: 438

// find: returns first match or undefined
let found: number | undefined = scores.find(s => s > 90);
console.log(`Found: ${found}`); // Output: Found: 92

// --- 13. Const Assertions with Arrays ---
// 'as const' makes arrays readonly and narrows literal types
const directions = ["north", "south", "east", "west"] as const;
// Type: readonly ["north", "south", "east", "west"]
// directions.push("up"); // Error: readonly

type Direction = typeof directions[number];
// Type: "north" | "south" | "east" | "west"

console.log("--- End of Arrays and Tuples ---");
