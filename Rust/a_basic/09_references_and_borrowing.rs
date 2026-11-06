// =============================================================================
// Topic: References and Borrowing
// Key Concepts: &T, &mut T, borrowing rules, dangling references
// =============================================================================

// References allow you to refer to a value WITHOUT taking ownership.
// This is called "borrowing" — like borrowing a book, you use it but don't own it.

// THE TWO BORROWING RULES:
//   1. At any given time, you can have EITHER:
//      - One mutable reference (&mut T), OR
//      - Any number of immutable references (&T)
//   2. References must always be valid (no dangling references).

fn main() {
    // =========================================================================
    // IMMUTABLE REFERENCES (&T)
    // =========================================================================
    println!("--- Immutable References ---");

    let s1 = String::from("hello");

    // `&s1` creates a reference to s1 without taking ownership.
    let len = calculate_length(&s1);
    println!("'{}' has length {}", s1, len);  // s1 is still valid!

    // Multiple immutable references are allowed:
    let r1 = &s1;
    let r2 = &s1;
    let r3 = &s1;
    println!("Three refs: {}, {}, {}", r1, r2, r3);  // All valid!

    // =========================================================================
    // MUTABLE REFERENCES (&mut T)
    // =========================================================================
    println!("\n--- Mutable References ---");

    let mut s2 = String::from("hello");
    println!("Before: {}", s2);

    // `&mut s2` creates a mutable reference — allows modification.
    change(&mut s2);
    println!("After: {}", s2);  // "hello, world"

    // RESTRICTION: Only ONE mutable reference at a time!
    let mut s3 = String::from("hello");
    let r1 = &mut s3;
    // let r2 = &mut s3;  // ERROR: cannot borrow `s3` as mutable more than once
    r1.push_str("!");
    println!("r1: {}", r1);

    // This prevents data races at compile time. Data races occur when:
    // - Two or more pointers access the same data at the same time
    // - At least one is writing
    // - There's no synchronization

    // You CAN have multiple mutable references in different scopes:
    let mut s4 = String::from("hello");
    {
        let r1 = &mut s4;
        r1.push_str(" inner");
        println!("r1: {}", r1);
    }   // r1 goes out of scope, so we can make a new mutable reference
    let r2 = &mut s4;
    r2.push_str(" outer");
    println!("r2: {}", r2);

    // =========================================================================
    // MIXING MUTABLE AND IMMUTABLE REFERENCES
    // =========================================================================
    println!("\n--- Mixing References ---");

    // Cannot have mutable ref while immutable refs exist:
    let mut s5 = String::from("hello");
    let r1 = &s5;      // OK
    let r2 = &s5;      // OK
    // let r3 = &mut s5;  // ERROR: cannot borrow as mutable while immutable refs exist
    println!("{} and {}", r1, r2);
    // r1 and r2 are no longer used after this point (NLL - Non-Lexical Lifetimes)

    // Now we CAN create a mutable reference (NLL: ref lifetime ends at last use):
    let r3 = &mut s5;
    r3.push_str(" world");
    println!("r3: {}", r3);

    // =========================================================================
    // REFERENCES IN FUNCTIONS
    // =========================================================================
    println!("\n--- References in Functions ---");

    // Passing references (borrowing):
    let word = String::from("supercalifragilistic");
    let first = first_word(&word);
    println!("First word of '{}': {}", word, first);

    // Mutable references in functions:
    let mut numbers = vec![3, 1, 4, 1, 5];
    println!("Before sort: {:?}", numbers);
    sort_vec(&mut numbers);
    println!("After sort:  {:?}", numbers);

    // =========================================================================
    // REFERENCE RULES DEMONSTRATED
    // =========================================================================
    println!("\n--- Reference Rules ---");

    // Rule: References must be valid. No dangling references!
    // fn dangle() -> &String {     // ERROR!
    //     let s = String::from("hello");
    //     &s  // `s` is dropped when function returns!
    // }      // Would return a reference to freed memory

    // Instead, return the owned value:
    let not_dangling = no_dangle();
    println!("Not dangling: {}", not_dangling);

    // =========================================================================
    // DEREFERENCING
    // =========================================================================
    println!("\n--- Dereferencing ---");

    let x = 5;
    let y = &x;

    // *y dereferences to get the value
    println!("x = {}, *y = {}", x, *y);
    assert_eq!(5, x);
    assert_eq!(5, *y);
    // assert_eq!(5, y);  // ERROR: can't compare i32 with &i32

    // For method calls, Rust auto-dereferences (deref coercion):
    let s = String::from("hello");
    let r = &s;
    println!("Length via ref: {}", r.len());  // Auto-deref: same as (*r).len()

    // =========================================================================
    // PRACTICAL PATTERNS
    // =========================================================================
    println!("\n--- Practical Patterns ---");

    // Pattern 1: Read-only access with immutable references
    let data = vec![1, 2, 3, 4, 5];
    let sum = sum_vec(&data);
    let avg = average(&data);
    println!("Data: {:?}, Sum: {}, Avg: {:.1}", data, sum, avg);

    // Pattern 2: In-place modification with mutable references
    let mut values = vec![1, 2, 3, 4, 5];
    double_values(&mut values);
    println!("Doubled: {:?}", values);

    // Pattern 3: Multiple readers, single writer
    let mut shared_data = String::from("initial");
    read_data(&shared_data);
    read_data(&shared_data);
    modify_data(&mut shared_data);
    read_data(&shared_data);

    println!("\n--- References and borrowing demo complete! ---");
}

// --- Takes an immutable reference (borrows the value) ---
fn calculate_length(s: &String) -> usize {
    s.len()
    // s goes out of scope, but since it doesn't own the String, nothing is dropped
}

// --- Takes a mutable reference (can modify the value) ---
fn change(s: &mut String) {
    s.push_str(", world");
}

// --- Returns a reference to part of the input (string slice) ---
fn first_word(s: &str) -> &str {
    for (i, byte) in s.bytes().enumerate() {
        if byte == b' ' {
            return &s[..i];
        }
    }
    s  // Return the whole string if no space found
}

// --- Sorts a vector in-place using mutable reference ---
fn sort_vec(v: &mut Vec<i32>) {
    v.sort();
}

// --- Returns an owned value (no dangling reference) ---
fn no_dangle() -> String {
    String::from("no dangle here")
}

// --- Immutable borrow for reading ---
fn sum_vec(v: &Vec<i32>) -> i32 {
    v.iter().sum()
}

fn average(v: &Vec<i32>) -> f64 {
    let sum: i32 = v.iter().sum();
    sum as f64 / v.len() as f64
}

// --- Mutable borrow for modification ---
fn double_values(v: &mut Vec<i32>) {
    for val in v.iter_mut() {
        *val *= 2;
    }
}

fn read_data(data: &String) {
    println!("  Reading: {}", data);
}

fn modify_data(data: &mut String) {
    data.push_str(" + modified");
    println!("  Modified to: {}", data);
}
