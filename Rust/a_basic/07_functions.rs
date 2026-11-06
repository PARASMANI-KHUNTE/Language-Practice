// =============================================================================
// Topic: Functions
// Key Concepts: Parameters, return values, expressions vs statements, early return
// =============================================================================

// Functions are declared with `fn`. Rust uses snake_case for function names.
// The `main` function is the entry point.

fn main() {
    // =========================================================================
    // CALLING FUNCTIONS
    // =========================================================================
    println!("--- Basic function calls ---");
    greet();
    greet_person("Alice");
    greet_person("Bob");

    // Functions with return values:
    let sum = add(5, 3);
    println!("5 + 3 = {}", sum);

    // Using return values directly:
    println!("10 * 4 = {}", multiply(10, 4));

    // =========================================================================
    // EXPRESSIONS VS STATEMENTS
    // =========================================================================
    println!("\n--- Expressions vs Statements ---");
    // Statements: perform an action, do NOT return a value.
    // Expressions: evaluate to a value.

    // `let x = 5;` is a statement.
    // You can't do: `let x = (let y = 6);`  // Error!

    // A block `{}` is an expression — it returns its last expression:
    let block_result = {
        let x = 5;
        let y = 10;
        x + y  // No semicolon = this is the return value!
    };
    println!("Block result: {}", block_result);  // 15

    // Adding a semicolon makes it a statement (returns `()`):
    let unit_result = {
        let _x = 5;
        // x + 10;  // With semicolon, this returns ()
    };
    println!("Unit result: {:?}", unit_result);  // ()

    // =========================================================================
    // RETURN VALUES
    // =========================================================================
    println!("\n--- Return values ---");
    println!("Is 7 even? {}", is_even(7));
    println!("Is 4 even? {}", is_even(4));
    println!("Factorial of 5: {}", factorial(5));
    println!("Fibonacci(10): {}", fibonacci(10));

    // =========================================================================
    // MULTIPLE RETURN VALUES (using tuples)
    // =========================================================================
    println!("\n--- Multiple return values ---");
    let (min, max) = min_max(3, 7);
    println!("min={}, max={}", min, max);

    let (quotient, remainder) = div_rem(17, 5);
    println!("17 / 5 = {} remainder {}", quotient, remainder);

    // =========================================================================
    // FUNCTIONS AS VALUES (function pointers)
    // =========================================================================
    println!("\n--- Function pointers ---");
    let operation: fn(i32, i32) -> i32 = add;
    println!("Using function pointer: {}", operation(10, 20));

    // Passing functions to other functions:
    let result = apply_operation(5, 3, add);
    println!("apply add(5, 3): {}", result);
    let result = apply_operation(5, 3, multiply);
    println!("apply multiply(5, 3): {}", result);

    // =========================================================================
    // DIVERGING FUNCTIONS
    // =========================================================================
    println!("\n--- Other function features ---");
    // A function that never returns uses `!` (the "never" type):
    // fn forever() -> ! { loop {} }
    // fn crash() -> ! { panic!("boom"); }

    // =========================================================================
    // NESTED FUNCTIONS
    // =========================================================================
    // Functions can be defined inside other functions:
    fn inner_function(x: i32) -> i32 {
        x * x
    }
    println!("Inner function: {}", inner_function(5));  // 25

    // =========================================================================
    // GENERIC FUNCTION EXAMPLE
    // =========================================================================
    println!("\n--- Functions with different types ---");
    print_value(42);
    print_value("hello");
    print_value(3.14);
    print_value(true);

    println!("\n--- Functions demo complete! ---");
}

// --- Simple function, no parameters, no return value ---
fn greet() {
    println!("Hello from a function!");
}

// --- Function with parameters ---
// Every parameter must have a type annotation.
fn greet_person(name: &str) {
    println!("Hello, {}!", name);
}

// --- Function with return value ---
// The return type is specified after `->`.
// The last expression (without semicolon) is the return value.
fn add(a: i32, b: i32) -> i32 {
    a + b  // Implicit return (no semicolon, no `return` keyword)
}

fn multiply(a: i32, b: i32) -> i32 {
    return a * b;  // Explicit return with `return` keyword (also valid)
}

// --- Early return ---
fn is_even(n: i32) -> bool {
    if n % 2 == 0 {
        return true;  // Early return
    }
    false  // Implicit return
}

// --- Recursive function ---
fn factorial(n: u64) -> u64 {
    if n <= 1 {
        1
    } else {
        n * factorial(n - 1)
    }
}

// --- Another recursive example ---
fn fibonacci(n: u32) -> u64 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

// --- Returning multiple values with tuples ---
fn min_max(a: i32, b: i32) -> (i32, i32) {
    if a < b { (a, b) } else { (b, a) }
}

fn div_rem(dividend: i32, divisor: i32) -> (i32, i32) {
    (dividend / divisor, dividend % divisor)
}

// --- Higher-order function: takes a function as parameter ---
fn apply_operation(a: i32, b: i32, op: fn(i32, i32) -> i32) -> i32 {
    op(a, b)
}

// --- Generic function (works with any type that implements Display) ---
fn print_value<T: std::fmt::Display>(value: T) {
    println!("Value: {}", value);
}
