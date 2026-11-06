"""
DSA Topic 11: Binary Heap and Priority Queue
Concepts Covered:
  - Min Heap property and array representation (parent = (i-1)//2, left = 2i+1, right = 2i+2)
  - Bubble Up (shift-up) on insert
  - Bubble Down (shift-down) on extract_min
  - O(log n) insertions and extractions
"""

class MinHeap:
    def __init__(self):
        self.heap = []

    def push(self, val: int):
        self.heap.append(val)
        self._bubble_up(len(self.heap) - 1)

    def pop(self) -> int:
        if not self.heap:
            raise IndexError("Heap is empty")
        root = self.heap[0]
        last = self.heap.pop()
        if self.heap:
            self.heap[0] = last
            self._bubble_down(0)
        return root

    def _bubble_up(self, idx: int):
        parent = (idx - 1) // 2
        while idx > 0 and self.heap[idx] < self.heap[parent]:
            self.heap[idx], self.heap[parent] = self.heap[parent], self.heap[idx]
            idx = parent
            parent = (idx - 1) // 2

    def _bubble_down(self, idx: int):
        n = len(self.heap)
        smallest = idx
        left = 2 * idx + 1
        right = 2 * idx + 2
        if left < n and self.heap[left] < self.heap[smallest]:
            smallest = left
        if right < n and self.heap[right] < self.heap[smallest]:
            smallest = right
        if smallest != idx:
            self.heap[idx], self.heap[smallest] = self.heap[smallest], self.heap[idx]
            self._bubble_down(smallest)

if __name__ == "__main__":
    h = MinHeap()
    for num in [40, 10, 30, 5, 20]:
        h.push(num)
    print("Extracted mins in priority order:")
    while h.heap:
        print(h.pop(), end=" ")
    print()
