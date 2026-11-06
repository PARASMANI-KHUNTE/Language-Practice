/**
 * Topic: Symbols and Well-Known Symbols
 * Concepts Covered:
 *   - Creating unique Symbols (Symbol("description"))
 *   - Global Symbol registry (Symbol.for, Symbol.keyFor)
 *   - Well-known symbols: Symbol.toPrimitive, Symbol.toStringTag
 */

const ID_KEY = Symbol("id");

const userRecord = {
  [ID_KEY]: "SEC-88219",
  name: "Sophia"
};

console.log("Symbol property:", userRecord[ID_KEY]);
// Symbols are not enumerated in standard Object.keys or JSON.stringify
console.log("Object.keys:", Object.keys(userRecord));

// Symbol.toPrimitive customization
const currency = {
  amount: 250,
  code: "USD",
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return this.amount;
    if (hint === "string") return `${this.amount} ${this.code}`;
    return this.amount;
  }
};

console.log("String hint:", `${currency}`);
console.log("Number hint:", +currency + 50);
