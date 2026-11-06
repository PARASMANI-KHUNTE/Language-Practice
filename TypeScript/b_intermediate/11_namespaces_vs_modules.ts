/**
 * Topic: Namespaces vs ES Modules
 * Concepts Covered:
 *   - Internal modules (namespaces)
 *   - External modules (ES modules import/export)
 *   - When to use namespaces (d.ts files, grouping legacy APIs)
 */

namespace Validation {
  const lettersRegex = /^[A-Za-z]+$/;

  export function isAlpha(text: string): boolean {
    return lettersRegex.test(text);
  }
}

console.log("Is Alpha:", Validation.isAlpha("TypeScript"));
console.log("Is Alpha:", Validation.isAlpha("TypeScript123"));
