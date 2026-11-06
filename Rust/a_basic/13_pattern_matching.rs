// Topic: Pattern Matching & Destructuring
// Concepts Covered:
//   - `match` guards and multiple patterns
//   - `if let` and `while let` concise syntax
//   - Destructuring tuples, structs, and references

struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let number = 13;
    match number {
        1 => println!("One"),
        2 | 3 | 5 | 7 | 11 | 13 => println!("Small prime!"),
        14..=20 => println!("Between 14 and 20"),
        n if n % 2 == 0 => println!("Even number: {}", n),
        _ => println!("Other number"),
    }

    // if let concise matching
    let config_max: Option<u8> = Some(3u8);
    if let Some(max) = config_max {
        println!("The maximum is configured to be {}", max);
    }

    // Destructuring struct
    let p = Point { x: 0, y: 7 };
    match p {
        Point { x: 0, y } => println!("On y axis at y = {}", y),
        Point { x, y: 0 } => println!("On x axis at x = {}", x),
        Point { x, y } => println!("At ({}, {})", x, y),
    }
}
