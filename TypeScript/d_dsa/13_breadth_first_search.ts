/**
 * DSA Topic 13: BFS Shortest Path
 */
function bfs(graph: Record<string, string[]>, start: string, target: string): string[] | null {
  const queue: string[][] = [[start]];
  const visited = new Set<string>([start]);

  while (queue.length > 0) {
    const path = queue.shift()!;
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

console.log("Path:", bfs({ A: ["B"], B: ["C"], C: [] }, "A", "C"));
