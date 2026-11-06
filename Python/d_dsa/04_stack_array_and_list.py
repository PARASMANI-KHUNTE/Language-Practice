"""
DSA Topic 04: Stack Data Structure (LIFO)
Concepts Covered:
  - Stack implementation with push, pop, peek, is_empty, size
  - Application: Validating balanced brackets/parentheses
  - Application: Evaluating Postfix (Reverse Polish Notation) expressions
"""

class Stack:
    def __init__(self):
        self._items = []

    def push(self, item):
        self._items.append(item)

    def pop(self):
        if self.is_empty():
            raise IndexError("pop from empty stack")
        return self._items.pop()

    def peek(self):
        if self.is_empty():
            raise IndexError("peek from empty stack")
        return self._items[-1]

    def is_empty(self) -> bool:
        return len(self._items) == 0

    def size(self) -> int:
        return len(self._items)

def is_balanced_parentheses(s: str) -> bool:
    stack = Stack()
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping.values():
            stack.push(char)
        elif char in mapping:
            if stack.is_empty() or stack.pop() != mapping[char]:
                return False
    return stack.is_empty()

if __name__ == "__main__":
    st = Stack()
    st.push(10)
    st.push(20)
    print("Peek:", st.peek())
    print("Popped:", st.pop())

    tests = ["{[()]}", "{[(])}", "(())"]
    for t in tests:
        print(f"'{t}' is balanced? -> {is_balanced_parentheses(t)}")
