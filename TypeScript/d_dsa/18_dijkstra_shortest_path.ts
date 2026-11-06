/**
 * DSA Topic 18: Dijkstra Shortest Path
 */
type Graph = Record<string, Array<[neighbor: string, weight: number]>>;

function dijkstra(graph: Graph, start: string): Record<string, number> {
  const dist: Record<string, number> = {};
  for (const node in graph) dist[node] = Infinity;
  dist[start] = 0;
  const unvisited = new Set(Object.keys(graph));

  while (unvisited.size > 0) {
    let curr: string | null = null;
    for (const node of unvisited) {
      if (curr === null || dist[node] < dist[curr]) curr = node;
    }
    if (curr === null || dist[curr] === Infinity) break;
    unvisited.delete(curr);

    for (const [neighbor, weight] of graph[curr] || []) {
      const alt = dist[curr] + weight;
      if (alt < dist[neighbor]) dist[neighbor] = alt;
    }
  }
  return dist;
}

console.log("Shortest distances:", dijkstra({ A: [["B", 4]], B: [] }, "A"));
