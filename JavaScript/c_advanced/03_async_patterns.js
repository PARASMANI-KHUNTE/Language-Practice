/**
 * Topic: Advanced Async Patterns: Async Iteration & Generators
 * Concepts Covered:
 *   - Symbol.asyncIterator
 *   - async function* (Async Generators)
 *   - for-await-of loops
 */

async function* asyncNumberStream(max) {
  for (let i = 1; i <= max; i++) {
    await new Promise(r => setTimeout(r, 10));
    yield i * 10;
  }
}

async function runAsyncStream() {
  console.log("Consuming async generator stream:");
  for await (const num of asyncNumberStream(4)) {
    console.log("Stream yielded:", num);
  }
}

runAsyncStream();
