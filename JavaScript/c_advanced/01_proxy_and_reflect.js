/**
 * Topic: Metaprogramming with Proxy and Reflect API
 * Concepts Covered:
 *   - Proxy traps: get, set, has, deleteProperty
 *   - Reflect API counterpart methods
 *   - Schema validation and reactive state tracking
 */

const state = { count: 0, user: "admin" };

const reactiveState = new Proxy(state, {
  get(target, prop, receiver) {
    console.log(`[Proxy GET] reading property: ${String(prop)}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (prop === "count" && typeof value !== "number") {
      throw new TypeError("Count must be a number");
    }
    console.log(`[Proxy SET] setting property: ${String(prop)} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
});

reactiveState.count = 42;
console.log("Read via proxy:", reactiveState.count);
