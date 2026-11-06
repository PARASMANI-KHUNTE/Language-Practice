/**
 * Topic: Promises and Asynchronous Foundations
 * Concepts Covered:
 *   - Promise lifecycle (pending, fulfilled, rejected)
 *   - Chaining .then, .catch, .finally
 *   - Promise combinators: Promise.all, Promise.race
 */

function simulateAsyncOperation(value, delayMs, shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`Operation failed on value: ${value}`));
      } else {
        resolve({ data: value, timestamp: Date.now() });
      }
    }, delayMs);
  });
}

simulateAsyncOperation("Task 1", 50)
  .then(res => {
    console.log("Step 1 Complete:", res.data);
    return simulateAsyncOperation("Task 2", 30);
  })
  .then(res => {
    console.log("Step 2 Complete:", res.data);
  })
  .catch(err => {
    console.error("Error in chain:", err.message);
  })
  .finally(() => {
    console.log("Promise pipeline finished.");
  });
