// ======================================================
// TOPIC: Union & Literal Types — Union types, literal types, discriminated unions
// ======================================================
// Key Concepts:
// - Union types for multiple possible types
// - Literal types (string, number, boolean literals)
// - Discriminated unions for type-safe patterns
// - Narrowing with unions

// --- 1. Basic Union Types ---
// A variable that can hold one of several types
let id: string | number;
id = "abc-123";  // OK
id = 42;         // OK
// id = true;    // Error: boolean not in union

function printId(id: string | number): void {
    console.log(`ID: ${id}`);
}
printId("abc");  // Output: ID: abc
printId(123);    // Output: ID: 123

// --- 2. Narrowing Union Types ---
// TypeScript narrows the type inside conditional blocks
function formatValue(value: string | number): string {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        return value.toUpperCase();
    } else {
        // TypeScript knows value is number here
        return value.toFixed(2);
    }
}

console.log(formatValue("hello")); // Output: HELLO
console.log(formatValue(3.14159)); // Output: 3.14

// --- 3. String Literal Types ---
// A type that allows ONLY specific string values
type Theme = "light" | "dark" | "system";

let currentTheme: Theme = "dark";
// currentTheme = "blue"; // Error: not assignable to type Theme

function applyTheme(theme: Theme): void {
    console.log(`Applying ${theme} theme`);
}
applyTheme("light"); // Output: Applying light theme

// --- 4. Numeric Literal Types ---
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): DiceRoll {
    return (Math.floor(Math.random() * 6) + 1) as DiceRoll;
}
console.log(`Rolled: ${rollDice()}`);

// --- 5. Boolean Literal Types ---
type True = true;
type False = false;

// Useful in generic conditional types
type IsString<T> = T extends string ? true : false;

// --- 6. Union of Object Types ---
type Cat = {
    type: "cat";
    meow(): void;
};

type Dog = {
    type: "dog";
    bark(): void;
};

type Fish = {
    type: "fish";
    swim(): void;
};

type Pet = Cat | Dog | Fish;

function interactWithPet(pet: Pet): void {
    // Without narrowing, can only access common properties
    console.log(`Pet type: ${pet.type}`);
    
    // Narrow by checking the discriminant
    switch (pet.type) {
        case "cat":
            pet.meow(); // TypeScript knows it's Cat
            break;
        case "dog":
            pet.bark(); // TypeScript knows it's Dog
            break;
        case "fish":
            pet.swim(); // TypeScript knows it's Fish
            break;
    }
}

interactWithPet({ type: "cat", meow: () => console.log("  Meow!") });
interactWithPet({ type: "dog", bark: () => console.log("  Woof!") });
// Output:
//   Pet type: cat
//     Meow!
//   Pet type: dog
//     Woof!

// --- 7. Discriminated Unions (Tagged Unions) ---
// Pattern: each member has a common literal property (the "discriminant")
type Success<T> = {
    status: "success";
    data: T;
};

type Failure = {
    status: "failure";
    error: string;
};

type Loading = {
    status: "loading";
};

type ApiResponse<T> = Success<T> | Failure | Loading;

function handleResponse(response: ApiResponse<string[]>): void {
    switch (response.status) {
        case "success":
            console.log(`Data: ${response.data.join(", ")}`);
            break;
        case "failure":
            console.log(`Error: ${response.error}`);
            break;
        case "loading":
            console.log("Loading...");
            break;
    }
}

handleResponse({ status: "success", data: ["Alice", "Bob"] });
// Output: Data: Alice, Bob
handleResponse({ status: "failure", error: "Network error" });
// Output: Error: Network error

// --- 8. Exhaustive Checks with never ---
type Action =
    | { type: "ADD"; item: string }
    | { type: "REMOVE"; index: number }
    | { type: "CLEAR" };

function processAction(action: Action): void {
    switch (action.type) {
        case "ADD":
            console.log(`Adding: ${action.item}`);
            break;
        case "REMOVE":
            console.log(`Removing at index: ${action.index}`);
            break;
        case "CLEAR":
            console.log("Clearing all");
            break;
        default:
            // This ensures all cases are handled
            const _exhaustive: never = action;
            throw new Error(`Unhandled action: ${_exhaustive}`);
    }
}

processAction({ type: "ADD", item: "TypeScript" });
// Output: Adding: TypeScript

// --- 9. Union with Arrays ---
type Primitive = string | number | boolean;
let primitives: Primitive[] = ["hello", 42, true, "world", 0];
console.log(primitives); // Output: ["hello", 42, true, "world", 0]

// Array of different types vs union array
type StringOrNumberArray = string[] | number[]; // Array is ALL strings OR ALL numbers
let allStrings: StringOrNumberArray = ["a", "b"];
let allNumbers: StringOrNumberArray = [1, 2];
// let mixed: StringOrNumberArray = ["a", 1]; // Error!

// --- 10. Literal Type Widening ---
// const declarations get literal types
const exactValue = "hello"; // Type: "hello" (literal)
let widenedValue = "hello"; // Type: string (widened)

// Use 'as const' to prevent widening
let narrow = "hello" as const; // Type: "hello" (literal)

// In objects
const config = {
    theme: "dark" as const,   // Type: "dark" instead of string
    fontSize: 14 as const     // Type: 14 instead of number
};

// --- 11. Practical Example: Event System ---
type MouseEvent2 = { type: "click"; x: number; y: number };
type KeyEvent = { type: "keypress"; key: string; code: number };
type ScrollEvent = { type: "scroll"; delta: number };

type UIEvent2 = MouseEvent2 | KeyEvent | ScrollEvent;

function logEvent(event: UIEvent2): void {
    switch (event.type) {
        case "click":
            console.log(`Click at (${event.x}, ${event.y})`);
            break;
        case "keypress":
            console.log(`Key pressed: ${event.key}`);
            break;
        case "scroll":
            console.log(`Scrolled by ${event.delta}`);
            break;
    }
}

logEvent({ type: "click", x: 100, y: 200 });
// Output: Click at (100, 200)

console.log("--- End of Union and Literal Types ---");
