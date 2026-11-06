/**
 * DSA Topic 12: Graph Adjacency List
 */
class Graph {
  constructor() { this.adj = new Map(); }
  addEdge(u, v) {
    if (!this.adj.has(u)) this.adj.set(u, []);
    if (!this.adj.has(v)) this.adj.set(v, []);
    this.adj.get(u).push(v);
    this.adj.get(v).push(u);
  }
}

const g = new Graph();
g.addEdge("A", "B"); g.addEdge("B", "C");
console.log("Graph representation:", g.adj);
