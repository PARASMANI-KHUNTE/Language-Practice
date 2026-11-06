"""
Topic: Static Typing, Generics, and Structural Subtyping (Protocols)
Concepts Covered:
  - Type hints, TypeVar, Generic classes
  - Structural subtyping via typing.Protocol (Static Duck Typing)
  - Literal, Union, Optional, Any, Callable
  - typing.overload for polymorphic signatures
"""

from typing import TypeVar, Generic, Protocol, runtime_checkable

T = TypeVar("T")

class Stack(Generic[T]):
    """Generic Stack data structure."""
    def __init__(self):
        self._items: list[T] = []

    def push(self, item: T) -> None:
        self._items.append(item)

    def pop(self) -> T:
        return self._items.pop()

@runtime_checkable
class Renderable(Protocol):
    """Any object with a render() returning string satisfies this protocol."""
    def render(self) -> str:
        ...

class Widget:
    def render(self) -> str:
        return "<div>Rendered Widget</div>"

def display(item: Renderable) -> None:
    print(item.render())

if __name__ == "__main__":
    int_stack = Stack[int]()
    int_stack.push(10)
    int_stack.push(20)
    print("Popped from int stack:", int_stack.pop())

    w = Widget()
    print("Widget satisfies Renderable protocol:", isinstance(w, Renderable))
    display(w)
