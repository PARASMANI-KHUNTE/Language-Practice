// DSA Topic 12: Graph Adjacency List
use std::collections::HashMap;

struct Graph {
    adj: HashMap<String, Vec<String>>,
}

impl Graph {
    fn new() -> Self { Graph { adj: HashMap::new() } }
    fn add_edge(&mut self, u: &str, v: &str) {
        self.adj.entry(u.to_string()).or_default().push(v.to_string());
    }
}

fn main() {
    let mut g = Graph::new();
    g.add_edge("A", "B");
    println!("Graph created.");
}
