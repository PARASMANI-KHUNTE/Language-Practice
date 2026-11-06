# ============================================================
# Topic: Variables and Data Types
# Key Concepts: int, float, str, bool, type(), type casting
# ============================================================

# --- 1. Variables ---
# Variables are names that refer to values. No declaration keyword needed.
x = 10              # integer
name = "Alice"      # string
pi = 3.14159        # float
is_active = True    # boolean

print(x, name, pi, is_active)
# Output: 10 Alice 3.14159 True

# --- 2. Variable naming rules ---
# - Must start with a letter or underscore (_)
# - Can contain letters, digits, and underscores
# - Case-sensitive (age != Age)
# - Cannot be a Python keyword (if, for, class, etc.)
my_variable = 1
_private = 2
camelCase = 3       # Valid but snake_case is preferred in Python
MAX_SIZE = 100      # Convention: ALL_CAPS for constants

# --- 3. Multiple assignment ---
a, b, c = 1, 2, 3
print(a, b, c)      # Output: 1 2 3

# Same value to multiple variables
x = y = z = 0
print(x, y, z)      # Output: 0 0 0

# Swapping variables (Pythonic way)
a, b = 1, 2
a, b = b, a
print(a, b)          # Output: 2 1

# --- 4. Data Types ---

# int — Integer (whole numbers, arbitrary precision)
count = 42
big_num = 10_000_000           # Underscores for readability
negative = -17
binary = 0b1010                # Binary literal (= 10)
octal = 0o17                   # Octal literal (= 15)
hexadecimal = 0xFF             # Hex literal (= 255)
print(f"int: {count}, big: {big_num}, bin: {binary}, oct: {octal}, hex: {hexadecimal}")

# float — Floating-point (decimal numbers)
temperature = 36.6
scientific = 2.5e4             # 2.5 × 10^4 = 25000.0
tiny = 1.2e-3                  # 0.0012
inf = float('inf')             # Positive infinity
nan = float('nan')             # Not a Number
print(f"float: {temperature}, sci: {scientific}, inf: {inf}, nan: {nan}")

# str — String (text)
greeting = "Hello"
char = 'A'                     # Python has no char type; it's a str of length 1
multiline = """Line 1
Line 2"""
print(f"str: {greeting}, char: {char}")

# bool — Boolean (True or False)
is_valid = True
is_empty = False
print(f"bool: {is_valid}, {is_empty}")
# Booleans are subclass of int: True == 1, False == 0
print(True + True)             # Output: 2
print(False * 10)              # Output: 0

# NoneType — Represents absence of value
result = None
print(f"None: {result}")

# complex — Complex numbers
z = 3 + 4j
print(f"complex: {z}, real: {z.real}, imag: {z.imag}")

# --- 5. type() — Check the type of a variable ---
print(type(42))                # <class 'int'>
print(type(3.14))              # <class 'float'>
print(type("hello"))           # <class 'str'>
print(type(True))              # <class 'bool'>
print(type(None))              # <class 'NoneType'>
print(type([1, 2]))            # <class 'list'>

# --- 6. isinstance() — Check if value is of a certain type ---
print(isinstance(42, int))           # True
print(isinstance("hi", str))         # True
print(isinstance(True, int))         # True (bool is subclass of int!)
print(isinstance(3.14, (int, float)))  # True (check multiple types)

# --- 7. Type Casting (Conversion) ---
# int() — convert to integer
print(int(3.9))                # 3 (truncates, does NOT round)
print(int("42"))               # 42
print(int(True))               # 1

# float() — convert to float
print(float(10))               # 10.0
print(float("3.14"))           # 3.14

# str() — convert to string
print(str(100))                # "100"
print(str(3.14))               # "3.14"
print(str(True))               # "True"

# bool() — convert to bool (Falsy values: 0, 0.0, "", None, [], {}, set())
print(bool(0))                 # False
print(bool(""))                # False
print(bool(42))                # True
print(bool("hello"))           # True
print(bool([]))                # False
print(bool([1]))               # True

# --- 8. Dynamic typing ---
# Python is dynamically typed: a variable can change type.
value = 10
print(type(value))             # <class 'int'>
value = "now I'm a string"
print(type(value))             # <class 'str'>

# --- 9. id() — Memory address of an object ---
a = 256
b = 256
print(id(a) == id(b))         # True (Python caches small integers -5 to 256)

print("\n--- Practice Complete: Variables and Data Types ---")
