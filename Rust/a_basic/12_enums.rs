// Topic: Enums and the Option Type
// Concepts Covered:
//   - Defining enums with rich data payloads
//   - The standard Option<T> enum (Some vs None)
//   - Exhaustive matching on enum variants

#[derive(Debug)]
enum WebEvent {
    PageLoad,
    KeyPress(char),
    Paste(String),
    Click { x: i64, y: i64 },
}

fn inspect_event(event: WebEvent) {
    match event {
        WebEvent::PageLoad => println!("Page loaded successfully"),
        WebEvent::KeyPress(c) => println!("Pressed key: '{}'", c),
        WebEvent::Paste(s) => println!("Pasted text: \"{}\"", s),
        WebEvent::Click { x, y } => println!("Clicked at coordinate: ({}, {})", x, y),
    }
}

fn divide(numerator: f64, denominator: f64) -> Option<f64> {
    if denominator == 0.0 {
        None
    } else {
        Some(numerator / denominator)
    }
}

fn main() {
    inspect_event(WebEvent::PageLoad);
    inspect_event(WebEvent::KeyPress('q'));
    inspect_event(WebEvent::Click { x: 120, y: 340 });

    let result = divide(10.0, 2.0);
    match result {
        Some(val) => println!("Division result: {}", val),
        None => println!("Cannot divide by zero!"),
    }
}
