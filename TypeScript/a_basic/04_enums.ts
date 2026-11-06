// ======================================================
// TOPIC: Enums — Numeric, string, const enums
// ======================================================
// Key Concepts:
// - Numeric enums with auto-incrementing values
// - String enums for readable values
// - Const enums for compile-time optimization
// - Enum patterns and alternatives

// --- 1. Numeric Enums ---
// By default, enums start at 0 and auto-increment
enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
}

let move: Direction = Direction.Up;
console.log(move);              // Output: 0
console.log(Direction.Right);   // Output: 3
console.log(Direction[0]);      // Output: Up (reverse mapping)

// --- 2. Custom Starting Value ---
enum StatusCode {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    NotFound = 404,
    ServerError = 500
}

console.log(StatusCode.OK);       // Output: 200
console.log(StatusCode.NotFound); // Output: 404
console.log(StatusCode[200]);     // Output: OK (reverse mapping)

// --- 3. String Enums ---
// Each member must be initialized with a string literal
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
    Yellow = "YELLOW"
}

let favorite: Color = Color.Blue;
console.log(favorite);          // Output: BLUE
// Note: String enums do NOT have reverse mapping
// console.log(Color["RED"]);   // This accesses Color.RED, not reverse lookup

// --- 4. Heterogeneous Enums (Mixed) ---
// Possible but NOT recommended
enum Mixed {
    No = 0,
    Yes = "YES"
}
console.log(Mixed.No);  // Output: 0
console.log(Mixed.Yes); // Output: YES

// --- 5. Computed Enum Members ---
enum FileAccess {
    None = 0,
    Read = 1 << 0,       // 1
    Write = 1 << 1,      // 2
    ReadWrite = Read | Write, // 3
    Execute = 1 << 2     // 4
}

console.log(FileAccess.Read);      // Output: 1
console.log(FileAccess.ReadWrite); // Output: 3

// Using bitwise enums as flags
function checkAccess(access: FileAccess): void {
    if (access & FileAccess.Read) console.log("  Can read");
    if (access & FileAccess.Write) console.log("  Can write");
    if (access & FileAccess.Execute) console.log("  Can execute");
}
console.log("Access for ReadWrite:");
checkAccess(FileAccess.ReadWrite);
// Output:
//   Can read
//   Can write

// --- 6. Const Enums ---
// Completely removed during compilation — inlined at use sites
const enum Season {
    Spring = "SPRING",
    Summer = "SUMMER",
    Autumn = "AUTUMN",
    Winter = "WINTER"
}

let currentSeason = Season.Summer;
// Compiles to: let currentSeason = "SUMMER"; (no enum object)
console.log(currentSeason); // Output: SUMMER

// --- 7. Enums as Function Parameters ---
enum LogLevel {
    Debug = 0,
    Info = 1,
    Warn = 2,
    Error = 3
}

function log(message: string, level: LogLevel): void {
    const prefix = LogLevel[level].toUpperCase();
    console.log(`[${prefix}] ${message}`);
}

log("Starting app", LogLevel.Info);   // Output: [INFO] Starting app
log("Something wrong", LogLevel.Warn); // Output: [WARN] Something wrong

// --- 8. Enum with Switch ---
enum Shape {
    Circle = "circle",
    Square = "square",
    Triangle = "triangle"
}

function describeShape(shape: Shape): string {
    switch (shape) {
        case Shape.Circle:
            return "A round shape";
        case Shape.Square:
            return "Four equal sides";
        case Shape.Triangle:
            return "Three sides";
    }
}

console.log(describeShape(Shape.Circle)); // Output: A round shape

// --- 9. Alternatives to Enums ---
// Many TypeScript developers prefer union types over enums

// Union type alternative (often preferred)
type Fruit = "apple" | "banana" | "cherry";
let myFruit: Fruit = "apple";
// myFruit = "grape"; // Error: not assignable

// Object with 'as const' alternative
const ROLES = {
    Admin: "admin",
    User: "user",
    Guest: "guest"
} as const;

type Role = typeof ROLES[keyof typeof ROLES];
// Type: "admin" | "user" | "guest"
let userRole: Role = ROLES.Admin;
console.log(userRole); // Output: admin

// --- 10. Iterating Over Enums ---
enum Weekday {
    Monday, Tuesday, Wednesday, Thursday, Friday
}

// For numeric enums, filter out reverse mappings
const weekdays = Object.keys(Weekday)
    .filter(key => isNaN(Number(key)));
console.log(weekdays);
// Output: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

// For string enums, Object.values works directly
const colors = Object.values(Color);
console.log(colors); // Output: ["RED", "GREEN", "BLUE", "YELLOW"]

console.log("--- End of Enums ---");
