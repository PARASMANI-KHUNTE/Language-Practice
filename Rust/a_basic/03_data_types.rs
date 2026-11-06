// =============================================================================
// Topic: Data Types
// Key Concepts: Scalar types (integers, floats, bool, char), compound (tuple, array)
// =============================================================================

fn main() {
    // Rust is statically typed — every variable has a known type at compile time.
    // The compiler can often infer types, but sometimes you must annotate.

    // =========================================================================
    // SCALAR TYPES — represent a single value
    // =========================================================================

    // --- Integer Types ---
    // Signed: i8, i16, i32, i64, i128, isize
    // Unsigned: u8, u16, u32, u64, u128, usize
    // `isize` and `usize` depend on architecture (32 or 64 bit).
    let a: i8 = -128;             // Range: -128 to 127
    let b: u8 = 255;              // Range: 0 to 255
    let c: i32 = 2_147_483_647;   // Default integer type
    let d: i64 = -9_000_000_000;
    let e: u128 = 340_282_366_920_938_463_463_374_607_431_768_211_455_u128;
    let f: usize = 42;            // Pointer-sized, used for indexing

    println!("i8:    {}", a);
    println!("u8:    {}", b);
    println!("i32:   {}", c);
    println!("i64:   {}", d);
    println!("u128:  {}", e);
    println!("usize: {}", f);

    // Integer overflow: In debug mode, Rust panics. In release, it wraps.
    // Use wrapping_*, checked_*, overflowing_*, saturating_* methods:
    let max_u8: u8 = 255;
    println!("Wrapping add: {}", max_u8.wrapping_add(1));   // 0
    println!("Saturating:   {}", max_u8.saturating_add(10)); // 255
    println!("Checked add:  {:?}", max_u8.checked_add(1));   // None

    // --- Floating-Point Types ---
    // f32 (single precision) and f64 (double precision, default)
    let g: f64 = 3.14159265358979;   // Default float type
    let h: f32 = 2.71828;
    println!("f64: {}", g);
    println!("f32: {}", h);

    // Special float values:
    let inf = f64::INFINITY;
    let neg_inf = f64::NEG_INFINITY;
    let nan = f64::NAN;
    println!("Infinity: {}, Neg Infinity: {}, NaN: {}", inf, neg_inf, nan);
    println!("Is NaN? {}", nan.is_nan());  // true
    // Note: NaN != NaN (NaN is never equal to anything, including itself)

    // --- Boolean Type ---
    let is_active: bool = true;
    let is_greater = 10 > 5;  // Type inferred as bool
    println!("is_active: {}, is_greater: {}", is_active, is_greater);
    // Booleans are 1 byte in size.

    // --- Character Type ---
    // `char` is 4 bytes (Unicode scalar value), not just ASCII!
    let letter: char = 'A';
    let emoji: char = '😀';
    let chinese: char = '中';
    let heart: char = '❤';
    println!("letter: {}, emoji: {}, chinese: {}, heart: {}", letter, emoji, chinese, heart);
    println!("char size: {} bytes", std::mem::size_of::<char>()); // 4

    // =========================================================================
    // COMPOUND TYPES — group multiple values
    // =========================================================================

    // --- Tuples ---
    // Fixed-length, can hold different types.
    let tup: (i32, f64, char) = (500, 6.4, 'y');

    // Destructuring:
    let (x, y, z) = tup;
    println!("Destructured: x={}, y={}, z={}", x, y, z);

    // Access by index using `.`:
    println!("tup.0 = {}, tup.1 = {}, tup.2 = {}", tup.0, tup.1, tup.2);

    // Unit tuple (empty tuple) — represents "no value":
    let unit: () = ();
    println!("Unit: {:?}", unit);  // Output: ()
    // Functions without a return value implicitly return `()`.

    // --- Arrays ---
    // Fixed-length, all elements must be the same type.
    // Stored on the stack (not heap).
    let arr: [i32; 5] = [1, 2, 3, 4, 5];
    println!("Array: {:?}", arr);

    // Initialize all elements to the same value:
    let zeros = [0; 10];  // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    println!("Zeros: {:?}", zeros);

    // Accessing elements:
    println!("First: {}, Last: {}", arr[0], arr[4]);

    // Array length:
    println!("Length: {}", arr.len());

    // Rust checks array bounds at runtime — no buffer overflows!
    // let bad = arr[10];  // Panics: index out of bounds

    // --- Type Sizes ---
    println!("\n--- Type sizes ---");
    println!("i8:    {} byte(s)", std::mem::size_of::<i8>());
    println!("i32:   {} byte(s)", std::mem::size_of::<i32>());
    println!("i64:   {} byte(s)", std::mem::size_of::<i64>());
    println!("f32:   {} byte(s)", std::mem::size_of::<f32>());
    println!("f64:   {} byte(s)", std::mem::size_of::<f64>());
    println!("bool:  {} byte(s)", std::mem::size_of::<bool>());
    println!("char:  {} byte(s)", std::mem::size_of::<char>());
    println!("():    {} byte(s)", std::mem::size_of::<()>());

    // --- Type Casting ---
    let integer: i32 = 42;
    let float: f64 = integer as f64;
    let character: char = 'A';
    let ascii: u8 = character as u8;
    println!("i32 -> f64: {} -> {}", integer, float);
    println!("char -> u8: {} -> {}", character, ascii);

    println!("\n--- Data types demo complete! ---");
}
