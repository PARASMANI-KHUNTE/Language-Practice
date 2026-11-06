// DSA Topic 03: Doubly Linked List Architecture
use std::collections::LinkedList;

fn main() {
    // Idiomatic production Doubly Linked List in std
    let mut list = LinkedList::new();
    list.push_back(10);
    list.push_front(5);
    list.push_back(15);
    println!("Front: {:?}, Back: {:?}", list.front(), list.back());
}
