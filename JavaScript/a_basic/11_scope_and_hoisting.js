/**
 * Topic: Variable Scope and Hoisting
 * Concepts Covered:
 *   - Global, Function, and Block scopes
 *   - var vs let vs const
 *   - Hoisting mechanics and Temporal Dead Zone (TDZ)
 */

// Global Scope
var globalVar = "I am global var";
let globalLet = "I am global let";

function scopeTest() {
  // Function Scope
  var funcVar = "Function scoped";

  if (true) {
    // Block Scope
    let blockLet = "Block scoped (let)";
    const blockConst = "Block scoped (const)";
    var leakedVar = "var escapes block scope!";
    console.log("Inside block:", blockLet, blockConst);
  }

  console.log("Accessible outside block:", leakedVar);
  // console.log(blockLet); // ReferenceError: blockLet is not defined
}

scopeTest();

// Hoisting Demonstration
console.log("Hoisted var value before assignment:", hoistedVar); // undefined
var hoistedVar = "Assigned now";

// let and const are in Temporal Dead Zone (TDZ) until declaration is evaluated
