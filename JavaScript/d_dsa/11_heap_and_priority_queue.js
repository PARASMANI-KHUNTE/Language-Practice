/**
 * DSA Topic 11: Min Heap Implementation
 */
class MinHeap {
  constructor() { this.heap = []; }
  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[i] >= this.heap[p]) break;
      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      i = p;
    }
  }
  pop() {
    if (this.heap.length === 0) return null;
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      let i = 0;
      while (i * 2 + 1 < this.heap.length) {
        let left = i * 2 + 1, right = i * 2 + 2, small = left;
        if (right < this.heap.length && this.heap[right] < this.heap[left]) small = right;
        if (this.heap[i] <= this.heap[small]) break;
        [this.heap[i], this.heap[small]] = [this.heap[small], this.heap[i]];
        i = small;
      }
    }
    return min;
  }
}

const h = new MinHeap();
[50, 30, 20, 15, 10].forEach(v => h.push(v));
console.log("Heap extracted minimums:", [h.pop(), h.pop(), h.pop()]);
