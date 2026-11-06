/**
 * Topic: Strict Compiler Flags and Defensive Typing
 * Concepts Covered:
 *   - strictNullChecks and non-null assertions (!)
 *   - noImplicitAny
 *   - Exhaustiveness checking using `never`
 */

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

function computeArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.width * shape.height;
    default: {
      // Exhaustive check: if a new Shape is added, TypeScript causes a compile error here
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
    }
  }
}

console.log("Circle area:", computeArea({ kind: "circle", radius: 5 }).toFixed(2));
