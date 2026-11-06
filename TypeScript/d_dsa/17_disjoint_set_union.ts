/**
 * DSA Topic 17: Disjoint Set Union
 */
class DSU {
  private parent: number[];
  constructor(n: number) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
  find(i: number): number {
    if (this.parent[i] === i) return i;
    return (this.parent[i] = this.find(this.parent[i]));
  }
  union(i: number, j: number): boolean {
    const rootI = this.find(i), rootJ = this.find(j);
    if (rootI === rootJ) return false;
    this.parent[rootI] = rootJ;
    return true;
  }
}

const dsu = new DSU(5);
dsu.union(0, 1);
console.log("0 and 1 connected?", dsu.find(0) === dsu.find(1));
