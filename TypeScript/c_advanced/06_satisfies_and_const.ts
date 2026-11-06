/**
 * Topic: The `satisfies` Operator and `as const` Assertions
 * Concepts Covered:
 *   - Validating type conformity without widening type inference
 *   - const type parameters in functions (TS 5.0+)
 *   - Literal tuple preservation
 */

type ColorRGB = [red: number, green: number, blue: number];
type Color = string | ColorRGB;

const palette = {
  primary: "#1e90ff",
  secondary: [255, 99, 71]
} satisfies Record<string, Color>;

// palette.primary is specifically inferred as string, so string methods are immediately available!
console.log("Primary uppercase:", palette.primary.toUpperCase());

// Const type parameters
function createTuple<const T extends readonly unknown[]>(...args: T): T {
  return args;
}

const t = createTuple(1, "two", true); // Inferred as readonly [1, "two", true]
