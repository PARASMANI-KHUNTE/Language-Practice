"""
Topic: Iterators and Generators
Concepts Covered:
  - Iterator Protocol: __iter__ and __next__
  - StopIteration handling
  - Generator functions using yield
  - Generator expressions
  - Infinite / lazy sequence generation
"""

class Countdown:
    """Custom iterator implementation."""
    def __init__(self, start: int):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self) -> int:
        if self.current <= 0:
            raise StopIteration
        val = self.current
        self.current -= 1
        return val


def fibonacci_generator(limit: int):
    """Yields up to limit numbers of the Fibonacci sequence."""
    a, b = 0, 1
    count = 0
    while count < limit:
        yield a
        a, b = b, a + b
        count += 1


def primes_generator():
    """Infinite prime number generator."""
    num = 2
    while True:
        is_prime = True
        for i in range(2, int(num**0.5) + 1):
            if num % i == 0:
                is_prime = False
                break
        if is_prime:
            yield num
        num += 1


if __name__ == "__main__":
    print("--- Custom Iterator ---")
    for tick in Countdown(4):
        print(f"Tick: {tick}")

    print("\n--- Fibonacci Generator ---")
    print(list(fibonacci_generator(8)))

    print("\n--- Infinite Generator (first 5 primes) ---")
    gen = primes_generator()
    first_five = [next(gen) for _ in range(5)]
    print("First 5 primes:", first_five)

    print("\n--- Generator Expression ---")
    squares_gen = (x**2 for x in range(10) if x % 2 == 0)
    print("Even squares:", list(squares_gen))
