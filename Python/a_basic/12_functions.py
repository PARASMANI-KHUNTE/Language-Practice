# ============================================================
# Topic: Functions
# Key Concepts: def, args, kwargs, return, default params, scope
# ============================================================

# --- 1. Basic function ---
def greet():
    """A simple greeting function."""
    print("Hello, World!")

greet()   # Output: Hello, World!

# --- 2. Function with parameters ---
def greet_person(name):
    """Greet a specific person."""
    print(f"Hello, {name}!")

greet_person("Alice")     # Output: Hello, Alice!

# --- 3. Return values ---
def add(a, b):
    """Return the sum of two numbers."""
    return a + b

result = add(3, 5)
print(f"add(3, 5) = {result}")   # 8

# Functions without return statement return None
def no_return():
    x = 42

print(f"no_return(): {no_return()}")   # None

# Return multiple values (as a tuple)
def min_max(numbers):
    """Return both min and max."""
    return min(numbers), max(numbers)

lo, hi = min_max([3, 7, 1, 9, 4])
print(f"min={lo}, max={hi}")   # min=1, max=9

# --- 4. Default parameters ---
def power(base, exponent=2):
    """Raise base to exponent. Default is square."""
    return base ** exponent

print(f"\n--- Default Parameters ---")
print(f"power(5):    {power(5)}")       # 25 (uses default exponent=2)
print(f"power(2, 10): {power(2, 10)}")  # 1024

# CAUTION: Don't use mutable default arguments!
def bad_append(item, lst=[]):    # WRONG! Shared across calls
    lst.append(item)
    return lst

def good_append(item, lst=None):   # CORRECT pattern
    if lst is None:
        lst = []
    lst.append(item)
    return lst

print(f"good_append(1): {good_append(1)}")   # [1]
print(f"good_append(2): {good_append(2)}")   # [2]  (not [1, 2])

# --- 5. Positional and keyword arguments ---
print(f"\n--- Positional vs Keyword Args ---")
def describe(name, age, city):
    print(f"{name}, age {age}, from {city}")

describe("Alice", 30, "NYC")               # All positional
describe(name="Bob", age=25, city="LA")     # All keyword
describe("Charlie", city="Chicago", age=28) # Mixed (positional first!)

# --- 6. *args — Variable positional arguments ---
print(f"\n--- *args ---")
def total(*args):
    """Sum any number of arguments."""
    print(f"  args = {args}, type = {type(args)}")   # It's a tuple
    return sum(args)

print(f"total(1, 2, 3):    {total(1, 2, 3)}")
print(f"total(10, 20):     {total(10, 20)}")

# --- 7. **kwargs — Variable keyword arguments ---
print(f"\n--- **kwargs ---")
def show_info(**kwargs):
    """Display all keyword arguments."""
    print(f"  kwargs = {kwargs}, type = {type(kwargs)}")  # It's a dict
    for key, value in kwargs.items():
        print(f"    {key}: {value}")

show_info(name="Alice", age=30, city="NYC")

# --- 8. Combining *args and **kwargs ---
print(f"\n--- Mixed *args and **kwargs ---")
def flexible(required, *args, **kwargs):
    print(f"  required: {required}")
    print(f"  args: {args}")
    print(f"  kwargs: {kwargs}")

flexible("hello", 1, 2, 3, key="value", num=42)

# --- 9. Keyword-only arguments (after *) ---
print(f"\n--- Keyword-Only Args ---")
def connect(host, port, *, timeout=30, retries=3):
    """Arguments after * must be passed as keywords."""
    print(f"  host={host}, port={port}, timeout={timeout}, retries={retries}")

connect("localhost", 8080)
connect("localhost", 8080, timeout=10, retries=5)
# connect("localhost", 8080, 10)  # TypeError!

# --- 10. Positional-only arguments (before /) ---
print(f"\n--- Positional-Only Args (Python 3.8+) ---")
def divide(a, b, /):
    """a and b must be passed positionally."""
    return a / b

print(f"divide(10, 3): {divide(10, 3):.2f}")
# divide(a=10, b=3)  # TypeError!

# --- 11. Docstrings ---
def factorial(n):
    """
    Calculate the factorial of a non-negative integer.

    Args:
        n (int): A non-negative integer.

    Returns:
        int: The factorial of n.

    Raises:
        ValueError: If n is negative.
    """
    if n < 0:
        raise ValueError("n must be non-negative")
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(f"\n--- Docstrings ---")
print(f"factorial(5) = {factorial(5)}")
print(f"Docstring:\n{factorial.__doc__}")

# --- 12. Functions as first-class objects ---
print(f"\n--- Functions as Objects ---")
def square(x):
    return x ** 2

def apply(func, value):
    return func(value)

print(f"apply(square, 5) = {apply(square, 5)}")   # 25

# Storing functions in data structures
operations = {
    "add": lambda a, b: a + b,
    "sub": lambda a, b: a - b,
    "mul": lambda a, b: a * b,
}
print(f"operations['add'](3, 4) = {operations['add'](3, 4)}")

# --- 13. Recursion ---
print(f"\n--- Recursion ---")
def fibonacci(n):
    """Return nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

fib_seq = [fibonacci(i) for i in range(10)]
print(f"Fibonacci: {fib_seq}")   # [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# --- 14. Type hints (annotations) ---
def greet_typed(name: str, times: int = 1) -> str:
    """Return a greeting string."""
    return (f"Hello, {name}! " * times).strip()

print(f"\n{greet_typed('Bob', 2)}")
print(f"Annotations: {greet_typed.__annotations__}")

print("\n--- Practice Complete: Functions ---")
