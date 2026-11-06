// DSA Topic 14: DFS Traversal
use std::collections::{HashMap, HashSet};

fn dfs<'a>(graph: &HashMap<&'a str, Vec<&'a str>>, node: &'a str, visited: &mut HashSet<&'a str>, order: &mut Vec<&'a str>) {
    if visited.insert(node) {
        order.push(node);
        if let Some(neighbors) = graph.get(node) {
            for &n in neighbors {
                dfs(graph, n, visited, order);
            }
        }
    }
}

fn main() {
    let mut g = HashMap::new();
    g.insert("A", vec!["B"]);
    let mut visited = HashSet::new();
    let mut order = Vec::new();
    dfs(&g, "A", &mut visited, &mut order);
    println!("DFS order: {:?}", order);
}
