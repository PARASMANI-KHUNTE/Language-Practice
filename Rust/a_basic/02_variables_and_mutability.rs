// =============================================================================
// Topic: Variables and Mutability
// Key Concepts: let, mut, const, static, shadowing, type inference
// =============================================================================

fn main() {
    // --- Immutable Variables (default) ---
    // In Rust, variables are immutable by default. This promotes safety.
    let x = 5;
    println!("x = {}", x);
    // x = 10;  // ERROR: cannot assign twice to immutable variable

    // --- Mutable Variables ---
    // Use `mut` to make a variable mutable.
    let mut y = 10;
    println!("y before: {}", y);
    y = 20;
    println!("y after:  {}", y);
    // Output: y before: 10
    //         y after:  20

    // --- Constants ---
    // Constants are ALWAYS immutable, must have a type annotation,
    // and must be set to a constant expression (known at compile time).
    // Convention: SCREAMING_SNAKE_CASE
    const MAX_POINTS: u32 = 100_000;
    const PI: f64 = 3.14159265358979;
    println!("MAX_POINTS = {}", MAX_POINTS);
    println!("PI = {}", PI);

    // Constants can be declared in any scope, including global scope.
    // They're inlined at compile time (no fixed memory address).

    // --- Static Variables ---
    // `static` variables have a fixed memory address and live for the
    // entire program lifetime. They can be mutable (but that's unsafe).
    static LANGUAGE: &str = "Rust";
    println!("Language: {}", LANGUAGE);

    // Mutable statics require `unsafe` because of potential data races:
    // static mut COUNTER: i32 = 0;
    // unsafe { COUNTER += 1; }  // Must be in unsafe block

    // --- Shadowing ---
    // You can declare a new variable with the same name, "shadowing"
    // the previous one. This is NOT the same as mutation!
    let z = 5;
    println!("z = {}", z);       // z = 5

    let z = z + 1;               // New variable, shadows the old `z`
    println!("z = {}", z);       // z = 6

    let z = z * 2;
    println!("z = {}", z);       // z = 12

    // Shadowing allows changing the TYPE (mutation doesn't):
    let spaces = "   ";          // &str type
    let spaces = spaces.len();   // Now it's usize type!
    println!("Number of spaces: {}", spaces);
    // Output: Number of spaces: 3

    // With `mut`, you CAN'T change the type:
    // let mut spaces = "   ";
    // spaces = spaces.len();    // ERROR: mismatched types

    // --- Shadowing in inner scopes ---
    let outer = 10;
    {
        let outer = outer + 5;   // Shadows `outer` only inside this block
        println!("Inner outer = {}", outer);  // 15
    }
    println!("Outer outer = {}", outer);      // 10 (unchanged)

    // --- Type Annotations ---
    // Rust can infer types, but you can annotate explicitly:
    let a: i32 = 42;
    let b: f64 = 3.14;
    let c: bool = true;
    let d: char = 'R';
    println!("a={}, b={}, c={}, d={}", a, b, c, d);

    // --- Numeric Literals ---
    let decimal = 98_222;        // Underscores for readability
    let hex = 0xff;
    let octal = 0o77;
    let binary = 0b1111_0000;
    let byte = b'A';             // u8 only
    println!("decimal={}, hex={}, octal={}, binary={}, byte={}",
             decimal, hex, octal, binary, byte);
    // Output: decimal=98222, hex=255, octal=63, binary=240, byte=65

    // --- Unused Variables ---
    // Prefix with `_` to suppress "unused variable" warnings:
    let _unused = 42;

    // --- Destructuring with let ---
    let (first, second, third) = (1, 2.0, "three");
    println!("first={}, second={}, third={}", first, second, third);

    println!("\n--- Variables and mutability demo complete! ---");
}
