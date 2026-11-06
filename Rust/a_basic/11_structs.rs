// Topic: Structs in Rust
// Concepts Covered:
//   - Defining named-field structs
//   - Tuple structs and Unit-like structs
//   - Implementing methods & associated functions with `impl`
//   - Struct update syntax (..)

#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    // Associated constructor function
    fn new(width: u32, height: u32) -> Self {
        Rectangle { width, height }
    }

    fn square(size: u32) -> Self {
        Rectangle { width: size, height: size }
    }

    // Method taking immutable reference to self
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn can_hold(&self, other: &Rectangle) -> bool {
        self.width > other.width && self.height > other.height
    }
}

// Tuple struct
struct Color(u8, u8, u8);

fn main() {
    let rect1 = Rectangle::new(30, 50);
    let rect2 = Rectangle::square(20);

    println!("rect1: {:?}", rect1);
    println!("rect1 area: {} sq units", rect1.area());
    println!("Can rect1 hold rect2? {}", rect1.can_hold(&rect2));

    let black = Color(0, 0, 0);
    println!("RGB: ({}, {}, {})", black.0, black.1, black.2);
}
