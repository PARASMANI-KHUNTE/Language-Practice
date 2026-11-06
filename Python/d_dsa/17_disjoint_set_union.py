"""
DSA Topic 17: Disjoint Set Union (DSU / Union-Find)
Concepts Covered:
  - Path compression optimization
  - Union by rank/size
  - Cycle detection in undirected graphs
"""

class DisjointSetUnion:
    def __init__(self, n: int):
        self.parent = list(range(n))
        self.rank = [0] * n

    def find(self, i: int) -> int:
        if self.parent[i] == i:
            return i
        self.parent[i] = self.find(self.parent[i])  # Path compression
        return self.parent[i]

    def union(self, i: int, j: int) -> bool:
        root_i = self.find(i)
        root_j = self.find(j)
        if root_i == root_j:
            return False  # Already in same set (Cycle!)
        # Union by rank
        if self.rank[root_i] < self.rank[root_j]:
            self.parent[root_i] = root_j
        elif self.rank[root_i] > self.rank[root_j]:
            self.parent[root_j] = root_i
        else:
            self.parent[root_j] = root_i
            self.rank[root_i] += 1
        return True

if __name__ == "__main__":
    dsu = DisjointSetUnion(5)
    dsu.union(0, 1)
    dsu.union(1, 2)
    print("0 and 2 connected?", dsu.find(0) == dsu.find(2))
    print("0 and 3 connected?", dsu.find(0) == dsu.find(3))
