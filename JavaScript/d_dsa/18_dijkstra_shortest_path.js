/**
 * DSA Topic 18: Dijkstra Shortest Path
 */
function dijkstra(graph, start) {
  const dist = {};
  for (const node in graph) dist[node] = Infinity;
  dist[start] = 0;
  const unvisited = new Set(Object.keys(graph));

  while (unvisited.size > 0) {
    let curr = null;
    for (const node of unvisited) {
      if (curr === null || dist[node] < dist[curr]) curr = node;
    }
    if (dist[curr] === Infinity) break;
    unvisited.delete(curr);

    for (const [neighbor, weight] of graph[curr]) {
      const alt = dist[curr] + weight;
      if (alt < dist[neighbor]) dist[neighbor] = alt;
    }
  }
  return dist;
}

const weighted = {
  A: [['B', 1], ['C', 4]],
  B: [['C', 2], ['D', 5]],
  C: [['D', 1]],
  D: []
};
console.log("Dijkstra distances from A:", dijkstra(weighted, 'A'));
