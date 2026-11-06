// Topic: Error Handling in Rust (Result and the ? Operator)
// Concepts Covered:
//   - Result<T, E> enum
//   - Unrecoverable errors with panic!
//   - Propagating errors with the ? operator
//   - Custom error types

use std::num::ParseIntError;

fn parse_and_double(s: &str) -> Result<i32, ParseIntError> {
    let num = s.trim().parse::<i32>()?;
    Ok(num * 2)
}

fn main() {
    match parse_and_double("25") {
        Ok(val) => println!("Success: doubled = {}", val),
        Err(e) => println!("Failed to parse: {}", e),
    }

    match parse_and_double("abc") {
        Ok(val) => println!("Success: {}", val),
        Err(e) => println!("Handled error gracefully: {}", e),
    }
}
