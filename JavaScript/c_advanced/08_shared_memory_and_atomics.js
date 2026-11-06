/**
 * Topic: Shared Memory and Atomics
 * Concepts Covered:
 *   - SharedArrayBuffer for thread/worker shared memory
 *   - Atomics operations (add, load, store, wait, notify)
 *   - Thread-safe memory mutations
 */

// Allocate 4 bytes of shared memory
const sharedBuffer = new SharedArrayBuffer(4);
const sharedInt32 = new Int32Array(sharedBuffer);

// Atomic addition ensures race-condition free mutation
Atomics.store(sharedInt32, 0, 100);
const oldVal = Atomics.add(sharedInt32, 0, 25);

console.log(`Previous Value: ${oldVal}, New Value: ${Atomics.load(sharedInt32, 0)}`);
