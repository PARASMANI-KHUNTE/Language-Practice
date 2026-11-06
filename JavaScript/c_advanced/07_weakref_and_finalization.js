/**
 * Topic: WeakRef and FinalizationRegistry (Memory Life-cycle)
 * Concepts Covered:
 *   - WeakRef: holding a weak reference without preventing GC
 *   - FinalizationRegistry: cleanup callbacks upon garbage collection
 */

let targetObject = { name: "Ephemeral Resource", payload: new Array(1000).fill(1) };
const weakReference = new WeakRef(targetObject);

const registry = new FinalizationRegistry(heldValue => {
  console.log(`[GC Notification] Cleaned up resource tagged: ${heldValue}`);
});

registry.register(targetObject, "session_cache_token");

console.log("Dereferencing WeakRef:", weakReference.deref()?.name);
// deref() returns undefined once object is garbage collected
