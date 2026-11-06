/**
 * DSA Topic 03: Doubly Linked List in JavaScript
 */
class DNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(val) {
    const node = new DNode(val);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
  forward() {
    const res = [];
    let c = this.head;
    while (c) { res.push(c.val); c = c.next; }
    return res;
  }
}

const dll = new DoublyLinkedList();
dll.append("Alpha"); dll.append("Beta"); dll.append("Gamma");
console.log("Forward Traversal:", dll.forward());
