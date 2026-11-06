"""
Topic: Multithreading and Concurrency
Concepts Covered:
  - threading.Thread creation and starting
  - Thread synchronization using threading.Lock
  - Race condition demonstration and mitigation
  - Daemon threads vs non-daemon threads
  - Producer-Consumer pattern with queue.Queue
"""

import threading
import time
import queue

counter = 0
counter_lock = threading.Lock()

def increment_worker(n_times: int):
    global counter
    for _ in range(n_times):
        with counter_lock:
            counter += 1

def producer_consumer_demo():
    work_queue = queue.Queue(maxsize=5)

    def producer():
        for i in range(1, 6):
            item = f"Job-{i}"
            work_queue.put(item)
            print(f"[Producer] Produced {item}")
            time.sleep(0.01)

    def consumer():
        while True:
            try:
                item = work_queue.get(timeout=0.1)
                print(f"[Consumer] Processed {item}")
                work_queue.task_done()
            except queue.Empty:
                break

    t_prod = threading.Thread(target=producer)
    t_cons = threading.Thread(target=consumer)
    t_prod.start()
    t_cons.start()
    t_prod.join()
    t_cons.join()

if __name__ == "__main__":
    print("--- Thread Synchronization with Lock ---")
    threads = [threading.Thread(target=increment_worker, args=(10000,)) for _ in range(4)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    print(f"Final Counter value (expected 40000): {counter}")

    print("\n--- Producer / Consumer Queue Pattern ---")
    producer_consumer_demo()
