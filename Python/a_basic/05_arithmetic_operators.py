# ============================================================
# Topic: Arithmetic Operators
# Key Concepts: +, -, *, /, //, %, **, operator precedence
# ============================================================

# --- 1. Basic arithmetic operators ---
a, b = 17, 5

print(f"a = {a}, b = {b}")
print(f"Addition:       a + b  = {a + b}")       # 22
print(f"Subtraction:    a - b  = {a - b}")       # 12
print(f"Multiplication: a * b  = {a * b}")       # 85
print(f"Division:       a / b  = {a / b}")       # 3.4 (always returns float)
print(f"Floor Division: a // b = {a // b}")      # 3   (rounds down to nearest int)
print(f"Modulus:        a % b  = {a % b}")       # 2   (remainder)
print(f"Exponent:       a ** b = {a ** b}")      # 1419857

# --- 2. Division details ---
print("\n--- Division Nuances ---")
print(f"10 / 3  = {10 / 3}")       # 3.3333... (true division)
print(f"10 // 3 = {10 // 3}")      # 3 (floor division)
print(f"-10 // 3 = {-10 // 3}")    # -4 (floors toward negative infinity!)
print(f"10.0 // 3 = {10.0 // 3}")  # 3.0 (floor div with float returns float)

# --- 3. Modulus (remainder) ---
print("\n--- Modulus Uses ---")
print(f"10 % 3 = {10 % 3}")        # 1
print(f"-10 % 3 = {-10 % 3}")      # 2 (result has same sign as divisor in Python)

# Common use: check even/odd
for num in range(1, 7):
    parity = "even" if num % 2 == 0 else "odd"
    print(f"  {num} is {parity}")

# --- 4. Exponentiation ---
print("\n--- Exponentiation ---")
print(f"2 ** 10 = {2 ** 10}")       # 1024
print(f"9 ** 0.5 = {9 ** 0.5}")     # 3.0 (square root)
print(f"27 ** (1/3) = {27 ** (1/3):.4f}")  # 3.0 (cube root)

# --- 5. Augmented assignment operators ---
print("\n--- Augmented Assignment ---")
x = 10
print(f"x = {x}")
x += 5;  print(f"x += 5  -> {x}")   # 15
x -= 3;  print(f"x -= 3  -> {x}")   # 12
x *= 2;  print(f"x *= 2  -> {x}")   # 24
x /= 4;  print(f"x /= 4  -> {x}")   # 6.0
x //= 2; print(f"x //= 2 -> {x}")   # 3.0
x %= 2;  print(f"x %= 2  -> {x}")    # 1.0
x **= 3; print(f"x **= 3 -> {x}")   # 1.0

# --- 6. Operator precedence (PEMDAS) ---
print("\n--- Operator Precedence ---")
# Parentheses > Exponent > Multiply/Divide/Floor/Mod > Add/Subtract
result = 2 + 3 * 4        # 14, not 20
print(f"2 + 3 * 4 = {result}")

result = (2 + 3) * 4      # 20
print(f"(2 + 3) * 4 = {result}")

result = 2 ** 3 ** 2       # 512 (right-associative: 2 ** (3 ** 2) = 2 ** 9)
print(f"2 ** 3 ** 2 = {result}")

result = -2 ** 2           # -4 (** binds tighter than unary -)
print(f"-2 ** 2 = {result}")

result = (-2) ** 2         # 4
print(f"(-2) ** 2 = {result}")

# --- 7. Built-in math functions ---
print("\n--- Built-in Math Functions ---")
print(f"abs(-7) = {abs(-7)}")           # 7
print(f"round(3.7) = {round(3.7)}")     # 4
print(f"round(3.5) = {round(3.5)}")     # 4 (banker's rounding!)
print(f"round(4.5) = {round(4.5)}")     # 4 (rounds to even)
print(f"round(3.14159, 2) = {round(3.14159, 2)}")  # 3.14
print(f"pow(2, 10) = {pow(2, 10)}")     # 1024
print(f"pow(2, 10, 1000) = {pow(2, 10, 1000)}")  # 24 (modular exponent)
print(f"divmod(17, 5) = {divmod(17, 5)}")  # (3, 2) — quotient & remainder
print(f"max(3, 7, 2) = {max(3, 7, 2)}") # 7
print(f"min(3, 7, 2) = {min(3, 7, 2)}") # 2
print(f"sum([1,2,3,4]) = {sum([1,2,3,4])}")  # 10

# --- 8. The math module ---
import math
print("\n--- math module ---")
print(f"math.pi    = {math.pi}")
print(f"math.e     = {math.e}")
print(f"math.sqrt(16) = {math.sqrt(16)}")
print(f"math.ceil(3.2) = {math.ceil(3.2)}")     # 4
print(f"math.floor(3.8) = {math.floor(3.8)}")   # 3
print(f"math.factorial(5) = {math.factorial(5)}")  # 120
print(f"math.log(100, 10) = {math.log(100, 10)}")  # 2.0
print(f"math.gcd(12, 8) = {math.gcd(12, 8)}")     # 4

# --- 9. Float precision gotcha ---
print("\n--- Float Precision ---")
print(f"0.1 + 0.2 = {0.1 + 0.2}")               # 0.30000000000000004
print(f"0.1 + 0.2 == 0.3: {0.1 + 0.2 == 0.3}")  # False!
print(f"Use math.isclose: {math.isclose(0.1 + 0.2, 0.3)}")  # True

print("\n--- Practice Complete: Arithmetic Operators ---")
