"""
DSA Topic 18: Dijkstra\'s Shortest Path Algorithm
Concepts Covered:
  - Priority Queue (heapq) driven exploration
  - Distance relaxation rule: dist[v] = min(dist[v], dist[u] + weight)
  - Time complexity: O((V + E) log V)
"""

import heapq

def dijkstra(graph: dict, start_node) -> dict:
    distances = {node: float('inf') for node in graph}
    distances[start_node] = 0
    pq = [(0, start_node)]  # (cost, node)

    while pq:
        curr_dist, u = heapq.heappop(pq)
        if curr_dist > distances[u]:
            continue
        for neighbor, weight in graph[u]:
            dist = curr_dist + weight
            if dist < distances[neighbor]:
                distances[neighbor] = dist
                heapq.heappush(pq, (dist, neighbor))
    return distances

if __name__ == "__main__":
    weighted_graph = {
        'A': [('B', 4), ('C', 2)],
        'B': [('A', 4), ('C', 1), ('D', 5)],
        'C': [('A', 2), ('B', 1), ('D', 8), ('E', 10)],
        'D': [('B', 5), ('C', 8), ('E', 2)],
        'E': [('C', 10), ('D', 2)]
    }
    print("Shortest distances from 'A':", dijkstra(weighted_graph, 'A'))
