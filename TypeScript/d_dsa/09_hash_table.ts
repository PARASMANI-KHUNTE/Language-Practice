/**
 * DSA Topic 09: Generic Hash Table
 */
class HashTable<K extends string, V> {
  private buckets: Array<Array<[K, V]>> = Array.from({ length: 16 }, () => []);

  private hash(key: string): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) h = (h << 5) - h + key.charCodeAt(i);
    return Math.abs(h) % this.buckets.length;
  }

  set(key: K, value: V): void {
    const b = this.buckets[this.hash(key)];
    const entry = b.find(([k]) => k === key);
    if (entry) entry[1] = value;
    else b.push([key, value]);
  }

  get(key: K): V | undefined {
    return this.buckets[this.hash(key)].find(([k]) => k === key)?.[1];
  }
}

const ht = new HashTable<string, number>();
ht.set("alpha", 1);
console.log("Alpha:", ht.get("alpha"));
