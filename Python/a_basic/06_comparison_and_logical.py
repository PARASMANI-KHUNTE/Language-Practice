# ============================================================
# Topic: Comparison and Logical Operators
# Key Concepts: ==, !=, <, >, and, or, not, is, in, chaining
# ============================================================

# --- 1. Comparison operators ---
a, b = 10, 20
print(f"a = {a}, b = {b}")
print(f"a == b: {a == b}")    # False  (equal)
print(f"a != b: {a != b}")    # True   (not equal)
print(f"a < b:  {a < b}")     # True   (less than)
print(f"a > b:  {a > b}")     # False  (greater than)
print(f"a <= b: {a <= b}")    # True   (less than or equal)
print(f"a >= b: {a >= b}")    # False  (greater than or equal)

# --- 2. Comparison returns bool ---
result = 5 > 3
print(f"\n5 > 3 is {result}, type: {type(result)}")  # True, <class 'bool'>

# --- 3. String comparison (lexicographic) ---
print("\n--- String Comparison ---")
print(f"'apple' < 'banana': {'apple' < 'banana'}")    # True (a < b)
print(f"'Apple' < 'apple': {'Apple' < 'apple'}")      # True (uppercase < lowercase in ASCII)
print(f"'abc' == 'abc': {'abc' == 'abc'}")             # True
print(f"'abc' != 'ABC': {'abc' != 'ABC'}")             # True (case-sensitive)

# --- 4. Logical operators: and, or, not ---
print("\n--- Logical Operators ---")
x, y = True, False
print(f"True and True:   {True and True}")     # True
print(f"True and False:  {True and False}")    # False
print(f"False or True:   {False or True}")     # True
print(f"False or False:  {False or False}")    # False
print(f"not True:        {not True}")          # False
print(f"not False:       {not False}")         # True

# --- 5. Short-circuit evaluation ---
# `and` stops at first False, `or` stops at first True
print("\n--- Short-circuit Evaluation ---")
# and returns the first falsy value, or the last value if all truthy
print(f"0 and 5:     {0 and 5}")          # 0  (0 is falsy)
print(f"3 and 5:     {3 and 5}")          # 5  (both truthy, returns last)
print(f"'' and 'hi': {'' and 'hi'}")      # '' (empty string is falsy)

# or returns the first truthy value, or the last value if all falsy
print(f"0 or 5:      {0 or 5}")           # 5  (0 is falsy, check next)
print(f"3 or 5:      {3 or 5}")           # 3  (first truthy)
print(f"'' or 'hi':  {'' or 'hi'}")       # hi
print(f"0 or '' or None: {0 or '' or None}")  # None (all falsy, returns last)

# Common idiom: default values
name = "" or "Anonymous"
print(f"Default: {name}")                 # Anonymous

# --- 6. Truthy and Falsy values ---
print("\n--- Truthy / Falsy ---")
falsy_values = [False, 0, 0.0, "", None, [], {}, set(), tuple()]
for val in falsy_values:
    print(f"  bool({str(val):10s}) = {bool(val)}")  # All False

truthy_values = [True, 1, -1, 3.14, "hello", [1], {"a": 1}, {1}]
for val in truthy_values:
    print(f"  bool({str(val):12s}) = {bool(val)}")  # All True

# --- 7. Identity operators: is, is not ---
print("\n--- Identity Operators (is / is not) ---")
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(f"a == b: {a == b}")     # True  (same value)
print(f"a is b: {a is b}")     # False (different objects in memory)
print(f"a is c: {a is c}")     # True  (same object)

# Use `is` for None checks
value = None
print(f"value is None: {value is None}")         # True (correct way)
print(f"value is not None: {value is not None}")  # False

# --- 8. Membership operators: in, not in ---
print("\n--- Membership Operators (in / not in) ---")
fruits = ["apple", "banana", "cherry"]
print(f"'banana' in fruits: {'banana' in fruits}")          # True
print(f"'grape' not in fruits: {'grape' not in fruits}")    # True
print(f"'py' in 'python': {'py' in 'python'}")              # True (substring)
print(f"1 in {1, 2, 3}: {1 in {1, 2, 3}}")                  # True (set membership)
print(f"'a' in {{'a': 1}}: {'a' in {'a': 1}}")              # True (dict checks keys)

# --- 9. Chained comparisons ---
print("\n--- Chained Comparisons ---")
x = 15
print(f"x = {x}")
print(f"10 < x < 20: {10 < x < 20}")       # True (equivalent to 10 < x and x < 20)
print(f"10 < x > 5:  {10 < x > 5}")        # True
print(f"1 < 2 < 3 < 4: {1 < 2 < 3 < 4}")  # True

# --- 10. Practical examples ---
print("\n--- Practical: Grade Calculator ---")
score = 78
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print(f"Score {score} -> Grade {grade}")

print("\n--- Practical: Leap Year Check ---")
year = 2024
is_leap = (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)
print(f"{year} is a leap year: {is_leap}")

print("\n--- Practice Complete: Comparison and Logical Operators ---")
