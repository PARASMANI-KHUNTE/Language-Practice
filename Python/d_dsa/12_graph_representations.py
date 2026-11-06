"""
DSA Topic 12: Graph Representations
Concepts Covered:
  - Adjacency Matrix representation
  - Adjacency List representation (using Dictionary of Lists)
  - Space and time tradeoffs for dense vs sparse graphs
"""

class GraphAdjList:
    def __init__(self, directed: bool = False):
        self.adj = {}
        self.directed = directed

    def add_edge(self, u, v):
        self.adj.setdefault(u, []).append(v)
        if not self.directed:
            self.adj.setdefault(v, []).append(u)

    def display(self):
        print("Adjacency List:")
        for node, neighbors in self.adj.items():
            print(f"  {node} -> {neighbors}")

if __name__ == "__main__":
    g = GraphAdjList()
    g.add_edge("A", "B")
    g.add_edge("A", "C")
    g.add_edge("B", "D")
    g.add_edge("C", "D")
    g.display()
