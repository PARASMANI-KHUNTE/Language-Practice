/**
 * DSA Topic 14: DFS Traversal
 */
function dfs(graph, start, visited = new Set(), order = []) {
  visited.add(start);
  order.push(start);
  for (const n of graph[start] || []) {
    if (!visited.has(n)) dfs(graph, n, visited, order);
  }
  return order;
}

const graph = { 1: [2, 3], 2: [4], 3: [5], 4: [], 5: [] };
console.log("DFS Order:", dfs(graph, 1));
