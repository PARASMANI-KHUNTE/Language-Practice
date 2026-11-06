/**
 * Topic: Advanced Generics in TypeScript
 * Concepts Covered:
 *   - Generic constraints with `extends`
 *   - Default type parameters
 *   - Generic classes and interfaces
 *   - Using `keyof` inside generic constraints
 */

interface Identifiable {
  id: string | number;
}

// Constrained generic function
function findById<T extends Identifiable>(items: T[], targetId: string | number): T | undefined {
  return items.find(item => item.id === targetId);
}

// Generic Key Extractor
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Generic Repository Class with default parameter
class DataStore<T = Record<string, unknown>> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): ReadonlyArray<T> {
    return this.items;
  }
}

const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const found = findById(users, 2);
console.log("Found User:", found);

const userName = getProperty(users[0], "name");
console.log("Extracted Name:", userName);
