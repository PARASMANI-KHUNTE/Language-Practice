"""
DSA Topic 19: Topological Sort for Directed Acyclic Graphs (DAGs)
Concepts Covered:
  - In-degree calculation
  - Kahn\'s Algorithm using Queue (BFS approach)
  - Cycle detection in directed graphs
"""

from collections import deque

def topological_sort_kahn(num_nodes: int, edges: list[tuple[int, int]]) -> list[int] | None:
    adj = {i: [] for i in range(num_nodes)}
    in_degree = [0] * num_nodes

    for u, v in edges:
        adj[u].append(v)
        in_degree[v] += 1

    queue = deque([i for i in range(num_nodes) if in_degree[i] == 0])
    topo_order = []

    while queue:
        node = queue.popleft()
        topo_order.append(node)
        for neighbor in adj[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)

    if len(topo_order) != num_nodes:
        return None  # Cycle detected!
    return topo_order

if __name__ == "__main__":
    # DAG representing course prerequisites
    prereqs = [(5, 2), (5, 0), (4, 0), (4, 1), (2, 3), (3, 1)]
    print("Topological order of execution:", topological_sort_kahn(6, prereqs))
