// Topic: Unit and Integration Testing in Rust
// Concepts Covered:
//   - Writing unit tests with #[test] attribute
//   - Assertions: assert!, assert_eq!, assert_ne!
//   - Testing error paths with #[should_panic]
//   - Conditional compilation: #[cfg(test)]

pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

pub fn divide(a: f64, b: f64) -> f64 {
    if b == 0.0 {
        panic!("Division by zero");
    }
    a / b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(2, 3), 5);
    }

    #[test]
    #[should_panic(expected = "Division by zero")]
    fn test_divide_by_zero() {
        divide(10.0, 0.0);
    }
}

fn main() {
    println!("Run tests with 'cargo test'");
}
