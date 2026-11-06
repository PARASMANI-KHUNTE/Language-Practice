/**
 * Topic: Event Loop, Microtasks, and Macrotasks
 * Concepts Covered:
 *   - Call stack execution
 *   - Microtask queue (Promise.then, queueMicrotask)
 *   - Macrotask queue (setTimeout, setInterval, setImmediate)
 *   - Execution order explanation
 */

console.log("1. Synchronous log");

setTimeout(() => {
  console.log("4. Macrotask (setTimeout)");
}, 0);

Promise.resolve().then(() => {
  console.log("3. Microtask (Promise)");
});

queueMicrotask(() => {
  console.log("3b. Microtask (queueMicrotask)");
});

console.log("2. Synchronous log end");

// Expected Order: 1, 2, 3, 3b, 4
