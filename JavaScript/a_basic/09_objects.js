// ============================================================
// Topic: Objects
// Key Concepts: Object literals, property access, methods,
//               destructuring, spread, computed keys, Object methods
// ============================================================

// --- 1. Object literals ---
const person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};
console.log(person);

// --- 2. Accessing properties ---
// Dot notation (preferred when key is a valid identifier)
console.log(person.firstName);     // => "Alice"
console.log(person.address.city);  // => "New York"

// Bracket notation (required for dynamic keys, special chars, variables)
console.log(person["lastName"]);   // => "Smith"
const key = "age";
console.log(person[key]);         // => 30

// Properties with spaces or special characters
const special = { "first-name": "Bob", "2nd place": true };
console.log(special["first-name"]); // => "Bob"

// --- 3. Adding, modifying, and deleting properties ---
const car = { brand: "Toyota" };
car.model = "Camry";           // Add
car.year = 2024;               // Add
car.brand = "Honda";           // Modify
delete car.year;               // Delete
console.log(car);              // => { brand: "Honda", model: "Camry" }

// --- 4. Checking if a property exists ---
console.log("brand" in car);               // => true
console.log("year" in car);                // => false
console.log(car.hasOwnProperty("model"));  // => true
console.log(car.model !== undefined);      // => true (but fails for props set to undefined)

// --- 5. Shorthand property names ---
const name = "Alice";
const age = 30;
const userShort = { name, age };   // equivalent to { name: name, age: age }
console.log(userShort);            // => { name: "Alice", age: 30 }

// --- 6. Computed property names ---
const field = "email";
const dynamicObj = {
    [field]: "alice@example.com",
    [`${field}Verified`]: true
};
console.log(dynamicObj);
// => { email: "alice@example.com", emailVerified: true }

// --- 7. Methods in objects ---
const calculator = {
    // Method shorthand (ES6+)
    add(a, b) {
        return a + b;
    },
    // Traditional function expression
    subtract: function(a, b) {
        return a - b;
    },
    // Arrow function (caution: `this` behaves differently)
    multiply: (a, b) => a * b
};
console.log(calculator.add(5, 3));       // => 8
console.log(calculator.subtract(10, 4)); // => 6
console.log(calculator.multiply(3, 7));  // => 21

// --- 8. `this` in objects ---
const user = {
    name: "Alice",
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};
user.greet();  // => Hello, I'm Alice
// Note: arrow functions don't have their own `this` — use regular methods

// --- 9. Destructuring objects ---
const { firstName, lastName, age: userAge } = person;
console.log(firstName);   // => "Alice"
console.log(userAge);     // => 30 (renamed from 'age')

// Default values
const { phone = "N/A", email = "N/A" } = person;
console.log(phone, email);  // => "N/A" "N/A"

// Nested destructuring
const { address: { city, zip } } = person;
console.log(city, zip);  // => "New York" "10001"

// Rest in destructuring
const { firstName: fn, ...rest } = person;
console.log(fn);    // => "Alice"
console.log(rest);  // everything except firstName

// Destructuring in function parameters
function introduce({ firstName, age }) {
    console.log(`I'm ${firstName}, age ${age}`);
}
introduce(person);  // => I'm Alice, age 30

// --- 10. Spread operator with objects ---
// Shallow copy
const original = { a: 1, b: 2 };
const copy = { ...original };
console.log(copy);  // => { a: 1, b: 2 }

// Merge objects (later properties win)
const defaults = { theme: "light", lang: "en", fontSize: 14 };
const prefs = { theme: "dark", fontSize: 16 };
const settings = { ...defaults, ...prefs };
console.log(settings);
// => { theme: "dark", lang: "en", fontSize: 16 }

// Add/override properties
const updated = { ...person, age: 31, email: "alice@mail.com" };
console.log(updated.age);    // => 31
console.log(updated.email);  // => "alice@mail.com"

// --- 11. Object static methods ---
const obj = { x: 1, y: 2, z: 3 };

// Object.keys() — array of keys
console.log(Object.keys(obj));     // => ["x", "y", "z"]

// Object.values() — array of values
console.log(Object.values(obj));   // => [1, 2, 3]

// Object.entries() — array of [key, value] pairs
console.log(Object.entries(obj));  // => [["x", 1], ["y", 2], ["z", 3]]

// Object.fromEntries() — reverse of entries
const pairs = [["a", 1], ["b", 2]];
console.log(Object.fromEntries(pairs));  // => { a: 1, b: 2 }

// Object.assign() — copy/merge (mutates target)
const target = { a: 1 };
Object.assign(target, { b: 2 }, { c: 3 });
console.log(target);  // => { a: 1, b: 2, c: 3 }

// Object.freeze() — make immutable (shallow)
const frozen = Object.freeze({ name: "Alice", age: 30 });
frozen.name = "Bob";    // silently fails (or throws in strict mode)
console.log(frozen.name); // => "Alice"

// Object.seal() — can modify existing but cannot add/delete
const sealed = Object.seal({ name: "Alice" });
sealed.name = "Bob";     // ✓ allowed
sealed.age = 30;         // ✗ silently fails
console.log(sealed);     // => { name: "Bob" }

// --- 12. Iterating over objects ---
const scores = { math: 90, english: 85, science: 92 };

// for...in
for (const subject in scores) {
    console.log(`${subject}: ${scores[subject]}`);
}

// Object.entries() + for...of
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}

// --- 13. Optional chaining with objects ---
const data = { user: { profile: { avatar: "pic.jpg" } } };
console.log(data?.user?.profile?.avatar);  // => "pic.jpg"
console.log(data?.user?.settings?.theme);  // => undefined (no error)

// --- Quick recap ---
// • Objects store key-value pairs; keys are strings (or Symbols)
// • Use dot notation (obj.key) or brackets (obj["key"]) for access
// • Shorthand: { name } is equivalent to { name: name }
// • Destructure: const { a, b: renamed, c = default } = obj
// • Spread: { ...obj } for shallow copy/merge
// • Object.keys(), .values(), .entries() for iteration
// • Object.freeze() for immutability, Object.seal() to prevent add/delete
