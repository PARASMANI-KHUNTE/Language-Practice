// ======================================================
// TOPIC: Type Aliases — type keyword, union, intersection
// ======================================================
// Key Concepts:
// - Creating type aliases with the 'type' keyword
// - Union types (OR)
// - Intersection types (AND)
// - Type aliases vs interfaces

// --- 1. Basic Type Aliases ---
// Give a name to any type
type UserID = number;
type Username = string;
type IsActive = boolean;

let id: UserID = 42;
let name: Username = "Alice";
let active: IsActive = true;

console.log(`User ${id}: ${name}, active: ${active}`);
// Output: User 42: Alice, active: true

// --- 2. Object Type Aliases ---
type Point = {
    x: number;
    y: number;
};

type Rectangle = {
    origin: Point;
    width: number;
    height: number;
};

const rect: Rectangle = {
    origin: { x: 10, y: 20 },
    width: 100,
    height: 50
};
console.log(rect);

// --- 3. Union Types ---
// A value can be one of several types
type StringOrNumber = string | number;

let value: StringOrNumber = "hello";
value = 42;        // OK
// value = true;   // Error: boolean not in union

// Common pattern: union with null
type Nullable<T> = T | null;
let result: Nullable<string> = "found";
result = null; // OK

// --- 4. Union with Literals ---
type Status = "pending" | "active" | "inactive" | "deleted";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

let userStatus: Status = "active";
// userStatus = "unknown"; // Error: not assignable

function sendRequest(url: string, method: HttpMethod): void {
    console.log(`${method} ${url}`);
}
sendRequest("/api/users", "GET"); // Output: GET /api/users

// --- 5. Intersection Types ---
// Combine multiple types into one (AND)
type HasName = {
    name: string;
};

type HasAge = {
    age: number;
};

type HasEmail = {
    email: string;
};

// Person must have ALL properties
type Person = HasName & HasAge & HasEmail;

const person: Person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
console.log(person);

// --- 6. Intersection with Interfaces ---
interface Printable {
    print(): void;
}

interface Saveable {
    save(): void;
}

type Document = Printable & Saveable & {
    title: string;
    content: string;
};

const doc: Document = {
    title: "Report",
    content: "Annual report...",
    print: () => console.log("Printing document..."),
    save: () => console.log("Saving document...")
};

doc.print(); // Output: Printing document...
doc.save();  // Output: Saving document...

// --- 7. Function Type Aliases ---
type Comparator<T> = (a: T, b: T) => number;
type Predicate<T> = (item: T) => boolean;
type Transformer<T, U> = (input: T) => U;

const numberCompare: Comparator<number> = (a, b) => a - b;
const isPositive: Predicate<number> = (n) => n > 0;
const stringify: Transformer<number, string> = (n) => n.toString();

console.log([3, 1, 2].sort(numberCompare)); // Output: [1, 2, 3]
console.log(isPositive(5));                  // Output: true
console.log(stringify(42));                  // Output: "42"

// --- 8. Discriminated Union Pattern ---
type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    sideLength: number;
};

type Triangle = {
    kind: "triangle";
    base: number;
    height: number;
};

type Shape = Circle | Square | Triangle;

function area(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "triangle":
            return 0.5 * shape.base * shape.height;
    }
}

console.log(area({ kind: "circle", radius: 5 }).toFixed(2));    // Output: 78.54
console.log(area({ kind: "square", sideLength: 4 }));            // Output: 16
console.log(area({ kind: "triangle", base: 6, height: 3 }));    // Output: 9

// --- 9. Recursive Type Aliases ---
type JSONValue = 
    | string 
    | number 
    | boolean 
    | null 
    | JSONValue[] 
    | { [key: string]: JSONValue };

const data: JSONValue = {
    name: "Alice",
    scores: [95, 87, 92],
    metadata: {
        created: "2024-01-01",
        tags: ["student", "active"]
    }
};
console.log(data);

// --- 10. Conditional Type Alias ---
type IsString<T> = T extends string ? "yes" : "no";

// These resolve at the type level:
type A = IsString<string>;  // "yes"
type B = IsString<number>;  // "no"

// --- 11. Template Literal Type Aliases ---
type EventName = "click" | "scroll" | "keypress";
type EventHandler = `on${Capitalize<EventName>}`;
// Type: "onClick" | "onScroll" | "onKeypress"

// --- 12. Type Aliases vs Interfaces Summary ---
// Type aliases: unions, intersections, primitives, tuples, mapped types
// Interfaces: object shapes, declaration merging, extends

// Both work for objects:
type PointType = { x: number; y: number };
interface PointInterface { x: number; y: number }
// Both are interchangeable for simple object shapes

console.log("--- End of Type Aliases ---");
