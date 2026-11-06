# ============================================================
# Topic: Lambda Functions and Built-in Functions
# Key Concepts: lambda, map, filter, zip, enumerate, sorted, any, all
# ============================================================

# --- 1. Lambda functions ---
# Anonymous, single-expression functions.
# Syntax: lambda arguments: expression

square = lambda x: x ** 2
print(f"square(5) = {square(5)}")           # 25

add = lambda a, b: a + b
print(f"add(3, 7) = {add(3, 7)}")           # 10

# Lambda with conditional expression
classify = lambda x: "even" if x % 2 == 0 else "odd"
print(f"classify(4) = {classify(4)}")        # even
print(f"classify(7) = {classify(7)}")        # odd

# --- 2. map() — Apply function to every element ---
print("\n--- map() ---")
# map(function, iterable) -> returns map object (lazy)
numbers = [1, 2, 3, 4, 5]

squared = list(map(lambda x: x ** 2, numbers))
print(f"Squared: {squared}")                 # [1, 4, 9, 16, 25]

# With a named function
def celsius_to_fahrenheit(c):
    return c * 9 / 5 + 32

temps_c = [0, 20, 37, 100]
temps_f = list(map(celsius_to_fahrenheit, temps_c))
print(f"Celsius:    {temps_c}")
print(f"Fahrenheit: {temps_f}")

# map with multiple iterables
a = [1, 2, 3]
b = [10, 20, 30]
sums = list(map(lambda x, y: x + y, a, b))
print(f"Sums: {sums}")                       # [11, 22, 33]

# Convert types
str_nums = ["1", "2", "3", "4"]
int_nums = list(map(int, str_nums))
print(f"Converted: {int_nums}")              # [1, 2, 3, 4]

# --- 3. filter() — Keep elements where function returns True ---
print("\n--- filter() ---")
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

evens = list(filter(lambda x: x % 2 == 0, numbers))
print(f"Evens: {evens}")                      # [2, 4, 6, 8, 10]

# Filter with None removes falsy values
mixed = [0, 1, "", "hello", None, True, False, [], [1]]
truthy = list(filter(None, mixed))
print(f"Truthy: {truthy}")                    # [1, 'hello', True, [1]]

# Filter strings
words = ["hello", "", "world", "", "python"]
non_empty = list(filter(lambda s: s, words))
print(f"Non-empty: {non_empty}")

# Combining map and filter
# Get squares of even numbers
result = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, range(1, 11))))
print(f"Squares of evens: {result}")          # [4, 16, 36, 64, 100]

# --- 4. zip() — Pair up elements from multiple iterables ---
print("\n--- zip() ---")
names = ["Alice", "Bob", "Charlie"]
ages = [30, 25, 35]
cities = ["NYC", "LA", "Chicago"]

paired = list(zip(names, ages))
print(f"Paired: {paired}")                    # [('Alice', 30), ('Bob', 25), ...]

# zip with three iterables
combined = list(zip(names, ages, cities))
for name, age, city in combined:
    print(f"  {name}, age {age}, from {city}")

# zip stops at shortest iterable
short = list(zip([1, 2, 3], ['a', 'b']))
print(f"Unequal lengths: {short}")            # [(1, 'a'), (2, 'b')]

# Unzipping with zip(*)
pairs = [("Alice", 30), ("Bob", 25), ("Charlie", 35)]
names_back, ages_back = zip(*pairs)
print(f"Unzipped names: {names_back}")
print(f"Unzipped ages:  {ages_back}")

# Create dict from two lists
keys = ["name", "age", "city"]
values = ["Alice", 30, "NYC"]
person = dict(zip(keys, values))
print(f"Dict from zip: {person}")

# --- 5. enumerate() — Index + value pairs ---
print("\n--- enumerate() ---")
fruits = ["apple", "banana", "cherry"]

for i, fruit in enumerate(fruits):
    print(f"  {i}: {fruit}")

# Custom start index
for i, fruit in enumerate(fruits, start=1):
    print(f"  {i}. {fruit}")

# --- 6. sorted() — Return new sorted list ---
print("\n--- sorted() ---")
nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"sorted:      {sorted(nums)}")
print(f"sorted desc: {sorted(nums, reverse=True)}")
print(f"original:    {nums}")               # unchanged

# Sort with key function
words = ["banana", "Apple", "cherry", "date"]
print(f"Default sort:   {sorted(words)}")              # Capital first!
print(f"Case-insensitive: {sorted(words, key=str.lower)}")

# Sort tuples by second element
students = [("Alice", 95), ("Bob", 87), ("Charlie", 92)]
by_score = sorted(students, key=lambda s: s[1], reverse=True)
print(f"By score: {by_score}")

# --- 7. any() and all() ---
print("\n--- any() and all() ---")
# any() — True if ANY element is truthy
print(f"any([0, 0, 1]):    {any([0, 0, 1])}")       # True
print(f"any([0, 0, 0]):    {any([0, 0, 0])}")       # False
print(f"any([]):           {any([])}")                # False

# all() — True if ALL elements are truthy
print(f"all([1, 2, 3]):    {all([1, 2, 3])}")       # True
print(f"all([1, 0, 3]):    {all([1, 0, 3])}")       # False
print(f"all([]):           {all([])}")                # True (vacuously true)

# Practical use with generator expressions
numbers = [2, 4, 6, 8]
all_even = all(n % 2 == 0 for n in numbers)
any_gt_5 = any(n > 5 for n in numbers)
print(f"All even? {all_even}")    # True
print(f"Any > 5?  {any_gt_5}")   # True

# --- 8. reduce() — from functools ---
print("\n--- reduce() ---")
from functools import reduce

# reduce(function, iterable) — cumulatively apply function
nums = [1, 2, 3, 4, 5]
product = reduce(lambda a, b: a * b, nums)
print(f"Product of {nums}: {product}")       # 120

# Finding max with reduce
maximum = reduce(lambda a, b: a if a > b else b, nums)
print(f"Max: {maximum}")

# --- 9. Other useful built-ins ---
print("\n--- Other Built-ins ---")
print(f"abs(-7):        {abs(-7)}")
print(f"round(3.7):     {round(3.7)}")
print(f"len('hello'):   {len('hello')}")
print(f"sum([1,2,3]):   {sum([1, 2, 3])}")
print(f"min(3, 1, 2):   {min(3, 1, 2)}")
print(f"max(3, 1, 2):   {max(3, 1, 2)}")
print(f"pow(2, 10):     {pow(2, 10)}")
print(f"reversed:       {list(reversed([1, 2, 3]))}")
print(f"isinstance(5, int): {isinstance(5, int)}")

# --- 10. Practical: Data pipeline ---
print("\n--- Practical: Data Pipeline ---")
data = ["  Alice:95  ", "  Bob:87  ", "  Charlie:92  ", "  David:78  "]

# Clean -> Parse -> Filter -> Sort
results = sorted(
    filter(
        lambda t: t[1] >= 85,
        map(
            lambda s: (s.split(":")[0], int(s.split(":")[1])),
            map(str.strip, data)
        )
    ),
    key=lambda t: t[1],
    reverse=True
)
print(f"Top students (>=85): {results}")

print("\n--- Practice Complete: Lambda and Built-ins ---")
