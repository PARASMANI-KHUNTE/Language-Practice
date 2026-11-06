// Topic: Advanced Collections in std::collections
// Concepts Covered:
//   - VecDeque (double-ended queue)
//   - BTreeMap and BTreeSet (ordered key-value collections)
//   - HashSet operations (union, intersection, difference)

use std::collections::{VecDeque, BTreeMap, HashSet};

fn main() {
    // VecDeque
    let mut deque = VecDeque::new();
    deque.push_back(10);
    deque.push_front(20);
    println!("Deque popped front: {:?}", deque.pop_front());

    // BTreeMap keeps entries sorted by key
    let mut scores = BTreeMap::new();
    scores.insert("Charlie", 85);
    scores.insert("Alice", 95);
    scores.insert("Bob", 90);
    println!("Sorted BTreeMap entries:");
    for (name, score) in &scores {
        println!("  {}: {}", name, score);
    }

    // Set operations
    let set_a: HashSet<_> = [1, 2, 3, 4].into_iter().collect();
    let set_b: HashSet<_> = [3, 4, 5, 6].into_iter().collect();
    let intersection: HashSet<_> = set_a.intersection(&set_b).cloned().collect();
    println!("Intersection: {:?}", intersection);
}
