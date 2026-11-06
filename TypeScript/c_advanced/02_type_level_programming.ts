/**
 * Topic: Type-Level Programming & Recursive Types
 * Concepts Covered:
 *   - Recursive string manipulation
 *   - Tuple length arithmetic (Add, Subtract, Multiply at compile time)
 *   - Deep Readonly and Deep Partial types
 */

// Deep Readonly
type DeepReadonly<T> = T extends Function | boolean | number | string | symbol | null | undefined
  ? T
  : { readonly [P in keyof T]: DeepReadonly<T[P]> };

// Type-level string join
type Join<T extends string[], Sep extends string> = T extends []
  ? ""
  : T extends [infer Head extends string]
  ? Head
  : T extends [infer Head extends string, ...infer Tail extends string[]]
  ? `${Head}${Sep}${Join<Tail, Sep>}`
  : never;

type Joined = Join<["api", "v1", "users"], "/">; // "api/v1/users"
const path: Joined = "api/v1/users";
console.log("Type-level joined path:", path);
