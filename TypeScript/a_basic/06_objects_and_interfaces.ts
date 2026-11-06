// ======================================================
// TOPIC: Objects & Interfaces — Interface, optional props, readonly, extending
// ======================================================
// Key Concepts:
// - Object type annotations
// - Interface declarations
// - Optional and readonly properties
// - Extending interfaces
// - Index signatures

// --- 1. Object Type Annotation ---
// Inline object types
let user: { name: string; age: number } = {
    name: "Alice",
    age: 30
};
console.log(`${user.name} is ${user.age}`); // Output: Alice is 30

// --- 2. Interfaces ---
// Named object type — preferred for object shapes
interface User {
    name: string;
    age: number;
    email: string;
}

const alice: User = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
};
console.log(alice); // Output: { name: 'Alice', age: 30, email: 'alice@example.com' }

// --- 3. Optional Properties ---
interface Product {
    id: number;
    name: string;
    description?: string;  // Optional: may or may not exist
    price: number;
}

const laptop: Product = { id: 1, name: "Laptop", price: 999 };
const phone: Product = { id: 2, name: "Phone", description: "Smartphone", price: 699 };

console.log(laptop.description); // Output: undefined
console.log(phone.description);  // Output: Smartphone

// --- 4. Readonly Properties ---
interface Config {
    readonly apiKey: string;
    readonly baseUrl: string;
    timeout: number;   // mutable
}

const config: Config = {
    apiKey: "abc-123",
    baseUrl: "https://api.example.com",
    timeout: 5000
};

config.timeout = 3000;      // OK: mutable property
// config.apiKey = "new-key"; // Error: Cannot assign to 'apiKey' because it is a read-only property

console.log(config);

// --- 5. Method Signatures in Interfaces ---
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    // Alternative syntax:
    multiply: (a: number, b: number) => number;
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b
};

console.log(calc.add(5, 3));      // Output: 8
console.log(calc.subtract(10, 4)); // Output: 6
console.log(calc.multiply(3, 7));  // Output: 21

// --- 6. Extending Interfaces ---
interface Animal {
    name: string;
    sound(): string;
}

interface Pet extends Animal {
    owner: string;
}

interface Dog extends Pet {
    breed: string;
    fetch(): void;
}

const myDog: Dog = {
    name: "Buddy",
    owner: "Alice",
    breed: "Golden Retriever",
    sound: () => "Woof!",
    fetch: () => console.log("Fetching the ball!")
};

console.log(`${myDog.name} says ${myDog.sound()}`);
// Output: Buddy says Woof!
myDog.fetch(); // Output: Fetching the ball!

// --- 7. Extending Multiple Interfaces ---
interface Serializable {
    serialize(): string;
}

interface Loggable {
    log(): void;
}

interface Entity extends Serializable, Loggable {
    id: number;
}

const entity: Entity = {
    id: 1,
    serialize: () => JSON.stringify({ id: 1 }),
    log: () => console.log("Entity logged")
};

console.log(entity.serialize()); // Output: {"id":1}
entity.log();                     // Output: Entity logged

// --- 8. Index Signatures ---
// For objects with dynamic keys
interface StringMap {
    [key: string]: string;
}

const headers: StringMap = {
    "Content-Type": "application/json",
    "Authorization": "Bearer token123"
};
headers["Accept"] = "text/html"; // Dynamic key addition
console.log(headers);

// Index signature with known properties
interface Environment {
    name: string;
    [key: string]: string; // All values must be string
}

const env: Environment = {
    name: "production",
    region: "us-east-1",
    version: "2.0"
};
console.log(env);

// --- 9. Interface vs Type Alias ---
// Interfaces can be merged (declaration merging)
interface Window2 {
    title: string;
}
interface Window2 {
    width: number;  // Merged with above!
}
const win: Window2 = { title: "Main", width: 800 };

// Type aliases cannot be merged (causes error)
// type Point = { x: number; };
// type Point = { y: number; }; // Error: Duplicate identifier

// General guidance:
// - Use interface for object shapes and public APIs
// - Use type for unions, intersections, and computed types

// --- 10. Nested Interfaces ---
interface Address {
    street: string;
    city: string;
    country: string;
    zip?: string;
}

interface Employee {
    id: number;
    name: string;
    address: Address;
    department: string;
}

const emp: Employee = {
    id: 101,
    name: "Charlie",
    address: {
        street: "123 Main St",
        city: "Springfield",
        country: "US"
    },
    department: "Engineering"
};

console.log(`${emp.name} lives in ${emp.address.city}`);
// Output: Charlie lives in Springfield

console.log("--- End of Objects and Interfaces ---");
