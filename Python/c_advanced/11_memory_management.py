"""
Topic: Python Memory Management, Garbage Collection, and Weak References
Concepts Covered:
  - Reference counting mechanism (sys.getrefcount)
  - Cyclic references and generational garbage collection (gc module)
  - Preventing memory leaks with `weakref`
  - Object sizing with `sys.getsizeof`
"""

import sys
import gc
import weakref

class LargeCacheNode:
    def __init__(self, key: str):
        self.key = key

if __name__ == "__main__":
    node = LargeCacheNode("SESSION_TOKEN_12345")
    # Reference counting
    print("Refcount (includes temp getrefcount arg):", sys.getrefcount(node))

    # Weak references do not prevent garbage collection
    weak_node = weakref.ref(node)
    print("Weakref dereferenced:", weak_node().key)

    del node
    print("After node deleted, weakref is alive?", weak_node() is not None)

    # Inspect garbage collector
    print("Garbage collector enabled?", gc.isenabled())
