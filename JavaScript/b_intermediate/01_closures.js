/**
 * Topic: Closures in JavaScript
 * Concepts Covered:
 *   - Lexical scoping & closure formation
 *   - Encapsulation and private variables
 *   - Memoization / caching pattern via closures
 */

function createCounter(initialValue = 0) {
  let count = initialValue; // Private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counter = createCounter(10);
console.log("Count:", counter.increment()); // 11
console.log("Count:", counter.increment()); // 12
console.log("Current Value:", counter.getValue()); // 12

// Memoization with closures
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log(`[Cache Hit] for ${key}`);
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const slowSquare = n => {
  let sum = 0;
  for (let i = 0; i < 10000; i++) sum += n;
  return n * n;
};

const fastSquare = memoize(slowSquare);
console.log("Computed:", fastSquare(15));
console.log("Cached:", fastSquare(15));
