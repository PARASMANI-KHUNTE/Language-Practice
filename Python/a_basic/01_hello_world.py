# ============================================================
# Topic: Hello World — Print, Comments, Basic Syntax
# Key Concepts: print(), comments, docstrings, escape chars
# ============================================================

# --- Single-line comment ---
# This is a single-line comment. The interpreter ignores it.

"""
Multi-line comment (docstring style).
Python doesn't have a dedicated multi-line comment syntax,
but triple-quoted strings serve the same purpose.
"""

# --- 1. The print() function ---
# print() outputs text to the console (standard output).
print("Hello, World!")                    # Output: Hello, World!
print("Welcome to Python programming!")   # Output: Welcome to Python programming!

# --- 2. Printing multiple values ---
# print() can take multiple arguments separated by commas.
print("Python", "is", "awesome")          # Output: Python is awesome
# By default, values are separated by a space.

# --- 3. The sep parameter ---
# Change the separator between values.
print("2025", "01", "15", sep="-")        # Output: 2025-01-15
print("a", "b", "c", sep=" -> ")          # Output: a -> b -> c

# --- 4. The end parameter ---
# By default, print() ends with a newline (\n). Override with `end`.
print("Loading", end="")
print("...", end="")
print(" Done!")                           # Output: Loading... Done!

# --- 5. Escape characters ---
# Special characters inside strings using backslash (\).
print("She said, \"Hello!\"")             # Output: She said, "Hello!"
print("Line1\nLine2")                     # \n = newline
print("Column1\tColumn2")                # \t = tab
print("Backslash: \\")                   # \\ = literal backslash

# --- 6. Raw strings ---
# Prefix with r to ignore escape characters.
print(r"C:\new_folder\test")              # Output: C:\new_folder\test (no escape)

# --- 7. Multi-line strings ---
message = """
This is a
multi-line string.
It preserves line breaks.
"""
print(message)

# --- 8. String concatenation with + ---
greeting = "Hello"
name = "Alice"
print(greeting + ", " + name + "!")       # Output: Hello, Alice!

# --- 9. String repetition with * ---
print("=" * 40)                           # Output: ======================================== (40 equal signs)
print("Ha" * 3)                           # Output: HaHaHa

# --- 10. Basic Python syntax rules ---
# - Python uses indentation (not braces) to define code blocks.
# - Statements end at the newline (no semicolons needed).
# - Python is case-sensitive: `Name` and `name` are different.

# Semicolons CAN be used to place multiple statements on one line (not recommended):
x = 5; y = 10; print(x + y)              # Output: 15

# Line continuation with backslash:
total = 1 + 2 + 3 + \
        4 + 5 + 6
print("Total:", total)                    # Output: Total: 21

# Line continuation inside parentheses (preferred style):
total2 = (1 + 2 + 3 +
          4 + 5 + 6)
print("Total2:", total2)                  # Output: Total2: 21

# --- 11. The help() and dir() functions ---
# help(print)   # Uncomment to see the full documentation for print()
# dir(str)      # Uncomment to see all string methods

# --- 12. Python's Zen ---
# Uncomment the line below to see Python's guiding principles:
# import this

print("\n--- Practice Complete: Hello World ---")
