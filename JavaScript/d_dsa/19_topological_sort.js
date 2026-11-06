/**
 * DSA Topic 19: Topological Sort (Kahn's Algorithm)
 */
function topoSort(numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0);
  const adj = Array.from({ length: numCourses }, () => []);

  for (const [dest, src] of prerequisites) {
    adj[src].push(dest);
    inDegree[dest]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const order = [];
  while (queue.length > 0) {
    const node = queue.shift();
    order.push(node);
    for (const next of adj[node]) {
      if (--inDegree[next] === 0) queue.push(next);
    }
  }
  return order.length === numCourses ? order : [];
}

console.log("Course Schedule Topo Order:", topoSort(4, [[1,0],[2,0],[3,1],[3,2]]));
