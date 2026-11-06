"""
Topic: Functional Programming Utilities: `functools` and `itertools`
Concepts Covered:
  - functools.lru_cache and cache for memoization
  - functools.partial for parameter pre-filling
  - itertools.chain, permutations, combinations, product
  - itertools.groupby for grouping consecutive keys
"""

import functools
import itertools

@functools.lru_cache(maxsize=128)
def fib_memo(n: int) -> int:
    if n < 2:
        return n
    return fib_memo(n - 1) + fib_memo(n - 2)

base_log = functools.partial(print, "[APP_LOG]")

def itertools_demo():
    combo = list(itertools.combinations(['A', 'B', 'C'], 2))
    print("Combinations (3 choose 2):", combo)

    chained = list(itertools.chain([1, 2], ['a', 'b'], [99]))
    print("Chained iterable:", chained)

if __name__ == "__main__":
    base_log("Testing memoized Fibonacci:", fib_memo(35))
    itertools_demo()
