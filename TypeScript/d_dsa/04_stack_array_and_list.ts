/**
 * DSA Topic 04: Generic Stack
 */
class Stack<T> {
  private items: T[] = [];
  push(item: T): void { this.items.push(item); }
  pop(): T | undefined { return this.items.pop(); }
  peek(): T | undefined { return this.items[this.items.length - 1]; }
  isEmpty(): boolean { return this.items.length === 0; }
}

const stack = new Stack<number>();
stack.push(10); stack.push(20);
console.log("Popped:", stack.pop());
