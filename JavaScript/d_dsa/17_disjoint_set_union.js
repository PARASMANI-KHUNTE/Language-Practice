/**
 * DSA Topic 17: Disjoint Set Union (Union-Find)
 */
class DSU {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
  find(i) {
    if (this.parent[i] === i) return i;
    return this.parent[i] = this.find(this.parent[i]);
  }
  union(i, j) {
    const rootI = this.find(i), rootJ = this.find(j);
    if (rootI === rootJ) return false;
    this.parent[rootI] = rootJ;
    return true;
  }
}

const dsu = new DSU(4);
dsu.union(0, 1);
dsu.union(1, 2);
console.log("Connected 0 and 2?", dsu.find(0) === dsu.find(2));
