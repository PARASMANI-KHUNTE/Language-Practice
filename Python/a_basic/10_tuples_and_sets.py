# ============================================================
# Topic: Tuples and Sets
# Key Concepts: Immutability, tuple packing/unpacking, set operations
# ============================================================

# ===================== TUPLES =====================

# --- 1. Creating tuples ---
# Tuples are ordered, immutable sequences.
empty_tuple = ()
single = (42,)                    # NOTE: trailing comma is required for single-element tuple!
not_a_tuple = (42)                # This is just an int in parentheses
numbers = (1, 2, 3, 4, 5)
mixed = (1, "hello", 3.14, True)
nested = ((1, 2), (3, 4))
from_list = tuple([10, 20, 30])

print(f"single: {single}, type: {type(single)}")
print(f"not_a_tuple: {not_a_tuple}, type: {type(not_a_tuple)}")
print(f"numbers: {numbers}")

# --- 2. Indexing and slicing (same as lists) ---
print(f"\n--- Tuple Indexing/Slicing ---")
t = (10, 20, 30, 40, 50)
print(f"t[0]:    {t[0]}")       # 10
print(f"t[-1]:   {t[-1]}")      # 50
print(f"t[1:4]:  {t[1:4]}")     # (20, 30, 40)
print(f"t[::-1]: {t[::-1]}")    # (50, 40, 30, 20, 10)

# --- 3. Immutability ---
# Tuples cannot be modified after creation.
# t[0] = 99  # TypeError: 'tuple' object does not support item assignment
# However, if a tuple contains a mutable object, THAT object can change:
mutable_inside = ([1, 2], [3, 4])
mutable_inside[0].append(99)
print(f"Mutable inside tuple: {mutable_inside}")   # ([1, 2, 99], [3, 4])

# --- 4. Tuple methods ---
t = (1, 2, 3, 2, 4, 2)
print(f"\n--- Tuple Methods ---")
print(f"count(2): {t.count(2)}")    # 3
print(f"index(3): {t.index(3)}")    # 2 (first occurrence)

# --- 5. Tuple packing and unpacking ---
print(f"\n--- Packing / Unpacking ---")
# Packing
coords = 10, 20, 30               # Parentheses optional
print(f"Packed: {coords}")

# Unpacking
x, y, z = coords
print(f"Unpacked: x={x}, y={y}, z={z}")

# Swapping with tuples
a, b = 1, 2
a, b = b, a
print(f"Swapped: a={a}, b={b}")

# Extended unpacking
first, *rest = (1, 2, 3, 4, 5)
print(f"first={first}, rest={rest}")   # first=1, rest=[2, 3, 4, 5]

# --- 6. Tuples as dictionary keys ---
# Since tuples are immutable (hashable), they can be dict keys
locations = {(40.7, -74.0): "New York", (51.5, -0.1): "London"}
print(f"\nTuple as key: {locations[(40.7, -74.0)]}")

# --- 7. Named tuples (preview) ---
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(3, 4)
print(f"\nNamedTuple: {p}, x={p.x}, y={p.y}")

# --- 8. Tuple vs List performance ---
import sys
list_size = sys.getsizeof([1, 2, 3, 4, 5])
tuple_size = sys.getsizeof((1, 2, 3, 4, 5))
print(f"\nList size:  {list_size} bytes")
print(f"Tuple size: {tuple_size} bytes")    # Tuples are slightly smaller

# ===================== SETS =====================

print("\n" + "=" * 50)
print("SETS")
print("=" * 50)

# --- 9. Creating sets ---
# Sets are unordered collections of UNIQUE elements.
empty_set = set()           # NOTE: {} creates an empty dict, not a set!
numbers = {1, 2, 3, 4, 5}
from_list = set([1, 2, 2, 3, 3, 3])   # Duplicates removed
print(f"\nfrom_list: {from_list}")      # {1, 2, 3}

# --- 10. Set operations — Add/Remove ---
print(f"\n--- Set Add/Remove ---")
s = {1, 2, 3}
s.add(4)                    # Add one element
print(f"add(4):      {s}")
s.update([5, 6, 7])         # Add multiple elements
print(f"update:      {s}")
s.remove(7)                 # Remove element (raises KeyError if not found)
print(f"remove(7):   {s}")
s.discard(99)               # Remove if present (no error if not found)
print(f"discard(99): {s}")
popped = s.pop()            # Remove and return an arbitrary element
print(f"pop():       {s}, popped: {popped}")

# --- 11. Set operations — Mathematical ---
print(f"\n--- Set Math Operations ---")
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}
print(f"A = {A}")
print(f"B = {B}")
print(f"Union (A | B):        {A | B}")            # {1,2,3,4,5,6,7,8}
print(f"Intersection (A & B): {A & B}")            # {4, 5}
print(f"Difference (A - B):   {A - B}")            # {1, 2, 3}
print(f"Difference (B - A):   {B - A}")            # {6, 7, 8}
print(f"Sym. Diff (A ^ B):    {A ^ B}")            # {1, 2, 3, 6, 7, 8}

# Method equivalents
print(f"A.union(B):              {A.union(B)}")
print(f"A.intersection(B):      {A.intersection(B)}")
print(f"A.difference(B):        {A.difference(B)}")
print(f"A.symmetric_difference: {A.symmetric_difference(B)}")

# --- 12. Subset and superset ---
print(f"\n--- Subset / Superset ---")
C = {1, 2}
D = {1, 2, 3, 4, 5}
print(f"C = {C}, D = {D}")
print(f"C <= D (subset):   {C <= D}")        # True
print(f"C.issubset(D):     {C.issubset(D)}") # True
print(f"D >= C (superset): {D >= C}")        # True
print(f"C.isdisjoint({{6,7}}): {C.isdisjoint({6, 7})}")  # True

# --- 13. Set comprehensions ---
print(f"\n--- Set Comprehension ---")
squares = {x**2 for x in range(1, 6)}
print(f"Squares set: {squares}")              # {1, 4, 9, 16, 25}

# Remove duplicates from a list while preserving some order
data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
unique = list(dict.fromkeys(data))   # preserves order (Python 3.7+)
print(f"Unique (ordered): {unique}")

# --- 14. Frozen sets (immutable sets) ---
fs = frozenset([1, 2, 3, 4])
# fs.add(5)  # AttributeError: 'frozenset' does not support add
print(f"\nFrozenset: {fs}")
# Can be used as dictionary keys or set elements
set_of_sets = {frozenset([1, 2]), frozenset([3, 4])}
print(f"Set of frozensets: {set_of_sets}")

# --- 15. Practical: Remove duplicates ---
print(f"\n--- Practical: Unique Words ---")
sentence = "the cat sat on the mat the cat"
words = sentence.split()
unique_words = set(words)
print(f"Words: {words}")
print(f"Unique: {unique_words}")
print(f"Count: {len(words)} total, {len(unique_words)} unique")

print("\n--- Practice Complete: Tuples and Sets ---")
