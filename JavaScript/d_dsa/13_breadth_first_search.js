/**
 * DSA Topic 13: BFS Shortest Path
 */
function bfs(graph, start, target) {
  const queue = [[start]];
  const visited = new Set([start]);
  while (queue.length > 0) {
    const path = queue.shift();
    const node = path[path.length - 1];
    if (node === target) return path;
    for (const neighbor of graph[node] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return null;
}

const net = { A: ['B', 'C'], B: ['D'], C: ['D'], D: ['E'] };
console.log("Shortest Path A->E:", bfs(net, 'A', 'E'));
