// =============================================================================
// Topic: Hello World — fn main, println!, comments
// Key Concepts: Entry point, printing macros, documentation comments
// =============================================================================

// Rust programs start execution in the `main` function.
// `fn` declares a function. `main` is special — it's the entry point.

fn main() {
    // --- Basic Printing ---
    // `println!` is a macro (note the `!`), not a function.
    // Macros are expanded at compile time and can accept variable arguments.
    println!("Hello, World!");

    // --- Print without newline ---
    // `print!` works like `println!` but doesn't add a newline at the end.
    print!("Hello ");
    print!("without ");
    println!("newline added at the end.");
    // Output: Hello without newline added at the end.

    // --- String Interpolation / Formatting ---
    // Use `{}` as placeholders for values (like printf but type-safe).
    let name = "Rustacean";
    let version = 2024;
    println!("Welcome, {}! Rust edition: {}", name, version);
    // Output: Welcome, Rustacean! Rust edition: 2024

    // Named parameters:
    println!("{language} is {adjective}!", language = "Rust", adjective = "fast");
    // Output: Rust is fast!

    // Positional parameters:
    println!("{0} is used by {1}. {1} love {0}.", "Rust", "developers");
    // Output: Rust is used by developers. developers love Rust.

    // --- Debug Printing ---
    // `{:?}` uses the Debug trait for formatting (useful for complex types).
    let numbers = [1, 2, 3, 4, 5];
    println!("Debug print: {:?}", numbers);
    // Output: Debug print: [1, 2, 3, 4, 5]

    // Pretty debug printing with `{:#?}`:
    println!("Pretty debug:\n{:#?}", numbers);

    // --- Formatting Specifiers ---
    let pi = 3.14159265;
    println!("Pi to 2 decimals: {:.2}", pi);       // Output: Pi to 2 decimals: 3.14
    println!("Padded number: {:>10}", 42);           // Right-aligned, width 10
    println!("Left-aligned:  {:<10}!", "hello");     // Left-aligned, width 10
    println!("Zero-padded:   {:05}", 42);            // Output: 00042
    println!("Binary:        {:b}", 42);             // Output: 101010
    println!("Hex:           {:x}", 255);            // Output: ff
    println!("Octal:         {:o}", 8);              // Output: 10

    // --- Comments in Rust ---
    // This is a single-line comment.

    /* This is a
       multi-line (block) comment. */

    /*
     * Block comments can be nested in Rust (unlike C/C++):
     * /* This is valid! */
     */

    // Documentation comments use `///` (for the following item)
    // or `//!` (for the enclosing item). They support Markdown.
    // Example:
    /// This is a doc comment (would document a function/struct below it).
    /// Typically used with `cargo doc` to generate documentation.

    // --- The `eprintln!` and `eprint!` macros ---
    // These print to stderr instead of stdout.
    eprintln!("This goes to standard error");

    // --- The `dbg!` macro ---
    // Prints the expression, its value, file, and line number to stderr.
    // Very useful for quick debugging!
    let x = 5 * 10;
    dbg!(x);
    // Output (to stderr): [src/main.rs:XX] x = 50

    // --- Using `format!` to create a String without printing ---
    let greeting = format!("Hello, {}!", "world");
    println!("{}", greeting);
    // Output: Hello, world!

    println!("\n--- Program complete! ---");
}
