/**
 * DSA Topic 12: Graph Adjacency List
 */
class Graph<T extends string | number> {
  adj = new Map<T, T[]>();

  addEdge(u: T, v: T): void {
    if (!this.adj.has(u)) this.adj.set(u, []);
    if (!this.adj.has(v)) this.adj.set(v, []);
    this.adj.get(u)!.push(v);
    this.adj.get(v)!.push(u);
  }
}

const g = new Graph<string>();
g.addEdge("NodeA", "NodeB");
console.log("Adj map size:", g.adj.size);
