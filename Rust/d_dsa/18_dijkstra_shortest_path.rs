// DSA Topic 18: Dijkstra Shortest Path
use std::cmp::Ordering;
use std::collections::BinaryHeap;

#[derive(Copy, Clone, Eq, PartialEq)]
struct State {
    cost: usize,
    position: usize,
}

impl Ord for State {
    fn cmp(&self, other: &Self) -> Ordering {
        other.cost.cmp(&self.cost) // Min-heap inversion
    }
}

impl PartialOrd for State {
    fn partial_cmp(&self, other: &Self) -> Option<Ordering> { Some(self.cmp(other)) }
}

fn main() {
    let mut heap = BinaryHeap::new();
    heap.push(State { cost: 10, position: 1 });
    heap.push(State { cost: 5, position: 2 });
    println!("Cheapest node: {}", heap.pop().unwrap().position);
}
