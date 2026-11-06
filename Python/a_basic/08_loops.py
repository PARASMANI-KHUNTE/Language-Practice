# ============================================================
# Topic: Loops
# Key Concepts: for, while, range, break, continue, pass, else
# ============================================================

# --- 1. for loop with list ---
print("--- for loop with list ---")
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(f"  {fruit}")

# --- 2. for loop with string ---
print("\n--- for loop with string ---")
for char in "Python":
    print(char, end=" ")   # P y t h o n
print()

# --- 3. range() function ---
print("\n--- range() ---")
# range(stop) — 0 to stop-1
for i in range(5):
    print(i, end=" ")      # 0 1 2 3 4
print()

# range(start, stop)
for i in range(2, 7):
    print(i, end=" ")      # 2 3 4 5 6
print()

# range(start, stop, step)
for i in range(0, 20, 3):
    print(i, end=" ")      # 0 3 6 9 12 15 18
print()

# Counting backwards
for i in range(5, 0, -1):
    print(i, end=" ")      # 5 4 3 2 1
print()

# --- 4. Iterating with index using enumerate() ---
print("\n--- enumerate() ---")
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(f"  {index}: {color}")
# 0: red, 1: green, 2: blue

# Start index at 1
for index, color in enumerate(colors, start=1):
    print(f"  {index}: {color}")

# --- 5. while loop ---
print("\n--- while loop ---")
count = 0
while count < 5:
    print(f"  Count: {count}")
    count += 1

# --- 6. break — Exit the loop early ---
print("\n--- break ---")
for i in range(10):
    if i == 5:
        print(f"  Breaking at {i}")
        break
    print(f"  {i}", end=" ")
print()

# Finding first item matching a condition
numbers = [3, 7, 2, 8, 1, 9, 4]
for num in numbers:
    if num > 6:
        print(f"  First number > 6: {num}")   # 7
        break

# --- 7. continue — Skip current iteration ---
print("\n--- continue ---")
for i in range(10):
    if i % 2 == 0:
        continue   # Skip even numbers
    print(i, end=" ")   # 1 3 5 7 9
print()

# --- 8. pass — Placeholder (do nothing) ---
print("\n--- pass ---")
for i in range(5):
    if i == 3:
        pass  # TODO: handle this case later
    print(i, end=" ")
print()

# pass in empty blocks (prevents SyntaxError)
def future_function():
    pass  # Will implement later

class FutureClass:
    pass

# --- 9. for-else and while-else ---
print("\n--- for-else ---")
# The `else` block runs only if the loop completes WITHOUT break
target = 4
for num in [1, 2, 3, 4, 5]:
    if num == target:
        print(f"  Found {target}!")
        break
else:
    print(f"  {target} not found.")
# Output: Found 4!

target = 99
for num in [1, 2, 3, 4, 5]:
    if num == target:
        print(f"  Found {target}!")
        break
else:
    print(f"  {target} not found.")
# Output: 99 not found.

# --- 10. Nested loops ---
print("\n--- Nested Loops: Multiplication Table ---")
for i in range(1, 4):
    for j in range(1, 4):
        print(f"  {i} x {j} = {i*j:2d}", end="   ")
    print()

# --- 11. Iterating over dictionaries ---
print("\n--- Iterating Dictionaries ---")
scores = {"Alice": 95, "Bob": 87, "Charlie": 92}
for name in scores:
    print(f"  {name}: {scores[name]}")

# Using .items() for key-value pairs
for name, score in scores.items():
    print(f"  {name} scored {score}")

# --- 12. zip() — Iterate multiple sequences in parallel ---
print("\n--- zip() ---")
names = ["Alice", "Bob", "Charlie"]
ages = [30, 25, 35]
cities = ["NYC", "LA", "Chicago"]
for name, age, city in zip(names, ages, cities):
    print(f"  {name}, age {age}, from {city}")

# --- 13. Common loop patterns ---
print("\n--- Sum of numbers ---")
total = 0
for n in range(1, 11):
    total += n
print(f"  Sum of 1-10: {total}")   # 55

print("\n--- Finding max ---")
numbers = [34, 67, 23, 89, 12, 45]
max_val = numbers[0]
for num in numbers:
    if num > max_val:
        max_val = num
print(f"  Max: {max_val}")   # 89

print("\n--- Building a list ---")
squares = []
for i in range(1, 6):
    squares.append(i ** 2)
print(f"  Squares: {squares}")   # [1, 4, 9, 16, 25]

# --- 14. Infinite loop (controlled) ---
print("\n--- Controlled infinite loop ---")
counter = 0
while True:
    counter += 1
    if counter >= 3:
        print(f"  Exiting at counter={counter}")
        break
    print(f"  Counter: {counter}")

print("\n--- Practice Complete: Loops ---")
