/**
 * Topic: TypeScript Compiler Performance & Instantiation Limits
 * Concepts Covered:
 *   - Avoiding excessive type recursion and union explosion
 *   - Interface caching vs Type Alias evaluation
 *   - Diagnosing compilation bottlenecks
 */

// Prefer interfaces for public API boundaries for faster compiler caching
interface FastEntity {
  id: string;
  createdAt: number;
}

// Flat unions are faster for TypeScript than deeply nested conditionals
type FastAction =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: unknown }
  | { type: "FETCH_ERROR"; error: string };

function handleAction(action: FastAction) {
  console.log("Handling action type:", action.type);
}

handleAction({ type: "FETCH_START" });
