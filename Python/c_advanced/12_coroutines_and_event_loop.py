"""
Topic: Advanced Coroutines, Pipelines, and Custom Async Flow
Concepts Covered:
  - Generator-based coroutine pipelines (send, throw, close)
  - Async generators (`async def` with `yield`)
  - Consuming async streams with `async for`
  - Building a miniature event-driven pipeline
"""

import asyncio

async def async_event_stream(limit: int):
    """Produces asynchronous event stream."""
    for i in range(1, limit + 1):
        await asyncio.sleep(0.01)
        yield f"Event-{i}"

async def run_pipeline():
    print("Consuming async stream:")
    async for event in async_event_stream(4):
        print(f"  Processed: {event}")

# Generator coroutine pipeline
def consumer_sink():
    print("[Sink initialized]")
    try:
        while True:
            val = yield
            print(f"[Sink] Received payload: {val}")
    except GeneratorExit:
        print("[Sink closed]")

if __name__ == "__main__":
    asyncio.run(run_pipeline())
    print("\nClassic Coroutine Pipeline:")
    sink = consumer_sink()
    next(sink)  # Prime coroutine
    sink.send("Data-1")
    sink.send("Data-2")
    sink.close()
