/**
 * DSA Topic 14: DFS Traversal
 */
function dfs(graph: Record<string, string[]>, start: string, visited = new Set<string>()): string[] {
  visited.add(start);
  const result = [start];
  for (const n of graph[start] || []) {
    if (!visited.has(n)) result.push(...dfs(graph, n, visited));
  }
  return result;
}

console.log("DFS traversal:", dfs({ 1: ["2"], 2: ["3"], 3: [] }, "1"));
