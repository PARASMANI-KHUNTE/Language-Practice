/**
 * DSA Topic 05: Circular Queue
 */
class CircularQueue<T> {
  private queue: (T | null)[];
  private head = 0;
  private tail = 0;
  private count = 0;

  constructor(private capacity: number) {
    this.queue = new Array(capacity).fill(null);
  }

  enqueue(val: T): boolean {
    if (this.count === this.capacity) return false;
    this.queue[this.tail] = val;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
    return true;
  }

  dequeue(): T | null {
    if (this.count === 0) return null;
    const val = this.queue[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return val;
  }
}

const cq = new CircularQueue<string>(2);
cq.enqueue("First");
console.log("Dequeued:", cq.dequeue());
