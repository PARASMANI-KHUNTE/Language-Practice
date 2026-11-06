// ======================================================
// TOPIC: Utility Types — Partial, Required, Readonly, Pick, Omit, Record
// ======================================================
// Key Concepts:
// - Built-in utility types for type transformations
// - Partial, Required, Readonly
// - Pick, Omit for selecting/excluding properties
// - Record for dictionary types
// - ReturnType, Parameters, Awaited

// --- 1. Partial<T> ---
// Makes ALL properties optional
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Partial<User> = { id?: number; name?: string; email?: string; age?: number }
function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

const alice: User = { id: 1, name: "Alice", email: "alice@test.com", age: 30 };
const updated = updateUser(alice, { name: "Alicia", age: 31 });
console.log(updated);
// Output: { id: 1, name: 'Alicia', email: 'alice@test.com', age: 31 }

// --- 2. Required<T> ---
// Makes ALL properties required (opposite of Partial)
interface Config {
    host?: string;
    port?: number;
    debug?: boolean;
}

// Required<Config> = { host: string; port: number; debug: boolean }
function startServer(config: Required<Config>): void {
    console.log(`Server at ${config.host}:${config.port} (debug: ${config.debug})`);
}

startServer({ host: "localhost", port: 3000, debug: false });
// Output: Server at localhost:3000 (debug: false)

// --- 3. Readonly<T> ---
// Makes ALL properties readonly
interface Point {
    x: number;
    y: number;
}

const origin: Readonly<Point> = { x: 0, y: 0 };
// origin.x = 5; // Error: Cannot assign to 'x' because it is a read-only property

console.log(origin); // Output: { x: 0, y: 0 }

// Deep readonly with a recursive type
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

interface NestedConfig {
    db: {
        host: string;
        port: number;
    };
    features: string[];
}

const frozenConfig: DeepReadonly<NestedConfig> = {
    db: { host: "localhost", port: 5432 },
    features: ["auth", "logging"]
};
// frozenConfig.db.host = "remote"; // Error: readonly

// --- 4. Pick<T, K> ---
// Select a subset of properties
type UserPreview = Pick<User, "id" | "name">;
// UserPreview = { id: number; name: string }

const preview: UserPreview = { id: 1, name: "Alice" };
console.log(preview); // Output: { id: 1, name: 'Alice' }

// Useful for creating lightweight types from larger ones
type LoginCredentials = Pick<User, "email"> & { password: string };
const creds: LoginCredentials = { email: "alice@test.com", password: "secret" };
console.log(creds.email); // Output: alice@test.com

// --- 5. Omit<T, K> ---
// Exclude specific properties
type UserWithoutEmail = Omit<User, "email">;
// UserWithoutEmail = { id: number; name: string; age: number }

const noEmail: UserWithoutEmail = { id: 1, name: "Alice", age: 30 };
console.log(noEmail); // Output: { id: 1, name: 'Alice', age: 30 }

// Omit multiple properties
type UserBasic = Omit<User, "email" | "age">;
const basic: UserBasic = { id: 1, name: "Alice" };
console.log(basic);

// --- 6. Record<K, V> ---
// Create a type with specific keys and value types
type Fruit = "apple" | "banana" | "cherry";
type FruitInventory = Record<Fruit, number>;

const inventory: FruitInventory = {
    apple: 50,
    banana: 30,
    cherry: 20
};
console.log(inventory); // Output: { apple: 50, banana: 30, cherry: 20 }

// Dynamic string keys
type StringMap = Record<string, string>;
const headers: StringMap = {
    "Content-Type": "application/json",
    "Authorization": "Bearer abc123"
};
console.log(headers);

// Record with complex values
type UserMap = Record<number, User>;
const users: UserMap = {
    1: { id: 1, name: "Alice", email: "alice@test.com", age: 30 },
    2: { id: 2, name: "Bob", email: "bob@test.com", age: 25 }
};
console.log(users[1].name); // Output: Alice

// --- 7. ReturnType<T> ---
// Extract the return type of a function
function createUser(name: string, age: number) {
    return { id: Math.random(), name, age, createdAt: new Date() };
}

type NewUser = ReturnType<typeof createUser>;
// NewUser = { id: number; name: string; age: number; createdAt: Date }

const user: NewUser = createUser("Charlie", 28);
console.log(user.name); // Output: Charlie

// --- 8. Parameters<T> ---
// Extract parameter types as a tuple
function sendMessage(to: string, subject: string, body: string): void {
    console.log(`To: ${to}, Subject: ${subject}`);
}

type SendMessageParams = Parameters<typeof sendMessage>;
// SendMessageParams = [to: string, subject: string, body: string]

const args: SendMessageParams = ["alice@test.com", "Hello", "How are you?"];
sendMessage(...args); // Output: To: alice@test.com, Subject: Hello

// --- 9. Exclude<T, U> and Extract<T, U> ---
type AllTypes = string | number | boolean | null | undefined;

type NonNullTypes = Exclude<AllTypes, null | undefined>;
// NonNullTypes = string | number | boolean

type OnlyStringOrNumber = Extract<AllTypes, string | number>;
// OnlyStringOrNumber = string | number

let val1: NonNullTypes = "hello"; // OK
// let val2: NonNullTypes = null; // Error

// --- 10. NonNullable<T> ---
type MaybeString = string | null | undefined;
type DefiniteString = NonNullable<MaybeString>;
// DefiniteString = string

let defined: DefiniteString = "hello";
// defined = null; // Error

// --- 11. Awaited<T> ---
// Unwrap Promise types
type PromisedString = Promise<string>;
type Unwrapped = Awaited<PromisedString>;
// Unwrapped = string

type NestedPromise = Promise<Promise<number>>;
type DeepUnwrapped = Awaited<NestedPromise>;
// DeepUnwrapped = number

// --- 12. Combining Utility Types ---
interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    tags: string[];
    publishedAt: Date;
}

// Create a draft article: optional content, no id or publishedAt
type ArticleDraft = Partial<Omit<Article, "id" | "publishedAt">>;

const draft: ArticleDraft = {
    title: "TypeScript Tips",
    tags: ["typescript", "programming"]
};
console.log(draft);

// Create an article summary: only id, title, author
type ArticleSummary = Readonly<Pick<Article, "id" | "title" | "author">>;

const summary: ArticleSummary = { id: 1, title: "TypeScript Tips", author: "Alice" };
// summary.title = "New Title"; // Error: readonly
console.log(summary);

console.log("--- End of Utility Types ---");
