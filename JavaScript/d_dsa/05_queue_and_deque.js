/**
 * DSA Topic 05: Circular Queue in JavaScript
 */
class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.capacity = size;
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }
  enqueue(val) {
    if (this.count === this.capacity) return false;
    this.queue[this.tail] = val;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
    return true;
  }
  dequeue() {
    if (this.count === 0) return null;
    const val = this.queue[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return val;
  }
}

const cq = new CircularQueue(3);
cq.enqueue(1); cq.enqueue(2); cq.enqueue(3);
console.log("Dequeued:", cq.dequeue());
cq.enqueue(4);
console.log("Dequeued after circular wrap:", cq.dequeue());
