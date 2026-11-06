/**
 * DSA Topic 19: Topological Sort (Kahn's Algorithm)
 */
function topoSort(n: number, edges: Array<[src: number, dest: number]>): number[] {
  const inDegree = new Array(n).fill(0);
  const adj = Array.from({ length: n }, () => [] as number[]);

  for (const [src, dest] of edges) {
    adj[src].push(dest);
    inDegree[dest]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < n; i++) if (inDegree[i] === 0) queue.push(i);

  const order: number[] = [];
  while (queue.length > 0) {
    const node = queue.shift()!;
    order.push(node);
    for (const next of adj[node]) {
      if (--inDegree[next] === 0) queue.push(next);
    }
  }
  return order.length === n ? order : [];
}

console.log("Topo order:", topoSort(3, [[0, 1], [1, 2]]));
