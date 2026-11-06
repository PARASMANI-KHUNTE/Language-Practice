# ============================================================
# Topic: User Input
# Key Concepts: input(), type casting, validation
# ============================================================

# --- 1. Basic input() ---
# input() reads a line from the user and returns it as a STRING.
# Note: When running non-interactively, these will wait for input.
# Uncomment the interactive examples to try them.

# name = input("Enter your name: ")
# print(f"Hello, {name}!")

# --- 2. input() always returns a string ---
# Even if the user types a number, input() returns str.
# age_str = input("Enter your age: ")   # e.g., user types "25"
# print(type(age_str))                  # <class 'str'>

# --- 3. Type casting input ---
# Convert string input to the desired type.

# Integer conversion
# age = int(input("Enter your age: "))
# print(f"Next year you will be {age + 1}")

# Float conversion
# height = float(input("Enter your height in meters: "))
# print(f"Your height: {height:.2f}m")

# --- 4. Demonstrating type casting (non-interactive) ---
user_input_sim = "42"
age = int(user_input_sim)
print(f"Input: '{user_input_sim}' -> int: {age} -> type: {type(age)}")

user_input_sim = "3.14"
pi = float(user_input_sim)
print(f"Input: '{user_input_sim}' -> float: {pi} -> type: {type(pi)}")

user_input_sim = "True"
# Note: bool("True") is True, but bool("False") is also True!
# Use comparison instead:
flag = user_input_sim.lower() == "true"
print(f"Input: '{user_input_sim}' -> bool: {flag}")

# --- 5. Handling invalid input with try/except ---
def get_integer(prompt_text):
    """Safely get an integer from user input."""
    test_inputs = ["abc", "3.14", "42"]
    for test in test_inputs:
        print(f"  Trying to convert '{test}' to int...")
        try:
            value = int(test)
            print(f"    Success: {value}")
        except ValueError:
            print(f"    Error: '{test}' is not a valid integer!")

print("\n--- Integer conversion attempts ---")
get_integer("Enter a number: ")

# --- 6. Input with validation loop ---
def get_valid_age():
    """Simulate getting a valid age with validation."""
    test_inputs = ["-5", "abc", "150", "200", "25"]
    for user_in in test_inputs:
        print(f"  Input: '{user_in}'")
        try:
            age = int(user_in)
            if 0 <= age <= 120:
                print(f"    Valid age: {age}")
                return age
            else:
                print(f"    Age must be between 0 and 120.")
        except ValueError:
            print(f"    Please enter a valid number.")
    return None

print("\n--- Age validation simulation ---")
result = get_valid_age()
print(f"Final accepted age: {result}")

# --- 7. Multiple inputs on one line ---
# Using split() to handle multiple values
line = "Alice 30 5.6"  # Simulating: input("Enter name age height: ")
parts = line.split()
name = parts[0]
age = int(parts[1])
height = float(parts[2])
print(f"\nMultiple inputs: name={name}, age={age}, height={height}")

# Unpacking directly
line = "10 20 30"
a, b, c = map(int, line.split())
print(f"Unpacked: a={a}, b={b}, c={c}")   # a=10, b=20, c=30

# --- 8. Reading comma-separated values ---
csv_input = "apple, banana, cherry"
items = [item.strip() for item in csv_input.split(",")]
print(f"\nCSV parsed: {items}")
# Output: CSV parsed: ['apple', 'banana', 'cherry']

# --- 9. Yes/No confirmation ---
def confirm_action(response):
    """Process a yes/no confirmation."""
    normalized = response.strip().lower()
    if normalized in ('y', 'yes'):
        return True
    elif normalized in ('n', 'no'):
        return False
    else:
        return None

test_responses = ["Yes", "  Y  ", "no", "N", "maybe"]
print("\n--- Yes/No confirmation ---")
for resp in test_responses:
    result = confirm_action(resp)
    print(f"  '{resp}' -> {result}")

# --- 10. Password-style input ---
# import getpass
# password = getpass.getpass("Enter password: ")  # Input hidden
# print("Password received (hidden from display)")

# --- 11. Practical example: Simple calculator ---
print("\n--- Simple Calculator Demo ---")
operations = [("10", "+", "5"), ("20", "-", "8"), ("6", "*", "7"), ("15", "/", "4")]

for num1_s, op, num2_s in operations:
    num1, num2 = float(num1_s), float(num2_s)
    if op == '+':
        result = num1 + num2
    elif op == '-':
        result = num1 - num2
    elif op == '*':
        result = num1 * num2
    elif op == '/':
        result = num1 / num2 if num2 != 0 else "Error: Division by zero"
    else:
        result = "Unknown operator"
    print(f"  {num1_s} {op} {num2_s} = {result}")

print("\n--- Practice Complete: User Input ---")
