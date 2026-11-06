/**
 * DSA Topic 11: Min Heap
 */
class MinHeap {
  private heap: number[] = [];

  push(val: number): void {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[i] >= this.heap[p]) break;
      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      i = p;
    }
  }

  pop(): number | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0];
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
      // Bubble down
    }
    return min;
  }
}

const h = new MinHeap();
h.push(10); h.push(5);
console.log("Extracted min:", h.pop());
