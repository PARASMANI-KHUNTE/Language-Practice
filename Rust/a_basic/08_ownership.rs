// =============================================================================
// Topic: Ownership
// Key Concepts: Move semantics, copy, clone, ownership rules, scope
// =============================================================================

// Ownership is Rust's most unique feature. It enables memory safety without
// a garbage collector. The three rules of ownership:
//   1. Each value in Rust has an OWNER (a variable).
//   2. There can only be ONE owner at a time.
//   3. When the owner goes out of scope, the value is DROPPED (freed).

fn main() {
    // =========================================================================
    // SCOPE AND DROP
    // =========================================================================
    println!("--- Scope and Drop ---");
    {
        let s = String::from("hello");  // s is valid from here
        println!("Inside scope: {}", s);
    }   // s goes out of scope here — String memory is freed (drop is called)
    // println!("{}", s);  // ERROR: s is no longer valid

    // =========================================================================
    // MOVE SEMANTICS (for heap-allocated types)
    // =========================================================================
    println!("\n--- Move Semantics ---");
    // For heap data (String, Vec, etc.), assignment MOVES the value.
    let s1 = String::from("hello");
    let s2 = s1;  // s1 is MOVED to s2. s1 is now invalid!
    // println!("{}", s1);  // ERROR: value borrowed here after move
    println!("s2 = {}", s2);

    // Why? To prevent double-free errors. Only one variable "owns" the heap data.
    // Think of it like giving away a book — you no longer have it.

    // Move also happens with function calls:
    let s3 = String::from("world");
    takes_ownership(s3);  // s3 is moved into the function
    // println!("{}", s3);  // ERROR: s3 was moved

    // And with return values:
    let s4 = gives_ownership();
    println!("Got ownership: {}", s4);

    let s5 = String::from("hello");
    let s6 = takes_and_gives_back(s5);
    // println!("{}", s5);  // ERROR: s5 was moved
    println!("Got it back: {}", s6);

    // =========================================================================
    // COPY SEMANTICS (for stack-allocated types)
    // =========================================================================
    println!("\n--- Copy Semantics ---");
    // Simple scalar types implement the `Copy` trait.
    // They are COPIED, not moved (because copying is cheap for stack data).

    let x = 42;
    let y = x;  // x is COPIED, not moved! Both are valid.
    println!("x = {}, y = {}", x, y);  // Both work!

    // Types that implement Copy:
    // - All integer types (i32, u64, etc.)
    // - Boolean (bool)
    // - Floating-point types (f32, f64)
    // - Character (char)
    // - Tuples of Copy types: (i32, bool) is Copy, (i32, String) is NOT

    let a = 5;
    makes_copy(a);
    println!("a is still valid: {}", a);  // Works! a was copied

    // Tuples of Copy types are also Copy:
    let point = (1, 2);
    let point2 = point;
    println!("point: {:?}, point2: {:?}", point, point2);  // Both valid

    // But tuples containing non-Copy types are moved:
    let mixed = (1, String::from("hello"));
    let _mixed2 = mixed;
    // println!("{:?}", mixed);  // ERROR: mixed was moved

    // =========================================================================
    // CLONE — Explicit Deep Copy
    // =========================================================================
    println!("\n--- Clone ---");
    // Use `.clone()` to create a deep copy of heap data.
    let s7 = String::from("deep copy me");
    let s8 = s7.clone();  // Both s7 and s8 are valid!
    println!("s7 = {}, s8 = {}", s7, s8);

    // Clone is explicit — Rust won't silently copy heap data.
    let v1 = vec![1, 2, 3];
    let v2 = v1.clone();
    println!("v1 = {:?}, v2 = {:?}", v1, v2);  // Both valid

    // =========================================================================
    // OWNERSHIP IN PRACTICE
    // =========================================================================
    println!("\n--- Practical examples ---");

    // Pattern: returning ownership to keep using the value
    let name = String::from("Rust");
    let (name, len) = calculate_length(name);
    println!("'{}' has length {}", name, len);

    // Better pattern: use references (covered in next lesson)
    // fn calculate_length(s: &String) -> usize { s.len() }

    // =========================================================================
    // OWNERSHIP WITH COLLECTIONS
    // =========================================================================
    println!("\n--- Ownership with collections ---");
    let mut names = Vec::new();
    let alice = String::from("Alice");
    names.push(alice);  // alice is moved INTO the vector
    // println!("{}", alice);  // ERROR: alice was moved

    // The vector owns its elements. When the vector is dropped,
    // all its elements are dropped too.
    println!("Names: {:?}", names);

    // Iterating can also transfer ownership:
    let words = vec![String::from("hello"), String::from("world")];
    for word in words {  // `words` is consumed (moved)
        println!("Word: {}", word);
    }
    // println!("{:?}", words);  // ERROR: words was moved

    // Use .iter() to borrow instead of consuming:
    let words2 = vec![String::from("foo"), String::from("bar")];
    for word in words2.iter() {  // Borrows, doesn't consume
        println!("Word: {}", word);
    }
    println!("words2 still valid: {:?}", words2);  // Works!

    println!("\n--- Ownership demo complete! ---");
}

// --- Function that takes ownership ---
fn takes_ownership(s: String) {
    println!("Took ownership of: {}", s);
}   // s is dropped here

// --- Function that gives ownership ---
fn gives_ownership() -> String {
    String::from("yours now")  // Returned value moves to the caller
}

// --- Function that takes and gives back ownership ---
fn takes_and_gives_back(s: String) -> String {
    println!("Borrowed temporarily: {}", s);
    s  // Return it back to the caller
}

// --- Function that receives a Copy type ---
fn makes_copy(n: i32) {
    println!("Got a copy: {}", n);
}   // n goes out of scope, nothing special happens (stack data)

// --- Returning ownership along with computed value ---
fn calculate_length(s: String) -> (String, usize) {
    let length = s.len();
    (s, length)  // Return the string AND the length
}
