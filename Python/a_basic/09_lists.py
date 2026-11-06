# ============================================================
# Topic: Lists
# Key Concepts: Create, index, slice, methods, list comprehension
# ============================================================

# --- 1. Creating lists ---
empty = []
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True, None]       # Can hold different types
nested = [[1, 2], [3, 4], [5, 6]]            # List of lists
from_range = list(range(1, 6))               # [1, 2, 3, 4, 5]
from_string = list("hello")                  # ['h', 'e', 'l', 'l', 'o']

print(f"numbers: {numbers}")
print(f"mixed:   {mixed}")
print(f"nested:  {nested}")

# --- 2. Indexing ---
fruits = ["apple", "banana", "cherry", "date", "elderberry"]
print(f"\n--- Indexing ---")
print(f"First:  {fruits[0]}")      # apple
print(f"Last:   {fruits[-1]}")     # elderberry
print(f"Second: {fruits[1]}")      # banana
print(f"Nested: {nested[1][0]}")   # 3

# --- 3. Slicing [start:stop:step] ---
print(f"\n--- Slicing ---")
nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(f"nums[2:5]:   {nums[2:5]}")      # [2, 3, 4]
print(f"nums[:3]:    {nums[:3]}")        # [0, 1, 2]
print(f"nums[7:]:    {nums[7:]}")        # [7, 8, 9]
print(f"nums[::2]:   {nums[::2]}")       # [0, 2, 4, 6, 8] (every 2nd)
print(f"nums[::-1]:  {nums[::-1]}")      # [9, 8, 7, ...] (reversed)
print(f"nums[1:8:2]: {nums[1:8:2]}")     # [1, 3, 5, 7]

# --- 4. Modifying lists (mutable!) ---
print(f"\n--- Modification ---")
colors = ["red", "green", "blue"]
colors[1] = "yellow"                     # Replace element
print(f"After replace: {colors}")        # ['red', 'yellow', 'blue']

colors[0:2] = ["pink", "purple", "orange"]  # Replace slice (can change size)
print(f"After slice replace: {colors}")

# --- 5. List methods ---
print(f"\n--- List Methods ---")
lst = [3, 1, 4, 1, 5, 9, 2, 6]

# Adding elements
lst.append(7)                      # Add to end
print(f"append(7):    {lst}")
lst.insert(0, 0)                   # Insert at index
print(f"insert(0,0):  {lst}")
lst.extend([8, 10])                # Add multiple elements
print(f"extend([8,10]): {lst}")

# Removing elements
lst.remove(1)                      # Remove first occurrence of value
print(f"remove(1):    {lst}")
popped = lst.pop()                 # Remove and return last element
print(f"pop():        {lst}, popped: {popped}")
popped = lst.pop(0)                # Remove and return element at index
print(f"pop(0):       {lst}, popped: {popped}")

# Searching
nums = [3, 1, 4, 1, 5, 9]
print(f"\nnums: {nums}")
print(f"index(4):     {nums.index(4)}")     # 2 (first occurrence)
print(f"count(1):     {nums.count(1)}")     # 2 (number of occurrences)
print(f"5 in nums:    {5 in nums}")         # True

# Sorting
nums_copy = nums.copy()
nums_copy.sort()
print(f"sort():       {nums_copy}")         # [1, 1, 3, 4, 5, 9]
nums_copy.sort(reverse=True)
print(f"sort(rev):    {nums_copy}")         # [9, 5, 4, 3, 1, 1]

# sorted() returns new list (doesn't modify original)
print(f"sorted():     {sorted(nums)}")      # [1, 1, 3, 4, 5, 9]
print(f"original:     {nums}")              # unchanged

# Reversing
nums.reverse()
print(f"reverse():    {nums}")

# Clearing
temp = [1, 2, 3]
temp.clear()
print(f"clear():      {temp}")              # []

# --- 6. List operations ---
print(f"\n--- List Operations ---")
a = [1, 2, 3]
b = [4, 5, 6]
print(f"a + b:   {a + b}")                  # [1, 2, 3, 4, 5, 6] (concatenation)
print(f"a * 3:   {a * 3}")                  # [1, 2, 3, 1, 2, 3, 1, 2, 3]
print(f"len(a):  {len(a)}")                 # 3
print(f"min(a):  {min(a)}")                 # 1
print(f"max(b):  {max(b)}")                 # 6
print(f"sum(a):  {sum(a)}")                 # 6

# --- 7. List comprehensions ---
print(f"\n--- List Comprehensions ---")

# Basic: [expression for item in iterable]
squares = [x**2 for x in range(1, 6)]
print(f"Squares: {squares}")                # [1, 4, 9, 16, 25]

# With condition: [expression for item in iterable if condition]
evens = [x for x in range(10) if x % 2 == 0]
print(f"Evens:   {evens}")                  # [0, 2, 4, 6, 8]

# With transformation
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(f"Upper:   {upper}")                  # ['HELLO', 'WORLD', 'PYTHON']

# With if-else (expression, not filter)
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(f"Labels:  {labels}")

# Nested comprehension (flattening)
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]
print(f"Flat:    {flat}")                    # [1, 2, 3, 4, 5, 6, 7, 8, 9]

# --- 8. Copying lists ---
print(f"\n--- Copying ---")
original = [1, [2, 3], 4]
shallow = original.copy()          # or original[:]  or list(original)
shallow[0] = 99
shallow[1][0] = 99                 # Nested list is shared!
print(f"Original: {original}")     # [1, [99, 3], 4] — nested changed!
print(f"Shallow:  {shallow}")      # [99, [99, 3], 4]

import copy
original2 = [1, [2, 3], 4]
deep = copy.deepcopy(original2)    # True independent copy
deep[1][0] = 99
print(f"Original2: {original2}")   # [1, [2, 3], 4] — unchanged!
print(f"Deep copy: {deep}")        # [1, [99, 3], 4]

# --- 9. Unpacking ---
print(f"\n--- Unpacking ---")
first, second, third = [10, 20, 30]
print(f"first={first}, second={second}, third={third}")

first, *rest = [1, 2, 3, 4, 5]
print(f"first={first}, rest={rest}")    # first=1, rest=[2, 3, 4, 5]

first, *middle, last = [1, 2, 3, 4, 5]
print(f"first={first}, middle={middle}, last={last}")

print("\n--- Practice Complete: Lists ---")
