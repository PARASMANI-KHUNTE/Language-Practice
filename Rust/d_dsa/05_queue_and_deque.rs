// DSA Topic 05: VecDeque (Circular Queue)
use std::collections::VecDeque;

fn main() {
    let mut q = VecDeque::new();
    q.push_back("Job-1");
    q.push_back("Job-2");
    println!("Dequeued: {:?}", q.pop_front());
    q.push_front("Urgent-Job");
    println!("Dequeued: {:?}", q.pop_front());
}
