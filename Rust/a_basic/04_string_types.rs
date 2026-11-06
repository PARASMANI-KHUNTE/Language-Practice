// =============================================================================
// Topic: String Types
// Key Concepts: String vs &str, methods, format!, string manipulation
// =============================================================================

fn main() {
    // Rust has two main string types:
    //   - `String`  — heap-allocated, growable, owned string
    //   - `&str`    — string slice, a reference to UTF-8 encoded string data

    // =========================================================================
    // &str — String Slices (Borrowed)
    // =========================================================================

    // String literals are `&str` — they're stored in the binary, immutable.
    let greeting: &str = "Hello, world!";
    println!("String literal (&str): {}", greeting);

    // &str is a "fat pointer": pointer + length (no capacity).
    // It's a view into string data — it doesn't own the data.

    // =========================================================================
    // String — Owned, Heap-Allocated
    // =========================================================================

    // Creating Strings:
    let s1 = String::new();                          // Empty string
    let s2 = String::from("Hello");                  // From a literal
    let s3 = "World".to_string();                    // Using .to_string()
    let s4 = "Repeated ".repeat(3);                  // "Repeated Repeated Repeated "
    println!("s1='{}', s2='{}', s3='{}', s4='{}'", s1, s2, s3, s4);

    // --- String is mutable (when declared with `mut`) ---
    let mut s = String::from("Hello");
    s.push(' ');                     // Push a single char
    s.push_str("World");             // Push a string slice
    println!("After push: {}", s);   // "Hello World"

    // --- Concatenation ---
    // Using `+` operator (note: first operand is moved/consumed!)
    let hello = String::from("Hello, ");
    let world = String::from("World!");
    let combined = hello + &world;  // hello is MOVED, world is borrowed
    println!("Combined: {}", combined);
    // println!("{}", hello);  // ERROR: hello was moved!
    println!("world still valid: {}", world);

    // Using `format!` (doesn't take ownership of any argument):
    let first = String::from("Rust");
    let second = String::from("Programming");
    let formatted = format!("{} {} is fun!", first, second);
    println!("{}", formatted);
    println!("first still valid: {}", first);  // Both still usable!

    // =========================================================================
    // Common String Methods
    // =========================================================================

    let text = String::from("  Hello, Rust World!  ");

    // Length and emptiness:
    println!("Length: {}", text.len());          // Bytes, not chars!
    println!("Is empty: {}", text.is_empty());

    // Trimming whitespace:
    println!("Trimmed: '{}'", text.trim());
    println!("Trim start: '{}'", text.trim_start());
    println!("Trim end: '{}'", text.trim_end());

    // Case conversion:
    let lower = "Hello".to_lowercase();
    let upper = "Hello".to_uppercase();
    println!("Lower: {}, Upper: {}", lower, upper);

    // Searching:
    let sentence = "The quick brown fox jumps over the lazy dog";
    println!("Contains 'fox': {}", sentence.contains("fox"));
    println!("Starts with 'The': {}", sentence.starts_with("The"));
    println!("Ends with 'dog': {}", sentence.ends_with("dog"));
    println!("Find 'brown': {:?}", sentence.find("brown"));  // Some(10)

    // Replacing:
    let replaced = sentence.replace("fox", "cat");
    println!("Replaced: {}", replaced);
    let replaced_n = sentence.replacen("the", "a", 1);  // Replace first N
    println!("Replace first: {}", replaced_n);

    // Splitting:
    let csv = "apple,banana,cherry";
    let fruits: Vec<&str> = csv.split(',').collect();
    println!("Fruits: {:?}", fruits);

    // Split whitespace:
    let words: Vec<&str> = sentence.split_whitespace().collect();
    println!("Word count: {}", words.len());

    // =========================================================================
    // String Indexing and Iteration
    // =========================================================================

    // IMPORTANT: You CANNOT index Strings with s[0] in Rust!
    // Strings are UTF-8, and characters can be multi-byte.
    // let c = s[0];  // ERROR: String cannot be indexed by integer

    // Instead, iterate over characters:
    let hello_russian = "Привет";
    println!("\nChars in '{}':", hello_russian);
    for c in hello_russian.chars() {
        print!("{} ", c);
    }
    println!();

    // Or iterate over bytes:
    println!("Bytes: {:?}", hello_russian.as_bytes());
    println!("Byte length: {}", hello_russian.len());     // 12 (UTF-8 bytes)
    println!("Char count: {}", hello_russian.chars().count()); // 6

    // Get a substring using slicing (must be at char boundaries!):
    let hello_eng = "Hello, World!";
    let slice = &hello_eng[0..5];  // "Hello"
    println!("Slice: {}", slice);

    // --- nth character ---
    let fourth = hello_eng.chars().nth(4);
    println!("4th char: {:?}", fourth);  // Some('o')

    // =========================================================================
    // Converting Between String and &str
    // =========================================================================

    let owned: String = String::from("owned string");
    let borrowed: &str = &owned;           // String -> &str (deref coercion)
    let back_to_owned: String = borrowed.to_string();  // &str -> String
    println!("owned: {}, borrowed: {}, back: {}", owned, borrowed, back_to_owned);

    // --- Parsing strings to numbers ---
    let num_str = "42";
    let num: i32 = num_str.parse().expect("Not a number!");
    println!("Parsed: {}", num);

    // --- Numbers to strings ---
    let n = 100;
    let n_str = n.to_string();
    println!("Number as string: {}", n_str);

    // =========================================================================
    // Raw Strings and Escape Characters
    // =========================================================================

    // Escape characters:
    println!("Tab:\tHello");
    println!("Newline:\nHello");
    println!("Backslash: \\");
    println!("Quote: \"");

    // Raw strings (no escape processing):
    let raw = r"C:\Users\name\documents";
    println!("Raw: {}", raw);

    // Raw strings with hashes (for including quotes):
    let raw_with_quotes = r#"She said "hello" to me"#;
    println!("{}", raw_with_quotes);

    println!("\n--- String types demo complete! ---");
}
