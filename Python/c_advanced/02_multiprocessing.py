"""
Topic: Multiprocessing and True Parallelism (Bypassing GIL)
Concepts Covered:
  - multiprocessing.Process vs threading
  - multiprocessing.Pool for map-reduce workloads
  - Inter-process communication using Queue
  - Shared memory with Value and Array
"""

import multiprocessing
import os
import time

def compute_heavy_square(n: int) -> int:
    time.sleep(0.01)
    return n * n

def worker_info(name: str):
    print(f"Worker {name} executing on Process ID: {os.getpid()}")

if __name__ == "__main__":
    print(f"Main Process ID: {os.getpid()}")

    p1 = multiprocessing.Process(target=worker_info, args=("Alpha",))
    p2 = multiprocessing.Process(target=worker_info, args=("Beta",))
    p1.start()
    p2.start()
    p1.join()
    p2.join()

    print("\n--- Multiprocessing Pool (Parallel Map) ---")
    inputs = [1, 2, 3, 4, 5, 6, 7, 8]
    # Using Pool context
    with multiprocessing.Pool(processes=2) as pool:
        results = pool.map(compute_heavy_square, inputs)
    print("Parallel Squared Results:", results)
