/**
 * DSA Topic 02: Singly Linked List in JavaScript
 */
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  append(val) {
    const node = new ListNode(val);
    if (!this.head) { this.head = node; return; }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = node;
  }
  reverse() {
    let prev = null, curr = this.head;
    while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  toArray() {
    const res = [];
    let curr = this.head;
    while (curr) { res.push(curr.val); curr = curr.next; }
    return res;
  }
}

const list = new SinglyLinkedList();
[10, 20, 30, 40].forEach(v => list.append(v));
console.log("Original List:", list.toArray());
list.reverse();
console.log("Reversed List:", list.toArray());
