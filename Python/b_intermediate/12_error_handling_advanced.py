"""
Topic: Advanced Error Handling and Context Management
Concepts Covered:
  - Custom Exception Hierarchies
  - Exception Chaining with `from` (preserving root cause)
  - Context Managers via `__enter__` and `__exit__`
  - Contextlib `@contextmanager` decorator
"""

import time
from contextlib import contextmanager

class AppError(Exception):
    pass

class DatabaseConnectionError(AppError):
    pass

class TimerContext:
    def __enter__(self):
        self.start = time.perf_counter()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        duration = time.perf_counter() - self.start
        print(f"[Context Block] Finished in {duration:.6f}s")
        return False

@contextmanager
def temporary_flag(holder: dict, key: str, temp_value):
    original = holder.get(key)
    holder[key] = temp_value
    try:
        yield holder
    finally:
        holder[key] = original

def simulate_db_query(success: bool):
    try:
        if not success:
            raise ConnectionRefusedError("Underlying TCP socket dropped connection")
    except ConnectionRefusedError as root_err:
        raise DatabaseConnectionError("Failed to connect to primary DB cluster") from root_err

if __name__ == "__main__":
    with TimerContext():
        time.sleep(0.05)

    flags = {'maintenance_mode': False}
    with temporary_flag(flags, 'maintenance_mode', True):
        print("Inside context, maintenance_mode:", flags['maintenance_mode'])
    print("Outside context, maintenance_mode:", flags['maintenance_mode'])

    try:
        simulate_db_query(False)
    except DatabaseConnectionError as e:
        print(f"Caught handled error: {e}")
        print(f"Root cause was: {e.__cause__}")
