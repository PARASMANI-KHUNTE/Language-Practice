"""
DSA Topic 02: Singly Linked List
Concepts Covered:
  - Node definition
  - Append, Prepend, Insert at Index, Delete by Value
  - Reversing a linked list (Iterative)
  - Cycle detection using Floyd's Tortoise and Hare algorithm
"""

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def prepend(self, val):
        new_node = ListNode(val, self.head)
        self.head = new_node

    def append(self, val):
        new_node = ListNode(val)
        if not self.head:
            self.head = new_node
            return
        curr = self.head
        while curr.next:
            curr = curr.next
        curr.next = new_node

    def delete(self, val):
        if not self.head:
            return
        if self.head.val == val:
            self.head = self.head.next
            return
        curr = self.head
        while curr.next and curr.next.val != val:
            curr = curr.next
        if curr.next:
            curr.next = curr.next.next

    def reverse(self):
        prev = None
        curr = self.head
        while curr:
            next_node = curr.next
            curr.next = prev
            prev = curr
            curr = next_node
        self.head = prev

    def to_list(self) -> list:
        result = []
        curr = self.head
        while curr:
            result.append(curr.val)
            curr = curr.next
        return result

def has_cycle(head: ListNode | None) -> bool:
    """Floyd's Cycle Detection Algorithm (Tortoise & Hare)."""
    slow, fast = head, head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow == fast:
            return True
    return False

if __name__ == "__main__":
    sll = SinglyLinkedList()
    for v in [10, 20, 30, 40]:
        sll.append(v)
    sll.prepend(5)
    print("List:", sll.to_list())

    sll.delete(20)
    print("After deleting 20:", sll.to_list())

    sll.reverse()
    print("Reversed List:", sll.to_list())
