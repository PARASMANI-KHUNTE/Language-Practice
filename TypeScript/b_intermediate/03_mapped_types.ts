/**
 * Topic: Mapped Types & Key Remapping
 * Concepts Covered:
 *   - Basic mapped types syntax: [K in keyof T]
 *   - Mapping modifiers (+, -, readonly, ?)
 *   - Key remapping using `as` clause
 *   - Filtering keys with `as ... extends ... ? ... : never`
 */

interface User {
  id: string;
  name: string;
  age: number;
  email: string;
}

// Custom Readonly and Nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

// Key remapping: Prefixing getters
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;
// UserGetters has: getId, getName, getAge, getEmail

// Filtering keys to only string-typed fields
type OnlyStringFields<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type UserStringProps = OnlyStringFields<User>; // id, name, email
