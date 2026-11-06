/**
 * DSA Topic 02: Generic Singly Linked List
 */
class ListNode<T> {
  constructor(public val: T, public next: ListNode<T> | null = null) {}
}

class SinglyLinkedList<T> {
  head: ListNode<T> | null = null;

  append(val: T): void {
    const node = new ListNode(val);
    if (!this.head) { this.head = node; return; }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = node;
  }

  toArray(): T[] {
    const res: T[] = [];
    let curr = this.head;
    while (curr) { res.push(curr.val); curr = curr.next; }
    return res;
  }
}

const list = new SinglyLinkedList<number>();
list.append(100); list.append(200); list.append(300);
console.log("Linked List items:", list.toArray());
