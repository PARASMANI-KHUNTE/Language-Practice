// Topic: Smart Pointers (Box, Rc, Arc, RefCell)
// Concepts Covered:
//   - Box<T> for heap allocation and recursive types
//   - Rc<T> for reference-counted single-threaded multiple ownership
//   - RefCell<T> for interior mutability pattern

use std::rc::Rc;
use std::cell::RefCell;

// Recursive type requires Box to have known compile-time size
enum List {
    Cons(i32, Box<List>),
    Nil,
}

fn main() {
    let b = Box::new(5);
    println!("Heap allocated box value: {}", b);

    // Rc with interior mutability (Rc<RefCell<T>>)
    let shared_val = Rc::new(RefCell::new(100));

    let clone_a = Rc::clone(&shared_val);
    let clone_b = Rc::clone(&shared_val);

    *clone_a.borrow_mut() += 50;
    println!("Value read from clone_b: {}", *clone_b.borrow());
    println!("Reference count: {}", Rc::strong_count(&shared_val));
}
