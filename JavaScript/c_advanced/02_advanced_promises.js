/**
 * Topic: Advanced Promise Combinators & Custom Promisify
 * Concepts Covered:
 *   - Promise.all vs Promise.allSettled vs Promise.race vs Promise.any
 *   - Converting callback-based functions into promises (promisify)
 */

const p1 = Promise.resolve("Success Alpha");
const p2 = Promise.reject(new Error("Failure Beta"));
const p3 = new Promise(res => setTimeout(() => res("Slow Gamma"), 20));

Promise.allSettled([p1, p2, p3]).then(results => {
  console.log("allSettled Results:");
  results.forEach((r, idx) => {
    console.log(`  #${idx + 1}: status=${r.status}, value/reason=${r.value || r.reason.message}`);
  });
});

// Custom Promisify
function promisify(callbackFn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      callbackFn(...args, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  };
}
