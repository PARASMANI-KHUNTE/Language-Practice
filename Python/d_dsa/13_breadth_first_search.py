"""
DSA Topic 13: Breadth-First Search (BFS)
Concepts Covered:
  - Level-by-level traversal using Queue
  - Visited set to avoid cycles
  - Finding shortest path in an unweighted graph
"""

from collections import deque

def bfs_shortest_path(graph: dict, start, target) -> list | None:
    queue = deque([[start]])
    visited = {start}

    while queue:
        path = queue.popleft()
        node = path[-1]
        if node == target:
            return path
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(path + [neighbor])
    return None

if __name__ == "__main__":
    graph = {
        'A': ['B', 'C'],
        'B': ['A', 'D', 'E'],
        'C': ['A', 'F'],
        'D': ['B'],
        'E': ['B', 'F'],
        'F': ['C', 'E']
    }
    print("Shortest path from A to F via BFS:", bfs_shortest_path(graph, 'A', 'F'))
