"""
DSA Topic 03: Doubly Linked List
Concepts Covered:
  - Bidirectional Node with prev and next pointers
  - Append, Prepend, and O(1) removal of nodes
  - Forward and Backward traversal
"""

class DNode:
    def __init__(self, val, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, val):
        new_node = DNode(val, prev=self.tail)
        if not self.tail:
            self.head = self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node

    def prepend(self, val):
        new_node = DNode(val, next=self.head)
        if not self.head:
            self.head = self.tail = new_node
        else:
            self.head.prev = new_node
            self.head = new_node

    def forward_traversal(self) -> list:
        res = []
        curr = self.head
        while curr:
            res.append(curr.val)
            curr = curr.next
        return res

    def backward_traversal(self) -> list:
        res = []
        curr = self.tail
        while curr:
            res.append(curr.val)
            curr = curr.prev
        return res

if __name__ == "__main__":
    dll = DoublyLinkedList()
    dll.append("B")
    dll.append("C")
    dll.prepend("A")
    print("Forward:", dll.forward_traversal())
    print("Backward:", dll.backward_traversal())
