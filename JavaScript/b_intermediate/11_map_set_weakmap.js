/**
 * Topic: Modern Keyed Collections: Map, Set, WeakMap, WeakSet
 * Concepts Covered:
 *   - Map vs Plain Object (any key type, size property)
 *   - Set for unique value storage and set operations
 *   - WeakMap and WeakSet for garbage-collection friendly associations
 */

// Map
const metadataMap = new Map();
const userObj = { id: 1 };
metadataMap.set(userObj, { lastAccessed: Date.now(), accessCount: 5 });
console.log("Map size:", metadataMap.size);
console.log("User metadata:", metadataMap.get(userObj));

// Set
const tags = new Set(["tech", "javascript", "tech", "web"]);
tags.add("frontend");
console.log("Unique tags count:", tags.size);
console.log("Tags:", Array.from(tags));

// WeakMap (keys MUST be objects, does not prevent garbage collection)
const privateData = new WeakMap();
class Session {
  constructor(token) {
    privateData.set(this, { token });
  }
  getToken() {
    return privateData.get(this).token;
  }
}
const session = new Session("tok_secret_992");
console.log("Token from WeakMap:", session.getToken());
