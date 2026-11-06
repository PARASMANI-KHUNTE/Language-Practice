// ============================================================
// Topic: Arithmetic and Operators
// Key Concepts: Arithmetic, assignment, comparison, logical,
//               bitwise, comma, grouping, exponentiation
// ============================================================

// --- 1. Arithmetic Operators ---
console.log(10 + 3);     // => 13   Addition
console.log(10 - 3);     // => 7    Subtraction
console.log(10 * 3);     // => 30   Multiplication
console.log(10 / 3);     // => 3.3333...  Division (always float)
console.log(10 % 3);     // => 1    Modulus (remainder)
console.log(10 ** 3);    // => 1000 Exponentiation (ES2016)
console.log(Math.floor(10 / 3)); // => 3  Integer division

// Unary operators
let x = 5;
console.log(+x);         // => 5   Unary plus (numeric conversion)
console.log(-x);         // => -5  Unary minus (negation)
console.log(+"42");       // => 42  Converts string to number

// --- 2. Increment and Decrement ---
let a = 5;
console.log(a++);        // => 5  (post-increment: returns, THEN increments)
console.log(a);           // => 6
console.log(++a);        // => 7  (pre-increment: increments, THEN returns)

let b = 5;
console.log(b--);        // => 5  (post-decrement)
console.log(b);           // => 4
console.log(--b);        // => 3  (pre-decrement)

// --- 3. Assignment Operators ---
let n = 10;
n += 5;   console.log(n);  // => 15   (n = n + 5)
n -= 3;   console.log(n);  // => 12   (n = n - 3)
n *= 2;   console.log(n);  // => 24   (n = n * 2)
n /= 4;   console.log(n);  // => 6    (n = n / 4)
n %= 4;   console.log(n);  // => 2    (n = n % 4)
n **= 3;  console.log(n);  // => 8    (n = n ** 3)

// Logical assignment operators (ES2021)
let val1 = null;
val1 ??= "default";      // assign if null or undefined
console.log(val1);        // => "default"

let val2 = "";
val2 ||= "fallback";     // assign if falsy
console.log(val2);        // => "fallback"

let val3 = 1;
val3 &&= 2;              // assign if truthy
console.log(val3);        // => 2

// --- 4. Comparison Operators ---
console.log(5 > 3);      // => true
console.log(5 < 3);      // => false
console.log(5 >= 5);     // => true
console.log(5 <= 4);     // => false
console.log(5 === 5);    // => true  (strict equality)
console.log(5 !== "5");  // => true  (strict inequality)

// String comparison (lexicographic, by char code)
console.log("apple" < "banana");  // => true
console.log("a" < "b");          // => true
console.log("Z" < "a");          // => true (uppercase < lowercase in Unicode)

// --- 5. Logical Operators ---
// && (AND), || (OR), ! (NOT)
console.log(true && false);   // => false
console.log(true || false);   // => true
console.log(!true);           // => false

// Short-circuit evaluation
// && returns first falsy value or last value
console.log("hello" && "world");   // => "world" (both truthy, returns last)
console.log(0 && "world");         // => 0       (first is falsy, returns it)

// || returns first truthy value or last value
console.log("" || "fallback");     // => "fallback"
console.log("hello" || "fallback"); // => "hello"

// Practical use: default values
let username = null;
let displayName = username || "Anonymous";
console.log(displayName);  // => "Anonymous"

// --- 6. Bitwise Operators ---
// Work on 32-bit integers
console.log(5 & 3);      // => 1    AND   (0101 & 0011 = 0001)
console.log(5 | 3);      // => 7    OR    (0101 | 0011 = 0111)
console.log(5 ^ 3);      // => 6    XOR   (0101 ^ 0011 = 0110)
console.log(~5);          // => -6   NOT   (~0101 = ...11111010)
console.log(5 << 1);     // => 10   Left shift  (0101 << 1 = 1010)
console.log(5 >> 1);     // => 2    Right shift (0101 >> 1 = 0010)
console.log(-1 >>> 0);   // => 4294967295  Unsigned right shift

// Practical bitwise tricks
console.log(~~3.7);       // => 3    Double NOT for integer truncation
console.log(15 & 1);      // => 1    Check if odd (last bit is 1)
console.log(14 & 1);      // => 0    Check if even (last bit is 0)

// --- 7. Ternary (Conditional) Operator ---
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade);  // => "B"

// --- 8. Comma Operator ---
// Evaluates both expressions, returns the last one
let c = (1, 2, 3);
console.log(c);      // => 3

// Often seen in for loops
for (let i = 0, j = 10; i < 3; i++, j--) {
    console.log(`i=${i}, j=${j}`);
}
// => i=0, j=10
// => i=1, j=9
// => i=2, j=8

// --- 9. Operator Precedence (highest to lowest, simplified) ---
// 1. ()         Grouping
// 2. ** !       Exponentiation, NOT
// 3. * / %     Multiplicative
// 4. + -       Additive
// 5. < > <= >= Relational
// 6. == === != !==  Equality
// 7. &&        Logical AND
// 8. ||        Logical OR
// 9. ??        Nullish coalescing
// 10. = += etc Assignment

console.log(2 + 3 * 4);        // => 14 (not 20; * before +)
console.log((2 + 3) * 4);      // => 20 (grouping overrides)
console.log(true || false && false); // => true (&& before ||)

// --- 10. typeof and instanceof ---
console.log(typeof 42);           // => "number"
console.log(typeof "hi");         // => "string"
console.log([] instanceof Array); // => true
console.log({} instanceof Object); // => true

// --- Quick recap ---
// • ** for exponentiation, % for remainder
// • Pre/post increment differ in return value
// • ??= , ||= , &&= are logical assignment operators (ES2021)
// • && and || short-circuit — they return actual values, not just booleans
// • Bitwise operators work on 32-bit integers
// • Know operator precedence: multiplication before addition, && before ||
