// ============================================================
// Topic: Conditional Statements
// Key Concepts: if/else, switch, ternary, nullish coalescing,
//               optional chaining, guard clauses
// ============================================================

// --- 1. if statement ---
let temperature = 30;

if (temperature > 35) {
    console.log("It's very hot!");
}
// Nothing printed since 30 <= 35

// --- 2. if...else ---
let age = 17;

if (age >= 18) {
    console.log("You can vote.");
} else {
    console.log("You cannot vote yet.");
}
// => You cannot vote yet.

// --- 3. if...else if...else ---
let score = 78;
let grade;

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log(`Score: ${score}, Grade: ${grade}`);  // => Score: 78, Grade: C

// --- 4. Ternary operator (? :) ---
// Syntax: condition ? expressionIfTrue : expressionIfFalse
let canDrive = age >= 16 ? "Yes" : "No";
console.log(`Can drive: ${canDrive}`);  // => Can drive: Yes

// Nested ternary (use sparingly — can hurt readability)
let category = age < 13 ? "child" : age < 18 ? "teen" : "adult";
console.log(`Category: ${category}`);  // => Category: teen

// Ternary for inline values
console.log(`User is ${age >= 18 ? "an adult" : "a minor"}`);

// --- 5. switch statement ---
let day = "Wednesday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Midweek");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Invalid day");
}
// => Midweek

// IMPORTANT: Without `break`, execution "falls through" to the next case
let num = 2;
switch (num) {
    case 1:
        console.log("One");   // skipped
    case 2:
        console.log("Two");   // prints (matched)
    case 3:
        console.log("Three"); // also prints (fall-through!)
        break;
    case 4:
        console.log("Four");  // doesn't print (break above)
}
// => Two
// => Three

// switch uses strict equality (===)
switch ("1") {
    case 1:
        console.log("number 1");
        break;
    case "1":
        console.log("string '1'");  // => this one matches
        break;
}

// --- 6. Logical operators in conditions ---

// AND (&&) — both must be true
let hasTicket = true;
let hasID = true;
if (hasTicket && hasID) {
    console.log("You may enter.");  // => You may enter.
}

// OR (||) — at least one must be true
let isAdmin = false;
let isModerator = true;
if (isAdmin || isModerator) {
    console.log("Access granted.");  // => Access granted.
}

// NOT (!) — inverts the boolean
let isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Please log in.");  // => Please log in.
}

// --- 7. Nullish Coalescing (??) ---
// Returns right operand if left is null or undefined (NOT other falsy values)
let userInput = null;
let displayName = userInput ?? "Anonymous";
console.log(displayName);  // => "Anonymous"

let count = 0;
console.log(count ?? 10);  // => 0 (0 is NOT null/undefined, so 0 is used)
console.log(count || 10);  // => 10 (0 IS falsy, so 10 is used with ||)

// --- 8. Optional Chaining (?.) ---
let user = {
    name: "Alice",
    address: {
        street: "123 Main St"
    }
};

console.log(user?.address?.street);      // => "123 Main St"
console.log(user?.phone?.number);        // => undefined (no error)
console.log(user?.getFullName?.());      // => undefined (method doesn't exist)

// Without optional chaining, this would throw:
// console.log(user.phone.number);       // TypeError!

// --- 9. Guard clauses (early return pattern) ---
function processOrder(order) {
    if (!order) {
        console.log("No order provided");
        return;
    }
    if (!order.items || order.items.length === 0) {
        console.log("Order has no items");
        return;
    }
    if (!order.paid) {
        console.log("Order not paid");
        return;
    }
    console.log("Processing order...");
}

processOrder(null);                          // => No order provided
processOrder({ items: [] });                 // => Order has no items
processOrder({ items: ["book"], paid: false }); // => Order not paid
processOrder({ items: ["book"], paid: true });  // => Processing order...

// --- 10. Truthiness in conditions ---
// JavaScript converts values to boolean in conditions automatically

let name = "";
if (name) {
    console.log(`Hello, ${name}`);
} else {
    console.log("Name is empty/missing");  // => Name is empty/missing
}

// Common pattern: checking if array has elements
let items = [1, 2, 3];
if (items.length) {
    console.log(`Found ${items.length} items`);  // => Found 3 items
}

// --- 11. Conditional (short-circuit) execution ---
// Using && as a conditional executor
let isDebug = true;
isDebug && console.log("Debug mode is on");  // => Debug mode is on

// Using || for defaults
function greet(name) {
    name = name || "stranger";
    console.log(`Hello, ${name}!`);
}
greet("Alice");   // => Hello, Alice!
greet();          // => Hello, stranger!

// --- Quick recap ---
// • if/else for basic branching, switch for multiple value checks
// • Ternary (a ? b : c) for inline conditional expressions
// • switch uses strict equality (===) and needs break to prevent fall-through
// • ?? (nullish coalescing) treats ONLY null/undefined as empty
// • || treats all falsy values (0, "", false, null, undefined, NaN) as empty
// • ?. (optional chaining) safely accesses nested properties
// • Guard clauses improve readability by handling edge cases early
