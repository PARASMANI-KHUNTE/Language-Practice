// =============================================================================
// Topic: Operators
// Key Concepts: Arithmetic, comparison, logical, bitwise, assignment operators
// =============================================================================

fn main() {
    // =========================================================================
    // ARITHMETIC OPERATORS
    // =========================================================================
    let a = 20;
    let b = 7;

    println!("--- Arithmetic Operators ---");
    println!("{} + {} = {}", a, b, a + b);     // Addition: 27
    println!("{} - {} = {}", a, b, a - b);     // Subtraction: 13
    println!("{} * {} = {}", a, b, a * b);     // Multiplication: 140
    println!("{} / {} = {}", a, b, a / b);     // Integer division: 2 (truncated)
    println!("{} % {} = {}", a, b, a % b);     // Remainder (modulo): 6

    // Floating-point division:
    let fa = 20.0_f64;
    let fb = 7.0_f64;
    println!("{} / {} = {:.4}", fa, fb, fa / fb);  // 2.8571

    // Note: Rust does NOT have increment (++) or decrement (--) operators!
    let mut counter = 0;
    counter += 1;  // Use compound assignment instead
    counter -= 1;
    println!("Counter: {}", counter);

    // Negation:
    let negative = -a;
    println!("Negation of {}: {}", a, negative);

    // =========================================================================
    // COMPARISON OPERATORS
    // =========================================================================
    println!("\n--- Comparison Operators ---");
    let x = 10;
    let y = 20;

    println!("{} == {} : {}", x, y, x == y);   // Equal: false
    println!("{} != {} : {}", x, y, x != y);   // Not equal: true
    println!("{} >  {} : {}", x, y, x > y);    // Greater than: false
    println!("{} <  {} : {}", x, y, x < y);    // Less than: true
    println!("{} >= {} : {}", x, y, x >= y);   // Greater or equal: false
    println!("{} <= {} : {}", x, y, x <= y);   // Less or equal: true

    // Comparison works with many types:
    println!("'a' < 'z': {}", 'a' < 'z');      // true
    println!("\"abc\" < \"abd\": {}", "abc" < "abd"); // true (lexicographic)

    // =========================================================================
    // LOGICAL OPERATORS
    // =========================================================================
    println!("\n--- Logical Operators ---");
    let t = true;
    let f = false;

    println!("{} && {} = {}", t, f, t && f);    // Logical AND: false
    println!("{} || {} = {}", t, f, t || f);    // Logical OR: true
    println!("!{} = {}", t, !t);                 // Logical NOT: false

    // Short-circuit evaluation:
    // `&&` won't evaluate the right side if the left is false.
    // `||` won't evaluate the right side if the left is true.
    let result = false && panic_fn();  // panic_fn() is never called!
    println!("Short-circuit AND: {}", result);

    let result = true || panic_fn();   // panic_fn() is never called!
    println!("Short-circuit OR: {}", result);

    // =========================================================================
    // BITWISE OPERATORS
    // =========================================================================
    println!("\n--- Bitwise Operators ---");
    let m: u8 = 0b1100;  // 12
    let n: u8 = 0b1010;  // 10

    println!("{:04b} & {:04b}  = {:04b} (AND)", m, n, m & n);    // 1000 (8)
    println!("{:04b} | {:04b}  = {:04b} (OR)", m, n, m | n);     // 1110 (14)
    println!("{:04b} ^ {:04b}  = {:04b} (XOR)", m, n, m ^ n);    // 0110 (6)
    println!("!{:04b}       = {:08b} (NOT)", m, !m);               // 11110011
    println!("{:04b} << 2   = {:06b} (Left shift)", m, m << 2);  // 110000 (48)
    println!("{:04b} >> 1   = {:04b} (Right shift)", m, m >> 1);  // 0110 (6)

    // =========================================================================
    // COMPOUND ASSIGNMENT OPERATORS
    // =========================================================================
    println!("\n--- Compound Assignment Operators ---");
    let mut val = 100;
    println!("Start: {}", val);

    val += 10;   println!("+=  10: {}", val);   // 110
    val -= 20;   println!("-=  20: {}", val);   // 90
    val *= 2;    println!("*=   2: {}", val);   // 180
    val /= 3;    println!("/=   3: {}", val);   // 60
    val %= 7;    println!("%%=   7: {}", val);  // 4

    let mut bits: u8 = 0b1111_0000;
    bits &= 0b1010_1010;   println!("&=: {:08b}", bits);  // 10100000
    bits |= 0b0000_1111;   println!("|=: {:08b}", bits);  // 10101111
    bits ^= 0b1111_1111;   println!("^=: {:08b}", bits);  // 01010000
    bits <<= 1;            println!("<<=: {:08b}", bits);  // 10100000
    bits >>= 2;            println!(">>=: {:08b}", bits);  // 00101000

    // =========================================================================
    // TYPE CASTING IN EXPRESSIONS
    // =========================================================================
    println!("\n--- Type Casting ---");
    // Rust requires explicit casts between numeric types:
    let int_val: i32 = 42;
    let float_val: f64 = int_val as f64;
    println!("i32 {} as f64 = {}", int_val, float_val);

    // Be careful with lossy conversions:
    let big: i32 = 300;
    let small: u8 = big as u8;  // Truncation!
    println!("i32 {} as u8 = {} (truncated!)", big, small);  // 44

    let float = 3.99_f64;
    let int = float as i32;  // Truncates toward zero (not rounded!)
    println!("f64 {} as i32 = {} (truncated, not rounded)", float, int);

    println!("\n--- Operators demo complete! ---");
}

// Helper function for demonstrating short-circuit evaluation
fn panic_fn() -> bool {
    panic!("This should never be called!");
}
