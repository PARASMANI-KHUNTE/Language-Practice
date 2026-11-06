/**
 * DSA Topic 03: Generic Doubly Linked List
 */
class DNode<T> {
  prev: DNode<T> | null = null;
  next: DNode<T> | null = null;
  constructor(public val: T) {}
}

class DoublyLinkedList<T> {
  head: DNode<T> | null = null;
  tail: DNode<T> | null = null;

  append(val: T): void {
    const node = new DNode(val);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
}

const dll = new DoublyLinkedList<string>();
dll.append("A"); dll.append("B");
console.log("Head:", dll.head?.val, "Tail:", dll.tail?.val);
