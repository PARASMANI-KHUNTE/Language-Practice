// ======================================================
// TOPIC: Type Narrowing — typeof, instanceof, in, type predicates
// ======================================================
// Key Concepts:
// - typeof guards for primitives
// - instanceof guards for classes
// - 'in' operator for property checks
// - Custom type predicates
// - Control flow analysis

// --- 1. typeof Guard ---
// Works for: string, number, bigint, boolean, symbol, undefined, object, function
function padLeft(value: string, padding: string | number): string {
    if (typeof padding === "number") {
        // TypeScript knows padding is number
        return " ".repeat(padding) + value;
    }
    // TypeScript knows padding is string
    return padding + value;
}

console.log(padLeft("Hello", 4));      // Output:     Hello
console.log(padLeft("Hello", ">>> ")); // Output: >>> Hello

// --- 2. Truthiness Narrowing ---
function printLength(str: string | null | undefined): void {
    if (str) {
        // str is narrowed to string (null and undefined are falsy)
        console.log(`Length: ${str.length}`);
    } else {
        console.log("No string provided");
    }
}

printLength("hello");    // Output: Length: 5
printLength(null);       // Output: No string provided
printLength(undefined);  // Output: No string provided
printLength("");         // Output: No string provided (empty string is falsy!)

// --- 3. Equality Narrowing ---
function compare(a: string | number, b: string | boolean): void {
    if (a === b) {
        // Both must be string (only common type)
        console.log(`Equal strings: ${a.toUpperCase()}`);
    }
}

// Narrowing with != null (catches both null and undefined)
function processValue(value: string | null | undefined): void {
    if (value != null) {
        console.log(value.toUpperCase()); // string only
    }
}
processValue("hello"); // Output: HELLO

// --- 4. instanceof Guard ---
class DateRange {
    constructor(public start: Date, public end: Date) {}
}

class SingleDate {
    constructor(public date: Date) {}
}

function formatDateInput(input: DateRange | SingleDate): string {
    if (input instanceof DateRange) {
        return `${input.start.toLocaleDateString()} - ${input.end.toLocaleDateString()}`;
    }
    return input.date.toLocaleDateString();
}

console.log(formatDateInput(new SingleDate(new Date("2024-06-15"))));
// Output: 6/15/2024

// --- 5. 'in' Operator Narrowing ---
type Car = { drive(): void; honk(): void };
type Boat = { sail(): void; anchor(): void };
type Plane = { fly(): void; land(): void };

type Vehicle = Car | Boat | Plane;

function operate(vehicle: Vehicle): void {
    if ("drive" in vehicle) {
        vehicle.drive(); // TypeScript knows it's Car
    } else if ("sail" in vehicle) {
        vehicle.sail(); // TypeScript knows it's Boat
    } else {
        vehicle.fly(); // TypeScript knows it's Plane
    }
}

operate({ drive: () => console.log("Driving"), honk: () => {} });
// Output: Driving

// --- 6. Discriminated Union Narrowing ---
type Circle = { kind: "circle"; radius: number };
type Rect = { kind: "rectangle"; width: number; height: number };
type Triangle = { kind: "triangle"; base: number; height: number };

type Shape = Circle | Rect | Triangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return 0.5 * shape.base * shape.height;
    }
}

console.log(getArea({ kind: "circle", radius: 5 }).toFixed(2));
// Output: 78.54

// --- 7. Custom Type Predicates ---
// A function that returns 'paramName is Type'
interface Fish {
    swim(): void;
}

interface Bird {
    fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird): void {
    if (isFish(pet)) {
        pet.swim(); // TypeScript knows it's Fish
    } else {
        pet.fly();  // TypeScript knows it's Bird
    }
}

move({ swim: () => console.log("Swimming!") }); // Output: Swimming!
move({ fly: () => console.log("Flying!") });    // Output: Flying!

// --- 8. Assertion Functions ---
// Functions that throw if a condition isn't met
function assertIsString(value: unknown): asserts value is string {
    if (typeof value !== "string") {
        throw new Error(`Expected string, got ${typeof value}`);
    }
}

function processInput(input: unknown): void {
    assertIsString(input);
    // After assertion, TypeScript knows input is string
    console.log(input.toUpperCase());
}

processInput("hello"); // Output: HELLO
// processInput(42);   // Would throw: Expected string, got number

// --- 9. Control Flow Analysis ---
function example(value: string | number | boolean): void {
    // value is string | number | boolean

    if (typeof value === "string") {
        console.log(value.toUpperCase());
        return; // early return narrows below
    }
    // value is number | boolean (string eliminated)

    if (typeof value === "number") {
        console.log(value.toFixed(2));
        return;
    }
    // value is boolean (string and number eliminated)
    console.log(value ? "true" : "false");
}

example("hello"); // Output: HELLO
example(3.14);    // Output: 3.14
example(true);    // Output: true

// --- 10. Exhaustive Checks with never ---
function handleShape(shape: Shape): string {
    switch (shape.kind) {
        case "circle":
            return "circle";
        case "rectangle":
            return "rectangle";
        case "triangle":
            return "triangle";
        default:
            // If all cases handled, shape is 'never'
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// --- 11. Narrowing with Optional Chaining ---
type NestedObj = {
    data?: {
        items?: string[];
    };
};

function getFirstItem(obj: NestedObj): string | undefined {
    // Optional chaining narrows at each step
    return obj.data?.items?.[0];
}

console.log(getFirstItem({ data: { items: ["first"] } })); // Output: first
console.log(getFirstItem({}));                               // Output: undefined

console.log("--- End of Type Narrowing ---");
