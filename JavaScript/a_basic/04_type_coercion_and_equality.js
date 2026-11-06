// ============================================================
// Topic: Type Coercion and Equality
// Key Concepts: == vs ===, implicit/explicit coercion, truthy/falsy
// ============================================================

// --- 1. Strict Equality (===) vs Loose Equality (==) ---

// === (strict): compares value AND type — no coercion
console.log(5 === 5);         // => true
console.log(5 === "5");       // => false (different types)
console.log(null === undefined); // => false

// == (loose): coerces types before comparing — often surprising
console.log(5 == "5");        // => true  (string "5" coerced to number 5)
console.log(null == undefined); // => true  (special rule)
console.log(0 == false);      // => true  (false → 0)
console.log("" == false);     // => true  ("" → 0, false → 0)
console.log("0" == false);    // => true  ("0" → 0, false → 0)

// BEST PRACTICE: Always use === unless you intentionally need type coercion

// --- 2. Tricky == comparisons ---
console.log(null == 0);       // => false (null only equals undefined)
console.log(null == "");      // => false
console.log(NaN == NaN);      // => false (NaN is never equal to anything, even itself!)
console.log(NaN === NaN);     // => false
console.log(Number.isNaN(NaN)); // => true (proper way to check for NaN)

// --- 3. Object equality ---
// Objects are compared by REFERENCE, not by value
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;

console.log(arr1 === arr2);   // => false (different references)
console.log(arr1 === arr3);   // => true  (same reference)
console.log({} === {});       // => false (different objects)

// --- 4. Implicit Type Coercion ---

// (a) String coercion — + operator with a string converts other operand
console.log("5" + 3);         // => "53"  (number → string)
console.log("5" + true);      // => "5true"
console.log("5" + null);      // => "5null"
console.log("5" + undefined); // => "5undefined"

// (b) Numeric coercion — other math operators convert to numbers
console.log("5" - 3);         // => 2   (string → number)
console.log("5" * 2);         // => 10
console.log("5" / 2);         // => 2.5
console.log("abc" - 1);       // => NaN (cannot convert "abc" to number)
console.log(true + 1);        // => 2   (true → 1)
console.log(false + 1);       // => 1   (false → 0)
console.log(null + 1);        // => 1   (null → 0)
console.log(undefined + 1);   // => NaN (undefined → NaN)

// (c) Boolean coercion — in logical contexts
// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
// Everything else is truthy
if ("hello") console.log("Non-empty string is truthy");     // prints
if (0)       console.log("This won't print");               // doesn't print
if ([])      console.log("Empty array is truthy!");          // prints!
if ({})      console.log("Empty object is truthy!");         // prints!

// --- 5. Explicit Type Coercion ---

// To Number
console.log(Number("42"));         // => 42
console.log(Number(""));           // => 0
console.log(Number("abc"));        // => NaN
console.log(Number(true));         // => 1
console.log(Number(false));        // => 0
console.log(Number(null));         // => 0
console.log(Number(undefined));    // => NaN
console.log(parseInt("42px"));     // => 42  (parses until non-digit)
console.log(parseFloat("3.14em")); // => 3.14
console.log(+"99");                // => 99  (unary + is a shortcut)

// To String
console.log(String(42));           // => "42"
console.log(String(null));         // => "null"
console.log(String(undefined));    // => "undefined"
console.log((42).toString());      // => "42"

// To Boolean
console.log(Boolean(1));           // => true
console.log(Boolean(0));           // => false
console.log(Boolean(""));          // => false
console.log(Boolean("0"));         // => true  (non-empty string!)
console.log(Boolean([]));          // => true
console.log(!!0);                  // => false (double NOT shortcut)
console.log(!!"hello");            // => true

// --- 6. Object-to-primitive coercion ---
// Objects convert using .valueOf() then .toString()
let obj = {
    valueOf() { return 42; },
    toString() { return "custom object"; }
};
console.log(obj + 0);         // => 42     (valueOf is used for numeric context)
console.log(`${obj}`);        // => "custom object" (toString for string context)

// Array coercion examples
console.log([] + []);          // => ""     (both become "")
console.log([] + {});          // => "[object Object]"
console.log({} + []);          // => "[object Object]" (or 0 in some consoles)
console.log([1,2] + [3,4]);   // => "1,23,4" (arrays become "1,2" and "3,4")

// --- 7. Nullish Coalescing (??) vs OR (||) ---
// ?? only treats null and undefined as "empty"
// || treats all falsy values as "empty"
let value1 = 0;
console.log(value1 || "default");  // => "default" (0 is falsy)
console.log(value1 ?? "default");  // => 0          (0 is NOT null/undefined)

let value2 = "";
console.log(value2 || "default");  // => "default" ("" is falsy)
console.log(value2 ?? "default");  // => ""         ("" is NOT null/undefined)

let value3 = null;
console.log(value3 ?? "default");  // => "default"  (null triggers ??)

// --- 8. Optional chaining (?.) ---
let user = { address: { street: "Main St" } };
console.log(user?.address?.street);     // => "Main St"
console.log(user?.phone?.number);       // => undefined (no error!)
// Without ?., user.phone.number would throw TypeError

// --- Quick recap ---
// • Always prefer === over == to avoid coercion surprises
// • NaN !== NaN — use Number.isNaN() to check
// • Know the 7 falsy values (false, 0, -0, 0n, "", null, undefined, NaN)
// • "" and [] and {} are different: "" is falsy, [] and {} are truthy
// • Use ?? instead of || when 0 or "" are valid values
// • ?. prevents errors when accessing nested properties that may not exist
