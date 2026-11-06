"""
Topic: High-Performance Data Structures with `collections`
Concepts Covered:
  - Counter for frequency counting
  - defaultdict for automatic key defaults
  - namedtuple for lightweight typed records
  - deque for O(1) appends and pops on both ends
"""

from collections import Counter, defaultdict, namedtuple, deque

def demo_counter():
    words = ['apple', 'banana', 'orange', 'apple', 'apple', 'banana', 'kiwi']
    counts = Counter(words)
    print("Top 2 words:", counts.most_common(2))

def demo_defaultdict():
    grouped = defaultdict(list)
    records = [('IT', 'Alice'), ('HR', 'Bob'), ('IT', 'Charlie'), ('Sales', 'Dana')]
    for department, employee in records:
        grouped[department].append(employee)
    print("Department Roster:", dict(grouped))

def demo_namedtuple():
    Point3D = namedtuple('Point3D', ['x', 'y', 'z'])
    p = Point3D(10, 20, 30)
    print(f"Point coordinates: x={p.x}, y={p.y}, z={p.z}")

def demo_deque():
    queue = deque(maxlen=4)
    for i in range(1, 6):
        queue.append(i)
    print("Deque after appending 1..5 with maxlen 4:", list(queue))
    queue.appendleft(99)
    print("After appendleft(99):", list(queue))

if __name__ == "__main__":
    demo_counter()
    demo_defaultdict()
    demo_namedtuple()
    demo_deque()
