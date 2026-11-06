// DSA Topic 11: BinaryHeap (Priority Queue)
use std::collections::BinaryHeap;

fn main() {
    let mut heap = BinaryHeap::new();
    heap.push(10);
    heap.push(50);
    heap.push(30);
    println!("Max Heap root extracted: {:?}", heap.pop()); // 50
}
