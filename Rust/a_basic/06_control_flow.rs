// =============================================================================
// Topic: Control Flow
// Key Concepts: if/else, loop, while, for, match, break, continue, labels
// =============================================================================

fn main() {
    // =========================================================================
    // IF / ELSE
    // =========================================================================
    println!("--- if/else ---");
    let number = 7;

    // Condition must be a bool — no "truthy" values like in JS/Python!
    if number > 0 {
        println!("{} is positive", number);
    } else if number < 0 {
        println!("{} is negative", number);
    } else {
        println!("{} is zero", number);
    }
    // Output: 7 is positive

    // `if` is an EXPRESSION in Rust — it returns a value!
    let condition = true;
    let value = if condition { 5 } else { 10 };
    println!("Conditional value: {}", value);  // 5

    // Both arms must return the same type:
    let abs_val = if number >= 0 { number } else { -number };
    println!("Absolute value of {}: {}", number, abs_val);

    // =========================================================================
    // LOOP — infinite loop with break
    // =========================================================================
    println!("\n--- loop ---");
    let mut count = 0;
    loop {
        count += 1;
        if count == 5 {
            println!("Breaking out at count = {}", count);
            break;
        }
    }

    // `loop` can return a value via `break`:
    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 10 {
            break counter * 2;  // Returns 20
        }
    };
    println!("Loop returned: {}", result);  // 20

    // --- Loop labels for nested loops ---
    println!("\n--- Nested loops with labels ---");
    let mut outer_count = 0;
    'outer: loop {
        let mut inner_count = 0;
        loop {
            if inner_count == 3 {
                break;  // Breaks inner loop
            }
            if outer_count == 2 {
                println!("Breaking outer loop!");
                break 'outer;  // Breaks outer loop
            }
            inner_count += 1;
        }
        outer_count += 1;
        println!("Outer iteration: {}", outer_count);
    }

    // =========================================================================
    // WHILE
    // =========================================================================
    println!("\n--- while ---");
    let mut n = 5;
    while n > 0 {
        print!("{} ", n);
        n -= 1;
    }
    println!("LIFTOFF!");
    // Output: 5 4 3 2 1 LIFTOFF!

    // =========================================================================
    // FOR — the most common loop in Rust
    // =========================================================================
    println!("\n--- for loops ---");

    // Iterating over a range:
    print!("Range 1..5: ");
    for i in 1..5 {
        print!("{} ", i);  // 1 2 3 4 (exclusive end)
    }
    println!();

    print!("Range 1..=5: ");
    for i in 1..=5 {
        print!("{} ", i);  // 1 2 3 4 5 (inclusive end)
    }
    println!();

    // Iterating over an array:
    let colors = ["red", "green", "blue"];
    for color in colors.iter() {
        print!("{} ", color);
    }
    println!();

    // With index using enumerate:
    for (index, color) in colors.iter().enumerate() {
        println!("  [{}] = {}", index, color);
    }

    // Reverse iteration:
    print!("Countdown: ");
    for i in (1..=5).rev() {
        print!("{} ", i);
    }
    println!();
    // Output: Countdown: 5 4 3 2 1

    // =========================================================================
    // MATCH — Rust's powerful pattern matching
    // =========================================================================
    println!("\n--- match ---");

    // Basic match (must be exhaustive — cover all cases!):
    let dice = 4;
    match dice {
        1 => println!("One!"),
        2 => println!("Two!"),
        3 => println!("Three!"),
        4 | 5 => println!("Four or Five!"),  // Multiple patterns with |
        6 => println!("Six!"),
        _ => println!("Invalid die value"),  // _ is the catch-all pattern
    }

    // Match as an expression:
    let text = match dice {
        1..=3 => "low",     // Range pattern (inclusive)
        4..=6 => "high",
        _ => "invalid",
    };
    println!("Dice {} is {}", dice, text);

    // Match with guards:
    let num = 15;
    match num {
        n if n % 15 == 0 => println!("{} is FizzBuzz", n),
        n if n % 3 == 0 => println!("{} is Fizz", n),
        n if n % 5 == 0 => println!("{} is Buzz", n),
        n => println!("{}", n),
    }

    // Match with tuples:
    let point = (0, -2);
    match point {
        (0, 0) => println!("Origin"),
        (x, 0) => println!("On x-axis at x={}", x),
        (0, y) => println!("On y-axis at y={}", y),
        (x, y) => println!("Point at ({}, {})", x, y),
    }

    // =========================================================================
    // BREAK and CONTINUE
    // =========================================================================
    println!("\n--- break and continue ---");
    print!("Odd numbers 1-10: ");
    for i in 1..=10 {
        if i % 2 == 0 {
            continue;  // Skip even numbers
        }
        print!("{} ", i);
    }
    println!();
    // Output: Odd numbers 1-10: 1 3 5 7 9

    // Using continue with labels:
    print!("Labeled continue: ");
    'outer_for: for i in 0..3 {
        for j in 0..3 {
            if j == 1 {
                continue 'outer_for;
            }
            print!("({},{}) ", i, j);
        }
    }
    println!();
    // Output: (0,0) (1,0) (2,0)

    println!("\n--- Control flow demo complete! ---");
}
