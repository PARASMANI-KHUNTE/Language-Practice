/**
 * DSA Topic 09: Hash Table with Separate Chaining
 */
class HashTable {
  constructor(size = 8) {
    this.buckets = Array.from({ length: size }, () => []);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash = (hash << 5) - hash + key.charCodeAt(i);
    return Math.abs(hash) % this.buckets.length;
  }
  set(key, value) {
    const bucket = this.buckets[this._hash(key)];
    const entry = bucket.find(([k]) => k === key);
    if (entry) entry[1] = value;
    else bucket.push([key, value]);
  }
  get(key) {
    const entry = this.buckets[this._hash(key)].find(([k]) => k === key);
    return entry ? entry[1] : undefined;
  }
}

const ht = new HashTable();
ht.set("host", "localhost");
ht.set("port", 3000);
console.log("Host:", ht.get("host"), "Port:", ht.get("port"));
