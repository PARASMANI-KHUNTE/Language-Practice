"""
Topic: Decorators
Concepts Covered:
  - Higher-order functions & closures
  - Basic function decorator
  - Preserving metadata with functools.wraps
  - Decorators accepting arguments
  - Class-based decorators
  - Stacking multiple decorators
"""

import time
import functools

def timer(func):
    """Measures function execution duration."""
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        duration = time.perf_counter() - start
        print(f"[TIMER] {func.__name__} took {duration:.6f} seconds")
        return result
    return wrapper

def repeat(times: int):
    """Decorator factory that repeats function execution."""
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            res = None
            for i in range(times):
                print(f"Execution #{i+1} of {times}")
                res = func(*args, **kwargs)
            return res
        return wrapper
    return decorator

class CountCalls:
    """Class decorator tracking how many times a function is called."""
    def __init__(self, func):
        self.func = func
        self.calls = 0
        functools.update_wrapper(self, func)

    def __call__(self, *args, **kwargs):
        self.calls += 1
        print(f"'{self.func.__name__}' call count: {self.calls}")
        return self.func(*args, **kwargs)

@timer
@repeat(2)
def greet(name: str):
    print(f"Hello, {name}!")

@CountCalls
def compute_total(a, b):
    return a + b

if __name__ == "__main__":
    greet("Developer")
    print()
    compute_total(5, 10)
    compute_total(20, 30)
