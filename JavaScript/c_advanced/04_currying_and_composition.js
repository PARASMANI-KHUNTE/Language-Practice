/**
 * Topic: Functional Programming: Currying and Function Composition
 * Concepts Covered:
 *   - Currying functions
 *   - compose and pipe utilities
 *   - Point-free style
 */

const curry = fn => {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return (...nextArgs) => curried.apply(this, args.concat(nextArgs));
  };
};

const multiplyThree = (a, b, c) => a * b * c;
const curriedMult = curry(multiplyThree);
console.log("Curried call:", curriedMult(2)(3)(4));

// Pipe: left to right execution
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const trim = s => s.trim();
const uppercase = s => s.toUpperCase();
const exclaim = s => `${s}!!!`;

const shout = pipe(trim, uppercase, exclaim);
console.log(shout("   functional programming   "));
