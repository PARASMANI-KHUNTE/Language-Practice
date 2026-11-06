# ============================================================
# Topic: Dictionaries
# Key Concepts: CRUD, iteration, methods, dict comprehension
# ============================================================

# --- 1. Creating dictionaries ---
# Dictionaries store key-value pairs. Keys must be hashable (immutable).
empty = {}
person = {"name": "Alice", "age": 30, "city": "NYC"}
from_constructor = dict(name="Bob", age=25)
from_pairs = dict([("a", 1), ("b", 2), ("c", 3)])
from_keys = dict.fromkeys(["x", "y", "z"], 0)    # All values set to 0

print(f"person: {person}")
print(f"from_constructor: {from_constructor}")
print(f"from_keys: {from_keys}")

# --- 2. Accessing values ---
print(f"\n--- Access ---")
print(f"person['name']: {person['name']}")         # Alice
# person['email']  # KeyError if key doesn't exist!

# get() — safe access with optional default
print(f"get('name'): {person.get('name')}")         # Alice
print(f"get('email'): {person.get('email')}")       # None (no error)
print(f"get('email', 'N/A'): {person.get('email', 'N/A')}")  # N/A

# --- 3. Adding and updating ---
print(f"\n--- Add / Update ---")
person["email"] = "alice@email.com"    # Add new key
person["age"] = 31                      # Update existing key
print(f"After update: {person}")

# update() — merge another dict or key-value pairs
person.update({"city": "LA", "phone": "555-1234"})
print(f"After update(): {person}")

# Merge operator |= (Python 3.9+)
person |= {"country": "US"}
print(f"After |=: {person}")

# --- 4. Removing entries ---
print(f"\n--- Remove ---")
# pop() — remove and return value
phone = person.pop("phone")
print(f"pop('phone'): {phone}, dict: {person}")

# pop() with default (no error if missing)
missing = person.pop("nonexistent", "default_val")
print(f"pop missing: {missing}")

# del — delete a key
del person["country"]
print(f"After del: {person}")

# popitem() — remove and return last inserted pair
last = person.popitem()
print(f"popitem(): {last}")

# clear() — remove all entries
temp = {"a": 1, "b": 2}
temp.clear()
print(f"clear(): {temp}")

# --- 5. Checking membership ---
print(f"\n--- Membership ---")
person = {"name": "Alice", "age": 30}
print(f"'name' in person: {'name' in person}")         # True
print(f"'email' in person: {'email' in person}")       # False
print(f"'Alice' in person: {'Alice' in person}")       # False (checks keys, not values)
print(f"'Alice' in person.values(): {'Alice' in person.values()}")  # True

# --- 6. Iteration ---
print(f"\n--- Iteration ---")
scores = {"Alice": 95, "Bob": 87, "Charlie": 92}

# Iterate over keys (default)
print("Keys:")
for key in scores:
    print(f"  {key}")

# Iterate over values
print("Values:")
for value in scores.values():
    print(f"  {value}")

# Iterate over key-value pairs
print("Items:")
for name, score in scores.items():
    print(f"  {name}: {score}")

# --- 7. Dictionary views ---
print(f"\n--- Views ---")
keys = scores.keys()
values = scores.values()
items = scores.items()
print(f"keys:   {list(keys)}")
print(f"values: {list(values)}")
print(f"items:  {list(items)}")

# --- 8. Dictionary methods ---
print(f"\n--- Useful Methods ---")
d = {"a": 1, "b": 2}

# setdefault — get value if exists, else set and return default
val = d.setdefault("c", 3)     # Key 'c' doesn't exist, so it's created
print(f"setdefault('c', 3): {val}, dict: {d}")

val = d.setdefault("a", 99)   # Key 'a' exists, value unchanged
print(f"setdefault('a', 99): {val}, dict: {d}")

# copy — shallow copy
d_copy = d.copy()
print(f"copy: {d_copy}")

# --- 9. Dict comprehension ---
print(f"\n--- Dict Comprehension ---")

# Basic
squares = {x: x**2 for x in range(1, 6)}
print(f"Squares: {squares}")   # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition
even_sq = {x: x**2 for x in range(1, 11) if x % 2 == 0}
print(f"Even squares: {even_sq}")

# Transforming keys/values
names = ["alice", "bob", "charlie"]
name_lengths = {name: len(name) for name in names}
print(f"Name lengths: {name_lengths}")

# Inverting a dictionary (swap keys and values)
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
print(f"Inverted: {inverted}")   # {1: 'a', 2: 'b', 3: 'c'}

# --- 10. Nested dictionaries ---
print(f"\n--- Nested Dicts ---")
students = {
    "alice": {"age": 20, "grade": "A"},
    "bob":   {"age": 22, "grade": "B"},
}
print(f"Alice's grade: {students['alice']['grade']}")

# Add nested entry
students["charlie"] = {"age": 21, "grade": "A"}
print(f"All students: {list(students.keys())}")

# --- 11. Merging dictionaries ---
print(f"\n--- Merging ---")
defaults = {"color": "red", "size": "medium", "weight": 10}
custom = {"color": "blue", "weight": 15}

# Method 1: ** unpacking
merged = {**defaults, **custom}     # custom values override defaults
print(f"Merged (**): {merged}")

# Method 2: | operator (Python 3.9+)
merged2 = defaults | custom
print(f"Merged (|):  {merged2}")

# --- 12. Sorting dictionaries ---
print(f"\n--- Sorting ---")
scores = {"Charlie": 92, "Alice": 95, "Bob": 87}

# Sort by key
by_key = dict(sorted(scores.items()))
print(f"By key:   {by_key}")

# Sort by value
by_val = dict(sorted(scores.items(), key=lambda item: item[1]))
print(f"By value: {by_val}")

# Sort by value descending
by_val_desc = dict(sorted(scores.items(), key=lambda item: item[1], reverse=True))
print(f"By value (desc): {by_val_desc}")

# --- 13. Practical: Word counter ---
print(f"\n--- Practical: Word Counter ---")
text = "the quick brown fox jumps over the lazy dog the fox"
word_count = {}
for word in text.split():
    word_count[word] = word_count.get(word, 0) + 1
print(f"Word counts: {word_count}")

print("\n--- Practice Complete: Dictionaries ---")
