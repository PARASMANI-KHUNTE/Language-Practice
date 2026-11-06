# ============================================================
# Topic: File Handling
# Key Concepts: open, read, write, with statement, modes
# ============================================================

import os
import tempfile

# We'll use a temp directory for safe file operations
TEMP_DIR = tempfile.mkdtemp(prefix="python_practice_")
print(f"Working directory: {TEMP_DIR}")

# --- 1. Writing to a file ---
print("\n--- Writing Files ---")

# Mode 'w' — write (creates file, overwrites if exists)
filepath = os.path.join(TEMP_DIR, "example.txt")
file = open(filepath, "w")
file.write("Hello, World!\n")
file.write("This is line 2.\n")
file.write("Python file handling.\n")
file.close()                          # Always close files!
print(f"File written: {filepath}")

# --- 2. Reading from a file ---
print("\n--- Reading Files ---")

# read() — Read entire file as one string
file = open(filepath, "r")
content = file.read()
file.close()
print(f"read():\n{content}")

# readline() — Read one line at a time
file = open(filepath, "r")
line1 = file.readline()               # First line
line2 = file.readline()               # Second line
file.close()
print(f"readline(): {line1.strip()}, {line2.strip()}")

# readlines() — Read all lines as a list
file = open(filepath, "r")
lines = file.readlines()
file.close()
print(f"readlines(): {lines}")

# --- 3. The 'with' statement (context manager) ---
print("\n--- with statement (PREFERRED) ---")
# Automatically closes file, even if an error occurs.
with open(filepath, "r") as f:
    content = f.read()
    print(f"with-read:\n{content}")
# File is automatically closed here

# --- 4. Iterating over lines ---
print("--- Iterating line by line ---")
with open(filepath, "r") as f:
    for line_num, line in enumerate(f, 1):
        print(f"  Line {line_num}: {line.strip()}")

# --- 5. File modes ---
print("\n--- File Modes ---")
# 'r'  — Read (default). Error if file doesn't exist.
# 'w'  — Write. Creates or overwrites.
# 'a'  — Append. Creates or appends to end.
# 'x'  — Exclusive create. Error if file exists.
# 'b'  — Binary mode (combine: 'rb', 'wb').
# 't'  — Text mode (default, combine: 'rt', 'wt').
# '+'  — Read and write (combine: 'r+', 'w+').

# Append mode
append_path = os.path.join(TEMP_DIR, "append_demo.txt")
with open(append_path, "w") as f:
    f.write("First line.\n")

with open(append_path, "a") as f:
    f.write("Appended line 1.\n")
    f.write("Appended line 2.\n")

with open(append_path, "r") as f:
    print(f"Append result:\n{f.read()}")

# --- 6. Writing multiple lines ---
print("--- writelines() ---")
lines_path = os.path.join(TEMP_DIR, "lines.txt")
lines_to_write = ["Line A\n", "Line B\n", "Line C\n"]
with open(lines_path, "w") as f:
    f.writelines(lines_to_write)     # Does NOT add newlines automatically

with open(lines_path, "r") as f:
    print(f.read())

# --- 7. Reading specific amounts ---
print("--- Partial reads ---")
with open(filepath, "r") as f:
    chunk = f.read(13)               # Read first 13 characters
    print(f"First 13 chars: '{chunk}'")
    rest = f.read()                  # Read remaining
    print(f"Rest: '{rest.strip()}'")

# --- 8. File pointer (seek and tell) ---
print("\n--- seek() and tell() ---")
with open(filepath, "r") as f:
    print(f"Position: {f.tell()}")    # 0
    f.read(5)
    print(f"After read(5): {f.tell()}")  # 5
    f.seek(0)                         # Go back to beginning
    print(f"After seek(0): {f.tell()}")  # 0
    print(f"Read again: {f.read(5)}")

# --- 9. Checking if file exists ---
print("\n--- File existence ---")
print(f"exists: {os.path.exists(filepath)}")
print(f"is file: {os.path.isfile(filepath)}")
print(f"is dir: {os.path.isdir(TEMP_DIR)}")

# --- 10. Working with binary files ---
print("\n--- Binary files ---")
binary_path = os.path.join(TEMP_DIR, "data.bin")
with open(binary_path, "wb") as f:
    f.write(b"\x48\x65\x6c\x6c\x6f")   # "Hello" in bytes

with open(binary_path, "rb") as f:
    data = f.read()
    print(f"Binary: {data}")              # b'Hello'
    print(f"Decoded: {data.decode('utf-8')}")

# --- 11. Writing structured data ---
print("\n--- Structured data (CSV-like) ---")
csv_path = os.path.join(TEMP_DIR, "students.csv")
students = [
    ("Alice", 95),
    ("Bob", 87),
    ("Charlie", 92),
]

# Write
with open(csv_path, "w") as f:
    f.write("name,score\n")
    for name, score in students:
        f.write(f"{name},{score}\n")

# Read and parse
with open(csv_path, "r") as f:
    header = f.readline().strip()
    print(f"Header: {header}")
    for line in f:
        name, score = line.strip().split(",")
        print(f"  {name}: {score}")

# --- 12. Error handling with files ---
print("\n--- Error Handling ---")
try:
    with open("nonexistent_file.txt", "r") as f:
        content = f.read()
except FileNotFoundError:
    print("File not found!")
except PermissionError:
    print("Permission denied!")
except IOError as e:
    print(f"IO Error: {e}")

# --- 13. Cleanup temp files ---
import shutil
shutil.rmtree(TEMP_DIR)
print(f"\nCleaned up temp directory: {TEMP_DIR}")

print("\n--- Practice Complete: File Handling ---")
