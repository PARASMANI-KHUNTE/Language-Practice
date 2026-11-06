# ============================================================
# Topic: Exception Handling
# Key Concepts: try, except, finally, raise, custom exceptions
# ============================================================

# --- 1. Basic try-except ---
print("--- Basic try-except ---")
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
# Output: Cannot divide by zero!

# --- 2. Catching the exception object ---
try:
    num = int("hello")
except ValueError as e:
    print(f"ValueError caught: {e}")
# Output: ValueError caught: invalid literal for int() with base 10: 'hello'

# --- 3. Multiple except blocks ---
print("\n--- Multiple except blocks ---")
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("  Error: Division by zero")
    except TypeError as e:
        print(f"  Error: Wrong type - {e}")
    return None

print(f"10/3 = {safe_divide(10, 3):.2f}")
safe_divide(10, 0)
safe_divide("10", 3)

# --- 4. Catching multiple exceptions in one block ---
print("\n--- Multiple exceptions, one block ---")
try:
    # Could be either error
    value = int("abc")
except (ValueError, TypeError) as e:
    print(f"Caught: {type(e).__name__}: {e}")

# --- 5. Generic exception (catch-all) ---
print("\n--- Generic except ---")
try:
    result = [1, 2, 3][10]
except Exception as e:
    print(f"Caught: {type(e).__name__}: {e}")
# Note: bare `except:` (without Exception) also catches SystemExit, KeyboardInterrupt
# — avoid it in most cases.

# --- 6. try-except-else ---
print("\n--- try-except-else ---")
# The `else` block runs only if NO exception occurred.
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Division error!")
else:
    print(f"Success! Result = {result}")   # This runs
# Output: Success! Result = 5.0

# --- 7. try-except-finally ---
print("\n--- try-except-finally ---")
# The `finally` block ALWAYS runs, regardless of exceptions.
try:
    print("  Trying...")
    result = 10 / 2
except ZeroDivisionError:
    print("  Error!")
else:
    print(f"  Result: {result}")
finally:
    print("  Finally: This ALWAYS executes (cleanup code here)")

# finally with error
try:
    x = 1 / 0
except ZeroDivisionError:
    print("\n  Caught zero division")
finally:
    print("  Finally still runs after error")

# --- 8. raise — Raising exceptions ---
print("\n--- raise ---")

def validate_age(age):
    if not isinstance(age, int):
        raise TypeError(f"Age must be an integer, got {type(age).__name__}")
    if age < 0:
        raise ValueError(f"Age cannot be negative: {age}")
    if age > 150:
        raise ValueError(f"Age seems unrealistic: {age}")
    return True

# Test validation
test_ages = [25, -5, "thirty", 200]
for age in test_ages:
    try:
        validate_age(age)
        print(f"  Age {age}: Valid")
    except (TypeError, ValueError) as e:
        print(f"  Age {age}: {e}")

# --- 9. Re-raising exceptions ---
print("\n--- Re-raising ---")
def process_data(data):
    try:
        return int(data)
    except ValueError:
        print(f"  Logging error for data: '{data}'")
        raise                 # Re-raise the same exception

try:
    process_data("abc")
except ValueError as e:
    print(f"  Caught re-raised: {e}")

# --- 10. Exception chaining (raise from) ---
print("\n--- Exception Chaining ---")
try:
    try:
        x = int("bad")
    except ValueError as original:
        raise RuntimeError("Failed to process data") from original
except RuntimeError as e:
    print(f"  RuntimeError: {e}")
    print(f"  Caused by: {e.__cause__}")

# --- 11. Custom exceptions ---
print("\n--- Custom Exceptions ---")

class AppError(Exception):
    """Base exception for our application."""
    pass

class ValidationError(AppError):
    """Raised when validation fails."""
    def __init__(self, field, message):
        self.field = field
        self.message = message
        super().__init__(f"Validation error on '{field}': {message}")

class NotFoundError(AppError):
    """Raised when a resource is not found."""
    def __init__(self, resource, identifier):
        self.resource = resource
        self.identifier = identifier
        super().__init__(f"{resource} with id '{identifier}' not found")

# Using custom exceptions
def create_user(name, age):
    if not name:
        raise ValidationError("name", "cannot be empty")
    if not isinstance(age, int) or age < 0:
        raise ValidationError("age", "must be a non-negative integer")
    return {"name": name, "age": age}

test_cases = [("Alice", 30), ("", 25), ("Bob", -5)]
for name, age in test_cases:
    try:
        user = create_user(name, age)
        print(f"  Created: {user}")
    except ValidationError as e:
        print(f"  Error: {e}")
        print(f"    Field: {e.field}, Message: {e.message}")

# --- 12. Common exception hierarchy ---
print("\n--- Common Exception Types ---")
exceptions_demo = {
    "ZeroDivisionError": lambda: 1 / 0,
    "IndexError":        lambda: [1, 2, 3][10],
    "KeyError":          lambda: {}["missing"],
    "TypeError":         lambda: "2" + 2,
    "AttributeError":    lambda: None.some_method(),
    "NameError":         lambda: eval("undefined_var"),
    "FileNotFoundError": lambda: open("nonexistent.txt"),
    "OverflowError":     lambda: 10.0 ** 1000,
}

for name, func in exceptions_demo.items():
    try:
        func()
    except Exception as e:
        print(f"  {name:25s}: {e}")

# --- 13. assertions ---
print("\n--- Assertions ---")
# assert condition, optional_message
# Raises AssertionError if condition is False
x = 10
assert x > 0, "x must be positive"   # Passes silently
print(f"  x = {x}, assertion passed")

try:
    assert x < 0, f"Expected x < 0, got x = {x}"
except AssertionError as e:
    print(f"  AssertionError: {e}")

# Note: assertions can be disabled with python -O flag

print("\n--- Practice Complete: Exception Handling ---")
