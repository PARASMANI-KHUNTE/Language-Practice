"""
Topic: Modern Data Classes and Memory Optimization with __slots__
Concepts Covered:
  - @dataclass decorator (auto __init__, __repr__, __eq__)
  - default_factory for mutable field defaults
  - frozen dataclasses (immutability & hashability)
  - Reducing memory overhead using __slots__
"""

from dataclasses import dataclass, field
import sys

@dataclass(frozen=True)
class Coordinate:
    latitude: float
    longitude: float

@dataclass
class InventoryItem:
    sku: str
    price: float
    tags: list[str] = field(default_factory=list)

class RegularObject:
    def __init__(self, a, b):
        self.a = a
        self.b = b

class SlottedObject:
    __slots__ = ('a', 'b')
    def __init__(self, a, b):
        self.a = a
        self.b = b

if __name__ == "__main__":
    coord = Coordinate(37.7749, -122.4194)
    print("Frozen coordinate:", coord)

    item = InventoryItem("SKU-99", 24.50, ["electronics", "gaming"])
    print("Dataclass item:", item)

    reg = RegularObject(1, 2)
    slotted = SlottedObject(1, 2)
    print(f"Has __dict__: Regular={hasattr(reg, '__dict__')}, Slotted={hasattr(slotted, '__dict__')}")
