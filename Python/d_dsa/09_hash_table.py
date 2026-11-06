"""
DSA Topic 09: Hash Table with Separate Chaining
Concepts Covered:
  - Hash function implementation
  - Fixed-size bucket array
  - Collision resolution using chained linked lists
  - Insert, Get, and Remove operations
"""

class HashTable:
    def __init__(self, size: int = 10):
        self.size = size
        self.buckets = [[] for _ in range(size)]

    def _hash(self, key: str) -> int:
        return hash(key) % self.size

    def put(self, key: str, value):
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.buckets[idx]):
            if k == key:
                self.buckets[idx][i] = (key, value)
                return
        self.buckets[idx].append((key, value))

    def get(self, key: str):
        idx = self._hash(key)
        for k, v in self.buckets[idx]:
            if k == key:
                return v
        return None

    def remove(self, key: str) -> bool:
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.buckets[idx]):
            if k == key:
                del self.buckets[idx][i]
                return True
        return False

if __name__ == "__main__":
    ht = HashTable(5)
    ht.put("host", "127.0.0.1")
    ht.put("port", 8080)
    ht.put("user", "admin")
    print("Get 'port':", ht.get("port"))
    ht.remove("port")
    print("Get 'port' after delete:", ht.get("port"))
