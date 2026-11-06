// DSA Topic 10: Binary Search Tree
#[derive(Debug)]
struct BSTNode {
    val: i32,
    left: Option<Box<BSTNode>>,
    right: Option<Box<BSTNode>>,
}

impl BSTNode {
    fn new(val: i32) -> Self { BSTNode { val, left: None, right: None } }

    fn insert(&mut self, val: i32) {
        if val < self.val {
            match self.left {
                Some(ref mut n) => n.insert(val),
                None => self.left = Some(Box::new(BSTNode::new(val))),
            }
        } else if val > self.val {
            match self.right {
                Some(ref mut n) => n.insert(val),
                None => self.right = Some(Box::new(BSTNode::new(val))),
            }
        }
    }
}

fn main() {
    let mut root = BSTNode::new(50);
    root.insert(30);
    root.insert(70);
    println!("BST root: {:?}", root.val);
}
