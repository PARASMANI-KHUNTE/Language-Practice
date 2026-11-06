"""
Topic: Closures and Variable Scope (LEGB Rule)
Concepts Covered:
  - Local, Enclosing, Global, Built-in scopes
  - The `global` and `nonlocal` keywords
  - Creating function closures with persistent internal state
  - Function factories
"""

x = "GLOBAL"

def scope_demo():
    x = "ENCLOSING"

    def inner():
        nonlocal x
        x = "MODIFIED ENCLOSING"
        print("Inner seen:", x)

    inner()
    print("Outer after inner call:", x)

def make_counter(start_value: int = 0):
    """Closure retaining state between calls."""
    count = start_value

    def increment(step: int = 1) -> int:
        nonlocal count
        count += step
        return count

    def get_current() -> int:
        return count

    return increment, get_current

def make_multiplier(factor: float):
    """Function factory pattern."""
    return lambda val: val * factor

if __name__ == "__main__":
    print("--- Scope Demo ---")
    scope_demo()
    print("Global x remains:", x)

    print("\n--- Closure Counter ---")
    inc, get_val = make_counter(10)
    print("Incrementing:", inc(5))
    print("Incrementing:", inc(2))
    print("Current value:", get_val())

    print("\n--- Function Factory ---")
    doubler = make_multiplier(2)
    tripler = make_multiplier(3)
    print("Doubler of 15:", doubler(15))
    print("Tripler of 15:", tripler(15))
