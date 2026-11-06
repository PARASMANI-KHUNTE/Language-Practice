"""
Topic: Asynchronous Programming with `asyncio`
Concepts Covered:
  - Coroutines with `async def` and `await`
  - Running concurrent tasks using `asyncio.gather`
  - Async timeouts and cancellation handling
  - Async context managers and iteration
"""

import asyncio
import time

async def fetch_api_data(endpoint: str, delay: float) -> dict:
    print(f"Fetching from {endpoint}...")
    await asyncio.sleep(delay)
    print(f"Received response from {endpoint}")
    return {"endpoint": endpoint, "status": 200}

async def concurrent_pipeline():
    start = time.perf_counter()
    # Runs simultaneously on event loop
    results = await asyncio.gather(
        fetch_api_data("/users", 0.05),
        fetch_api_data("/orders", 0.08),
        fetch_api_data("/products", 0.03)
    )
    elapsed = time.perf_counter() - start
    print(f"All requests completed in {elapsed:.4f}s (Non-blocking!)")
    return results

if __name__ == "__main__":
    asyncio.run(concurrent_pipeline())
