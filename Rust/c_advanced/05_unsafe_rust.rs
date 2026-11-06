// Topic: Unsafe Rust: Raw Pointers and Unsafe Blocks
// Concepts Covered:
//   - The unsafe keyword
//   - Dereferencing raw pointers (*const T, *mut T)
//   - Foreign Function Interface (FFI) principles
//   - Maintaining safe abstractions over unsafe internals

fn main() {
    let mut num = 42;

    // Creating raw pointers is safe...
    let r1 = &num as *const i32;
    let r2 = &mut num as *mut i32;

    // ...but dereferencing them requires an unsafe block
    unsafe {
        println!("r1 points to: {}", *r1);
        *r2 = 99;
        println!("Modified via raw pointer r2: {}", *r2);
    }

    println!("Final num value: {}", num);
}
