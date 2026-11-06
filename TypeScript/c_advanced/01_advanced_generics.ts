/**
 * Topic: Higher-Kinded Types Simulation and Generic Currying
 * Concepts Covered:
 *   - Type-level currying
 *   - Simulating Higher-Kinded Types (HKT) via URI lightweight dictionaries
 *   - Recursive generic constraints
 */

// Lightweight HKT pattern
interface HKT<URI, A> {
  readonly _URI: URI;
  readonly _A: A;
}

interface ArrayURI {
  readonly type: unknown[];
}

type Apply<F, A> = F extends { readonly type: unknown[] } ? A[] : never;

type StringArray = Apply<ArrayURI, string>; // string[]
const sample: StringArray = ["hello", "typescript"];
console.log("HKT Simulation:", sample);
