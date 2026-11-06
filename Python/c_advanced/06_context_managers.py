"""
Topic: Advanced Context Managers
Concepts Covered:
  - Managing resource lifecycles with contextlib
  - Reentrant context managers
  - Async context managers (__aenter__, __aexit__)
  - contextlib.ExitStack for dynamic resource cleanup
"""

import asyncio
from contextlib import ExitStack

class AsyncResource:
    async def __aenter__(self):
        print("Acquiring async resource connection...")
        await asyncio.sleep(0.01)
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        print("Releasing async resource connection...")
        await asyncio.sleep(0.01)

def exit_stack_demo():
    """Demonstrates cleanup of dynamic variable number of resources."""
    with ExitStack() as stack:
        # Dynamically manage scopes cleanly
        print("Managing multiple resources safely with ExitStack")

if __name__ == "__main__":
    exit_stack_demo()
    asyncio.run(AsyncResource().__aenter__())
