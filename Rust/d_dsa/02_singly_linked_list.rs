// DSA Topic 02: Singly Linked List with Option<Box<Node>>
#[derive(Debug)]
struct Node {
    val: i32,
    next: Option<Box<Node>>,
}

struct LinkedList {
    head: Option<Box<Node>>,
}

impl LinkedList {
    fn new() -> Self { LinkedList { head: None } }

    fn push_front(&mut self, val: i32) {
        let new_node = Box::new(Node {
            val,
            next: self.head.take(),
        });
        self.head = Some(new_node);
    }
}

fn main() {
    let mut list = LinkedList::new();
    list.push_front(30);
    list.push_front(20);
    list.push_front(10);
    println!("Linked List constructed: {:?}", list.head);
}
