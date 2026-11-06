// DSA Topic 17: Disjoint Set Union (Union-Find)
struct DSU {
    parent: Vec<usize>,
}

impl DSU {
    fn new(n: usize) -> Self { DSU { parent: (0..n).collect() } }

    fn find(&mut self, i: usize) -> usize {
        if self.parent[i] == i { i }
        else {
            let p = self.find(self.parent[i]);
            self.parent[i] = p;
            p
        }
    }

    fn union(&mut self, i: usize, j: usize) -> bool {
        let root_i = self.find(i);
        let root_j = self.find(j);
        if root_i == root_j { return false; }
        self.parent[root_i] = root_j;
        true
    }
}

fn main() {
    let mut dsu = DSU::new(5);
    dsu.union(0, 1);
    println!("0 and 1 connected: {}", dsu.find(0) == dsu.find(1));
}
