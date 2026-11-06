/**
 * Topic: Web Workers and Worker Threads Architecture
 * Concepts Covered:
 *   - Offloading CPU-bound tasks off the main thread
 *   - postMessage and onmessage event interfaces
 *   - Structured clone algorithm across thread boundaries
 */

const workerTaskContract = {
  task: "COMPUTE_PRIME_FACTORS",
  inputData: 987654321
};

console.log("Worker Contract Payload:", workerTaskContract);
console.log("Worker execution runs in an isolated global context without DOM access.");
