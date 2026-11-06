// Topic: Vectors (Vec<T>)
// Concepts Covered:
//   - Initializing vectors: Vec::new() and vec! macro
//   - Mutating: push, pop, insert, remove
//   - Safe element access: get() returning Option
//   - Iterating over vector values and mutable references

fn main() {
    let mut numbers: Vec<i32> = vec![1, 2, 3, 4];
    numbers.push(5);
    numbers.push(6);

    println!("Vector length: {}, capacity: {}", numbers.len(), numbers.capacity());

    // Safe retrieval via .get
    match numbers.get(10) {
        Some(val) => println!("10th element: {}", val),
        None => println!("Index 10 out of bounds (handled safely!)"),
    }

    // In-place mutation during iteration
    for num in &mut numbers {
        *num *= 10;
    }

    println!("Multiplied numbers: {:?}", numbers);
}
