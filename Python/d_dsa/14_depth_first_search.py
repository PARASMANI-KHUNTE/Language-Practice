"""
DSA Topic 14: Depth-First Search (DFS)
Concepts Covered:
  - Recursive DFS traversal
  - Iterative DFS using explicit Stack
  - Connected components discovery
"""

def dfs_recursive(graph: dict, node, visited=None) -> list:
    if visited is None:
        visited = set()
    visited.add(node)
    order = [node]
    for neighbor in graph.get(node, []):
        if neighbor not in visited:
            order.extend(dfs_recursive(graph, neighbor, visited))
    return order

if __name__ == "__main__":
    graph = {
        1: [2, 3],
        2: [1, 4, 5],
        3: [1],
        4: [2],
        5: [2]
    }
    print("DFS Recursive Order starting from 1:", dfs_recursive(graph, 1))
