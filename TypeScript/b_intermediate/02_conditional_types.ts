/**
 * Topic: Conditional Types & The `infer` Keyword
 * Concepts Covered:
 *   - T extends U ? X : Y
 *   - Distributive conditional types
 *   - Type extraction via `infer` (UnwrapPromise, FunctionReturnType)
 *   - Built-ins: Exclude, Extract, NonNullable
 */

type IsString<T> = T extends string ? true : false;
type A = IsString<"hello">; // true
type B = IsString<123>;     // false

// Unwrapping Promise type with infer
type FlattenPromise<T> = T extends Promise<infer U> ? U : T;
type Unwrapped = FlattenPromise<Promise<string[]>>; // string[]

// Extracting function return type
type CustomReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function fetchUserRole() {
  return { role: "admin", level: 5 };
}

type UserRoleResult = CustomReturnType<typeof fetchUserRole>;

// Filtering types using Exclude and Extract
type Status = "pending" | "approved" | "rejected" | "archived";
type ActiveStatus = Exclude<Status, "archived">;
type TerminalStatus = Extract<Status, "approved" | "rejected">;
