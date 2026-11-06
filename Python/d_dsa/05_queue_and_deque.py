"""
DSA Topic 05: Queue (FIFO) and Circular Deque
Concepts Covered:
  - Standard FIFO Queue implementation
  - Circular Queue with fixed array to prevent memory drift
  - Double-Ended Queue (Deque) operations (appendleft, popleft)
"""

class CircularQueue:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.head = 0
        self.tail = 0
        self.count = 0

    def enqueue(self, val) -> bool:
        if self.is_full():
            return False
        self.queue[self.tail] = val
        self.tail = (self.tail + 1) % self.capacity
        self.count += 1
        return True

    def dequeue(self):
        if self.is_empty():
            return None
        val = self.queue[self.head]
        self.queue[self.head] = None
        self.head = (self.head + 1) % self.capacity
        self.count -= 1
        return val

    def is_empty(self) -> bool:
        return self.count == 0

    def is_full(self) -> bool:
        return self.count == self.capacity

if __name__ == "__main__":
    cq = CircularQueue(3)
    cq.enqueue("A")
    cq.enqueue("B")
    cq.enqueue("C")
    print("Enqueue on full (returns False):", cq.enqueue("D"))
    print("Dequeued:", cq.dequeue())
    cq.enqueue("D")  # Wraps around circular buffer!
    print("Dequeued:", cq.dequeue())
    print("Dequeued:", cq.dequeue())
    print("Dequeued:", cq.dequeue())
