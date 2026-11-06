# ============================================================
# Topic: Conditional Statements
# Key Concepts: if, elif, else, ternary, match-case
# ============================================================

# --- 1. Basic if statement ---
age = 20
if age >= 18:
    print(f"Age {age}: You are an adult.")
# Output: Age 20: You are an adult.

# --- 2. if-else ---
temperature = 35
if temperature > 30:
    print(f"{temperature}°C: It's hot!")
else:
    print(f"{temperature}°C: It's comfortable.")
# Output: 35°C: It's hot!

# --- 3. if-elif-else chain ---
print("\n--- Grade Classification ---")
score = 85
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
print(f"Score: {score} -> Grade: {grade}")   # Grade: B

# --- 4. Nested if statements ---
print("\n--- Nested Conditions ---")
num = 15
if num > 0:
    if num % 2 == 0:
        print(f"{num} is positive and even")
    else:
        print(f"{num} is positive and odd")
elif num < 0:
    print(f"{num} is negative")
else:
    print(f"{num} is zero")
# Output: 15 is positive and odd

# --- 5. Ternary (conditional) expression ---
print("\n--- Ternary Expression ---")
# Syntax: value_if_true if condition else value_if_false
x = 10
result = "even" if x % 2 == 0 else "odd"
print(f"{x} is {result}")   # 10 is even

# Ternary in assignment
age = 16
status = "adult" if age >= 18 else "minor"
print(f"Age {age}: {status}")   # minor

# Nested ternary (use sparingly — can reduce readability)
n = 0
sign = "positive" if n > 0 else ("negative" if n < 0 else "zero")
print(f"{n} is {sign}")   # zero

# --- 6. Multiple conditions with logical operators ---
print("\n--- Multiple Conditions ---")
username = "admin"
password = "secret123"
is_active = True

if username == "admin" and password == "secret123" and is_active:
    print("Login successful!")
else:
    print("Access denied.")

# Using or
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print(f"{day}: It's the weekend!")
else:
    print(f"{day}: It's a weekday.")

# Using not
logged_in = False
if not logged_in:
    print("Please log in first.")

# --- 7. Truthiness in conditions ---
print("\n--- Truthiness ---")
name = ""
if name:
    print(f"Hello, {name}!")
else:
    print("Name is empty!")   # This prints

items = [1, 2, 3]
if items:
    print(f"List has {len(items)} items")   # This prints

# --- 8. Membership and identity in conditions ---
print("\n--- Membership & Identity ---")
allowed_roles = ["admin", "editor", "moderator"]
user_role = "editor"
if user_role in allowed_roles:
    print(f"Role '{user_role}' has access.")

value = None
if value is None:
    print("Value is not set.")

# --- 9. match-case (Python 3.10+) ---
print("\n--- Match-Case (Structural Pattern Matching) ---")
command = "greet"

match command:
    case "greet":
        print("Hello there!")
    case "farewell":
        print("Goodbye!")
    case "help":
        print("Available commands: greet, farewell, help")
    case _:
        print(f"Unknown command: {command}")

# Match with patterns
point = (0, 5)
match point:
    case (0, 0):
        print("Origin")
    case (x, 0):
        print(f"On x-axis at x={x}")
    case (0, y):
        print(f"On y-axis at y={y}")
    case (x, y):
        print(f"Point at ({x}, {y})")

# Match with guard (if clause)
http_status = 404
match http_status:
    case 200:
        print("OK")
    case 301 | 302:
        print("Redirect")
    case code if 400 <= code < 500:
        print(f"Client error: {code}")
    case code if 500 <= code < 600:
        print(f"Server error: {code}")
    case _:
        print(f"Unknown status: {http_status}")

# --- 10. Practical: FizzBuzz ---
print("\n--- FizzBuzz (1-20) ---")
for i in range(1, 21):
    if i % 3 == 0 and i % 5 == 0:
        print(f"{i:2d}: FizzBuzz")
    elif i % 3 == 0:
        print(f"{i:2d}: Fizz")
    elif i % 5 == 0:
        print(f"{i:2d}: Buzz")
    else:
        print(f"{i:2d}: {i}")

print("\n--- Practice Complete: Conditional Statements ---")
