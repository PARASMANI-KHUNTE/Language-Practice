// ============================================================
// TOPIC: Date and Math Objects in JavaScript
// Key Concepts: Date creation, Date methods, Math utilities,
//               date arithmetic, formatting dates
// ============================================================

// --- 1. Creating Date Objects ---
// The Date object represents a single moment in time

const now = new Date();                          // Current date and time
console.log("Current date/time:", now);

const fromString = new Date("2024-12-25");       // From date string (ISO format)
const fromParts = new Date(2024, 11, 25, 10, 30, 0); // Year, month(0-indexed), day, h, m, s
const fromTimestamp = new Date(1700000000000);    // From milliseconds since Jan 1, 1970 (Unix epoch)

console.log("From string:", fromString);
console.log("From parts (Dec 25):", fromParts);  // Month 11 = December!
console.log("From timestamp:", fromTimestamp);

// --- 2. Date Getter Methods ---
// Extract individual components from a Date

const date = new Date(2024, 6, 15, 14, 30, 45); // July 15, 2024, 2:30:45 PM

console.log("\n--- Date Getter Methods ---");
console.log("getFullYear():", date.getFullYear());   // 2024 (4-digit year)
console.log("getMonth():", date.getMonth());         // 6 (0-indexed: 0=Jan, 6=Jul)
console.log("getDate():", date.getDate());           // 15 (day of month, 1-31)
console.log("getDay():", date.getDay());             // Day of week (0=Sun, 6=Sat)
console.log("getHours():", date.getHours());         // 14
console.log("getMinutes():", date.getMinutes());     // 30
console.log("getSeconds():", date.getSeconds());     // 45
console.log("getTime():", date.getTime());           // Milliseconds since epoch

// --- 3. Date Formatting Methods ---
console.log("\n--- Date Formatting ---");
console.log("toString():", date.toString());
console.log("toISOString():", date.toISOString());           // "2024-07-15T09:00:45.000Z" (UTC)
console.log("toLocaleDateString():", date.toLocaleDateString());       // Locale-specific date
console.log("toLocaleTimeString():", date.toLocaleTimeString());       // Locale-specific time
console.log("toLocaleString():", date.toLocaleString());               // Full locale string

// Custom locale formatting
console.log("US format:", date.toLocaleDateString("en-US"));           // "7/15/2024"
console.log("UK format:", date.toLocaleDateString("en-GB"));           // "15/07/2024"
console.log("Custom:", date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
}));
// Expected: "Monday, July 15, 2024"

// --- 4. Date Setter Methods ---
const mutableDate = new Date(2024, 0, 1); // Jan 1, 2024
mutableDate.setFullYear(2025);
mutableDate.setMonth(5);       // June
mutableDate.setDate(20);
console.log("\nModified date:", mutableDate.toLocaleDateString());

// --- 5. Date Arithmetic ---
// Dates can be subtracted to get difference in milliseconds
console.log("\n--- Date Arithmetic ---");

const start = new Date(2024, 0, 1);   // Jan 1, 2024
const end = new Date(2024, 11, 31);   // Dec 31, 2024

const diffMs = end - start;                          // Difference in ms
const diffDays = diffMs / (1000 * 60 * 60 * 24);     // Convert to days
console.log(`Days between: ${diffDays}`);             // 365

// Adding days to a date
function addDays(date, days) {
    const result = new Date(date);    // Clone to avoid mutation
    result.setDate(result.getDate() + days);
    return result;
}
console.log("10 days from now:", addDays(new Date(), 10).toLocaleDateString());

// Age calculator
function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;  // Birthday hasn't occurred yet this year
    }
    return age;
}
console.log("Age (born 2000-05-15):", calculateAge(new Date(2000, 4, 15)));

// Date.now() returns current timestamp without creating a Date object
console.log("Current timestamp:", Date.now());

// ============================================================
// --- 6. Math Object --- (static, not a constructor)
// ============================================================
console.log("\n--- Math Object ---");

// Math constants
console.log("Math.PI:", Math.PI);           // 3.141592653589793
console.log("Math.E:", Math.E);             // 2.718281828459045
console.log("Math.SQRT2:", Math.SQRT2);     // 1.4142135623730951

// Rounding methods
console.log("\n--- Rounding ---");
console.log("Math.floor(4.9):", Math.floor(4.9));     // 4  (round down)
console.log("Math.floor(-4.1):", Math.floor(-4.1));   // -5 (toward -infinity)
console.log("Math.ceil(4.1):", Math.ceil(4.1));       // 5  (round up)
console.log("Math.ceil(-4.9):", Math.ceil(-4.9));     // -4 (toward +infinity)
console.log("Math.round(4.5):", Math.round(4.5));     // 5  (nearest, .5 rounds up)
console.log("Math.round(4.4):", Math.round(4.4));     // 4
console.log("Math.trunc(4.9):", Math.trunc(4.9));     // 4  (remove decimal)
console.log("Math.trunc(-4.9):", Math.trunc(-4.9));   // -4

// Min, Max
console.log("\n--- Min / Max ---");
console.log("Math.max(1, 5, 3):", Math.max(1, 5, 3));        // 5
console.log("Math.min(1, 5, 3):", Math.min(1, 5, 3));        // 1
console.log("Math.max(...[10, 20, 5]):", Math.max(...[10, 20, 5])); // 20 (spread for arrays)

// Power, Square Root, Absolute Value
console.log("\n--- Power, Sqrt, Abs ---");
console.log("Math.pow(2, 10):", Math.pow(2, 10));     // 1024
console.log("2 ** 10:", 2 ** 10);                     // 1024 (ES2016 operator)
console.log("Math.sqrt(144):", Math.sqrt(144));       // 12
console.log("Math.cbrt(27):", Math.cbrt(27));         // 3  (cube root)
console.log("Math.abs(-42):", Math.abs(-42));         // 42
console.log("Math.abs(42):", Math.abs(42));           // 42

// --- 7. Math.random() ---
// Returns a float in [0, 1) — includes 0, excludes 1
console.log("\n--- Math.random ---");
console.log("Random [0,1):", Math.random());

// Random integer between min (inclusive) and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Random 1-100:", randomInt(1, 100));
console.log("Random 1-6 (die roll):", randomInt(1, 6));

// Random element from an array
const colors = ["red", "green", "blue", "yellow", "purple"];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log("Random color:", randomColor);

// Shuffle an array (Fisher-Yates algorithm using Math.random)
function shuffle(arr) {
    const result = [...arr];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
console.log("Shuffled [1..5]:", shuffle([1, 2, 3, 4, 5]));

// --- 8. Practical Examples ---
console.log("\n--- Practical Examples ---");

// Format a duration in milliseconds to human-readable
function formatDuration(ms) {
    const seconds = Math.floor(ms / 1000) % 60;
    const minutes = Math.floor(ms / (1000 * 60)) % 60;
    const hours = Math.floor(ms / (1000 * 60 * 60));
    return `${hours}h ${minutes}m ${seconds}s`;
}
console.log("Format 7384000ms:", formatDuration(7384000)); // "2h 3m 4s"

// Calculate distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
console.log("Distance (0,0)→(3,4):", distance(0, 0, 3, 4)); // 5

// Clamp a value between min and max
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
console.log("Clamp 150 to [0,100]:", clamp(150, 0, 100));  // 100
console.log("Clamp -5 to [0,100]:", clamp(-5, 0, 100));    // 0
console.log("Clamp 50 to [0,100]:", clamp(50, 0, 100));    // 50
