/**
 * Topic: Function and Method Overloading
 * Concepts Covered:
 *   - Overload signatures vs Implementation signature
 *   - Handling varying argument counts and return types
 *   - Polymorphic method signatures
 */

function formatValue(value: string): string;
function formatValue(value: number, decimals: number): string;
function formatValue(value: boolean): "YES" | "NO";
function formatValue(value: string | number | boolean, decimals = 2): string {
  if (typeof value === "string") {
    return value.trim();
  }
  if (typeof value === "number") {
    return value.toFixed(decimals);
  }
  return value ? "YES" : "NO";
}

console.log("Formatted str:", formatValue("  sample text  "));
console.log("Formatted num:", formatValue(45.6789, 2));
console.log("Formatted bool:", formatValue(true));
