// ======================================================
// TOPIC: Error Handling — Typed errors, unknown in catch, Result pattern
// ======================================================
// Key Concepts:
// - try/catch/finally with types
// - unknown type in catch blocks
// - Custom error classes
// - Result pattern for type-safe error handling
// - Error handling best practices

// --- 1. Basic try/catch ---
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); // Output: 5
    console.log(divide(10, 0)); // Throws!
} catch (error) {
    // In TypeScript 4.4+, catch variable is 'unknown' by default
    if (error instanceof Error) {
        console.log(`Error: ${error.message}`);
    }
}
// Output: Error: Division by zero

// --- 2. The 'unknown' Catch Variable ---
// TypeScript uses 'unknown' for catch variables (safer than 'any')
function safeOperation(): void {
    try {
        throw "string error"; // Can throw anything in JS!
    } catch (error: unknown) {
        // Must narrow before using
        if (error instanceof Error) {
            console.log(`Error object: ${error.message}`);
        } else if (typeof error === "string") {
            console.log(`String error: ${error}`);
        } else {
            console.log(`Unknown error: ${error}`);
        }
    }
}

safeOperation(); // Output: String error: string error

// --- 3. Custom Error Classes ---
class ValidationError extends Error {
    constructor(
        message: string,
        public field: string,
        public value: unknown
    ) {
        super(message);
        this.name = "ValidationError";
    }
}

class NotFoundError extends Error {
    constructor(
        public resource: string,
        public id: string | number
    ) {
        super(`${resource} with id ${id} not found`);
        this.name = "NotFoundError";
    }
}

class NetworkError extends Error {
    constructor(
        message: string,
        public statusCode: number,
        public retryable: boolean
    ) {
        super(message);
        this.name = "NetworkError";
    }
}

// Using custom errors
function validateAge(age: unknown): number {
    if (typeof age !== "number") {
        throw new ValidationError("Age must be a number", "age", age);
    }
    if (age < 0 || age > 150) {
        throw new ValidationError("Age must be between 0 and 150", "age", age);
    }
    return age;
}

try {
    validateAge("twenty");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation failed: ${error.message} (field: ${error.field})`);
    }
}
// Output: Validation failed: Age must be a number (field: age)

// --- 4. Error Handling with instanceof Chain ---
function handleError(error: unknown): void {
    if (error instanceof ValidationError) {
        console.log(`[VALIDATION] ${error.field}: ${error.message}`);
    } else if (error instanceof NotFoundError) {
        console.log(`[NOT FOUND] ${error.resource} #${error.id}`);
    } else if (error instanceof NetworkError) {
        console.log(`[NETWORK ${error.statusCode}] ${error.message}`);
        if (error.retryable) console.log("  → Will retry");
    } else if (error instanceof Error) {
        console.log(`[ERROR] ${error.message}`);
    } else {
        console.log(`[UNKNOWN] ${String(error)}`);
    }
}

handleError(new NotFoundError("User", 42));
// Output: [NOT FOUND] User #42

// --- 5. Result Pattern (No Exceptions) ---
// Type-safe alternative to try/catch
type Result<T, E = Error> =
    | { ok: true; value: T }
    | { ok: false; error: E };

function ok<T>(value: T): Result<T, never> {
    return { ok: true, value };
}

function err<E>(error: E): Result<never, E> {
    return { ok: false, error };
}

// --- 6. Using the Result Pattern ---
function parseJSON(text: string): Result<unknown, string> {
    try {
        return ok(JSON.parse(text));
    } catch {
        return err(`Invalid JSON: ${text.substring(0, 20)}...`);
    }
}

function parseInt2(text: string): Result<number, string> {
    const num = Number(text);
    if (isNaN(num)) {
        return err(`Cannot parse "${text}" as number`);
    }
    return ok(num);
}

// Usage
const jsonResult = parseJSON('{"name": "Alice"}');
if (jsonResult.ok) {
    console.log("Parsed:", jsonResult.value);
} else {
    console.log("Failed:", jsonResult.error);
}
// Output: Parsed: { name: 'Alice' }

const numResult = parseInt2("not-a-number");
if (numResult.ok) {
    console.log("Number:", numResult.value);
} else {
    console.log("Failed:", numResult.error);
}
// Output: Failed: Cannot parse "not-a-number" as number

// --- 7. Chaining Results ---
function chainResults(): void {
    const pipeline = parseJSON('{"age": "30"}');
    if (!pipeline.ok) {
        console.log(pipeline.error);
        return;
    }

    const data = pipeline.value as { age: string };
    const ageResult = parseInt2(data.age);
    if (!ageResult.ok) {
        console.log(ageResult.error);
        return;
    }

    console.log(`Age: ${ageResult.value}`);
}

chainResults(); // Output: Age: 30

// --- 8. finally Block ---
function withCleanup(): void {
    console.log("Starting operation...");
    try {
        console.log("Doing work...");
        throw new Error("Something failed");
    } catch (error) {
        if (error instanceof Error) {
            console.log(`Caught: ${error.message}`);
        }
    } finally {
        // Always runs, even after throw
        console.log("Cleanup complete");
    }
}

withCleanup();
// Output:
//   Starting operation...
//   Doing work...
//   Caught: Something failed
//   Cleanup complete

// --- 9. Async Error Handling ---
async function fetchData(url: string): Promise<Result<string, string>> {
    try {
        // Simulating async operation
        if (url.includes("error")) {
            throw new NetworkError("Request failed", 500, true);
        }
        return ok(`Data from ${url}`);
    } catch (error) {
        if (error instanceof NetworkError) {
            return err(`Network error (${error.statusCode}): ${error.message}`);
        }
        return err(String(error));
    }
}

async function demo(): Promise<void> {
    const result = await fetchData("https://api.example.com/data");
    console.log(result);
    // Output: { ok: true, value: 'Data from https://api.example.com/data' }

    const errorResult = await fetchData("https://api.example.com/error");
    console.log(errorResult);
    // Output: { ok: false, error: 'Network error (500): Request failed' }
}

demo();

console.log("--- End of Error Handling ---");
