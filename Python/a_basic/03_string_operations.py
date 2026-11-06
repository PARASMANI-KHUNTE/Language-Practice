# ============================================================
# Topic: String Operations
# Key Concepts: Slicing, methods, f-strings, formatting
# ============================================================

# --- 1. Creating strings ---
s1 = "Hello, World!"
s2 = 'Single quotes work too'
s3 = """Triple quotes
for multi-line strings"""

# Strings are immutable — you cannot change individual characters
# s1[0] = 'h'  # TypeError: 'str' object does not support item assignment

# --- 2. Indexing (0-based) ---
text = "Python"
print(text[0])       # P  (first character)
print(text[-1])      # n  (last character)
print(text[-2])      # o  (second to last)
print(len(text))     # 6  (length of string)

# --- 3. Slicing [start:stop:step] ---
s = "Hello, World!"
print(s[0:5])        # Hello     (index 0 to 4)
print(s[7:])         # World!    (index 7 to end)
print(s[:5])         # Hello     (start to index 4)
print(s[::2])        # Hlo ol!   (every 2nd character)
print(s[::-1])       # !dlroW ,olleH   (reversed string)
print(s[7:12])       # World     (index 7 to 11)

# --- 4. String methods — Case ---
msg = "hello, World"
print(msg.upper())          # HELLO, WORLD
print(msg.lower())          # hello, world
print(msg.title())          # Hello, World
print(msg.capitalize())     # Hello, world
print(msg.swapcase())       # HELLO, wORLD

# --- 5. String methods — Search ---
text = "Python is great and Python is fun"
print(text.find("Python"))       # 0  (first occurrence index)
print(text.rfind("Python"))      # 22 (last occurrence index)
print(text.find("Java"))         # -1 (not found)
print(text.count("Python"))      # 2  (number of occurrences)
print(text.index("great"))       # 10 (like find, but raises ValueError if not found)
print("Python" in text)          # True  (membership check)
print("Java" not in text)        # True

# --- 6. String methods — Modify ---
text = "  Hello, World!  "
print(text.strip())              # "Hello, World!"    (remove leading/trailing whitespace)
print(text.lstrip())             # "Hello, World!  "  (left strip)
print(text.rstrip())             # "  Hello, World!"  (right strip)
print("Hello".replace("l", "L"))  # HeLLo
print("a-b-c".split("-"))       # ['a', 'b', 'c']
print(", ".join(["a", "b", "c"]))  # a, b, c

# --- 7. String methods — Check ---
print("hello".isalpha())        # True  (only letters)
print("12345".isdigit())        # True  (only digits)
print("hello123".isalnum())     # True  (letters or digits)
print("   ".isspace())          # True  (only whitespace)
print("Hello".startswith("He")) # True
print("Hello".endswith("lo"))   # True
print("HELLO".isupper())        # True
print("hello".islower())        # True

# --- 8. f-strings (Python 3.6+) ---
name = "Alice"
age = 30
print(f"My name is {name} and I am {age} years old.")
# Output: My name is Alice and I am 30 years old.

# Expressions inside f-strings
print(f"2 + 3 = {2 + 3}")                    # 2 + 3 = 5
print(f"Name uppercase: {name.upper()}")      # Name uppercase: ALICE
print(f"Next year: {age + 1}")                # Next year: 31

# --- 9. String formatting with format() ---
print("Hello, {}! You are {} years old.".format("Bob", 25))
print("Hello, {name}! Age: {age}".format(name="Carol", age=28))
print("{0} and {1} and {0}".format("spam", "eggs"))
# Output: spam and eggs and spam

# --- 10. Number formatting ---
pi = 3.14159265
print(f"Pi: {pi:.2f}")          # Pi: 3.14       (2 decimal places)
print(f"Pi: {pi:.4f}")          # Pi: 3.1416     (4 decimal places)
print(f"Big: {1000000:,}")      # Big: 1,000,000 (comma separator)
print(f"Percent: {0.856:.1%}")  # Percent: 85.6%
print(f"Padded: {42:05d}")      # Padded: 00042  (zero-padded, width 5)
print(f"Left:  {'hi':<10}|")    # Left:  hi        |  (left-aligned)
print(f"Right: {'hi':>10}|")    # Right:         hi|  (right-aligned)
print(f"Center:{'hi':^10}|")    # Center:    hi    |  (center-aligned)

# --- 11. % formatting (older style) ---
print("Name: %s, Age: %d, GPA: %.2f" % ("Dave", 20, 3.85))

# --- 12. Useful string operations ---
# Repetition and concatenation
print("Ha" * 3)           # HaHaHa
print("Hello" + " " + "World")  # Hello World

# Checking for substrings
email = "user@example.com"
print("@" in email)        # True

# Splitting and joining
csv_line = "apple,banana,cherry"
fruits = csv_line.split(",")
print(fruits)              # ['apple', 'banana', 'cherry']
print(" | ".join(fruits))  # apple | banana | cherry

# ord() and chr() — character <-> ASCII
print(ord('A'))   # 65
print(chr(65))    # A

print("\n--- Practice Complete: String Operations ---")
