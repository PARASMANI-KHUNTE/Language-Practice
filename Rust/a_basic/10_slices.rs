// =============================================================================
// Topic: Slices
// Key Concepts: String slices (&str), array slices (&[T]), range syntax
// =============================================================================

// A slice is a reference to a contiguous sequence of elements in a collection.
// It doesn't own the data — it's a "view" into existing data.
// A slice is a "fat pointer": pointer + length.

fn main() {
    // =========================================================================
    // STRING SLICES (&str)
    // =========================================================================
    println!("--- String Slices ---");

    let s = String::from("Hello, World!");

    // Create slices using range syntax [start..end]:
    let hello = &s[0..5];       // "Hello" (start inclusive, end exclusive)
    let world = &s[7..12];      // "World"
    println!("hello: {}, world: {}", hello, world);

    // Syntactic sugar:
    let from_start = &s[..5];   // Same as &s[0..5]
    let to_end = &s[7..];       // Same as &s[7..s.len()]
    let whole = &s[..];         // Same as &s[0..s.len()]
    println!("from_start: {}", from_start);
    println!("to_end: {}", to_end);
    println!("whole: {}", whole);

    // IMPORTANT: Slice indices must be at valid UTF-8 character boundaries!
    // let bad = &s[0..1]; // OK for ASCII, but could panic for multi-byte chars
    let russian = String::from("Привет");
    // Each Cyrillic char is 2 bytes in UTF-8
    let first_char = &russian[0..2];  // "П" (2 bytes)
    println!("First Cyrillic char: {}", first_char);
    // let bad = &russian[0..1];  // PANIC: not a char boundary!

    // --- String literals ARE string slices ---
    // The type of a string literal is `&str`
    let literal: &str = "I am a string slice";
    println!("Literal: {}", literal);

    // --- Using string slices as function parameters ---
    // Prefer `&str` over `&String` — it's more flexible.
    let my_string = String::from("hello world");
    let word = first_word(&my_string);  // Works with &String (deref coercion)
    println!("First word: {}", word);

    let literal = "hello world";
    let word = first_word(literal);      // Works with &str directly
    println!("First word: {}", word);

    let word = first_word(&my_string[0..6]);  // Works with slices
    println!("First word of slice: {}", word);

    // =========================================================================
    // ARRAY SLICES (&[T])
    // =========================================================================
    println!("\n--- Array Slices ---");

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Create slices of arrays:
    let slice = &arr[2..5];     // [3, 4, 5]
    println!("Slice [2..5]: {:?}", slice);

    let first_three = &arr[..3];   // [1, 2, 3]
    let last_three = &arr[7..];    // [8, 9, 10]
    let all = &arr[..];            // All elements
    println!("First three: {:?}", first_three);
    println!("Last three: {:?}", last_three);
    println!("All: {:?}", all);

    // Slice properties:
    println!("Slice length: {}", slice.len());
    println!("Is empty: {}", slice.is_empty());
    println!("First element: {:?}", slice.first());
    println!("Last element: {:?}", slice.last());

    // =========================================================================
    // MUTABLE SLICES
    // =========================================================================
    println!("\n--- Mutable Slices ---");

    let mut arr2 = [10, 20, 30, 40, 50];
    println!("Before: {:?}", arr2);

    // Create a mutable slice:
    let slice_mut = &mut arr2[1..4];
    slice_mut[0] = 200;
    slice_mut[1] = 300;
    slice_mut[2] = 400;
    println!("After modifying slice: {:?}", arr2);

    // Modify through a function:
    let mut data = [5, 3, 8, 1, 9, 2, 7];
    println!("Before sort: {:?}", data);
    sort_slice(&mut data[..]);
    println!("After sort:  {:?}", data);

    // =========================================================================
    // SLICE METHODS
    // =========================================================================
    println!("\n--- Slice Methods ---");

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Iteration:
    print!("Elements: ");
    for n in numbers.iter() {
        print!("{} ", n);
    }
    println!();

    // contains:
    println!("Contains 5: {}", numbers.contains(&5));
    println!("Contains 11: {}", numbers.contains(&11));

    // windows — sliding window iterator:
    println!("Windows of 3:");
    for window in numbers.windows(3) {
        println!("  {:?}", window);
    }

    // chunks — fixed-size chunks:
    println!("Chunks of 3:");
    for chunk in numbers.chunks(3) {
        println!("  {:?}", chunk);  // Last chunk may be smaller
    }

    // split_at — divide into two slices:
    let (left, right) = numbers.split_at(5);
    println!("Left: {:?}, Right: {:?}", left, right);

    // Searching:
    let haystack = [1, 3, 5, 7, 9];
    println!("Binary search for 5: {:?}", haystack.binary_search(&5));  // Ok(2)
    println!("Binary search for 4: {:?}", haystack.binary_search(&4));  // Err(2)

    // =========================================================================
    // VECTOR SLICES
    // =========================================================================
    println!("\n--- Vector Slices ---");

    let vec = vec![10, 20, 30, 40, 50];
    let vec_slice: &[i32] = &vec[1..4];
    println!("Vec slice: {:?}", vec_slice);

    // Functions that take slices work with both arrays and vectors:
    let arr = [1, 2, 3, 4, 5];
    let vec = vec![10, 20, 30, 40, 50];
    println!("Sum of array: {}", sum_slice(&arr));
    println!("Sum of vec:   {}", sum_slice(&vec));
    println!("Sum of partial: {}", sum_slice(&vec[1..4]));

    println!("\n--- Slices demo complete! ---");
}

// --- Function taking a string slice (most flexible) ---
fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();
    for (i, &byte) in bytes.iter().enumerate() {
        if byte == b' ' {
            return &s[..i];
        }
    }
    s
}

// --- Function taking a mutable slice ---
fn sort_slice(slice: &mut [i32]) {
    slice.sort();
}

// --- Function taking an immutable slice ---
// Works with arrays, vectors, and slices of any size!
fn sum_slice(slice: &[i32]) -> i32 {
    let mut total = 0;
    for &val in slice {
        total += val;
    }
    total
}
