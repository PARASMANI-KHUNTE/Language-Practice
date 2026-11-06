// DSA Topic 13: BFS Graph Traversal
use std::collections::{HashMap, VecDeque, HashSet};

fn bfs(graph: &HashMap<&str, Vec<&str>>, start: &str) -> Vec<String> {
    let mut order = Vec::new();
    let mut queue = VecDeque::new();
    let mut visited = HashSet::new();

    queue.push_back(start);
    visited.insert(start);

    while let Some(node) = queue.pop_front() {
        order.push(node.to_string());
        if let Some(neighbors) = graph.get(node) {
            for &n in neighbors {
                if visited.insert(n) {
                    queue.push_back(n);
                }
            }
        }
    }
    order
}

fn main() {
    let mut g = HashMap::new();
    g.insert("A", vec!["B", "C"]);
    g.insert("B", vec!["D"]);
    println!("BFS order: {:?}", bfs(&g, "A"));
}
