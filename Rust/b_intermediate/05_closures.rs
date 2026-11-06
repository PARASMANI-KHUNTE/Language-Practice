// Topic: Closures in Rust (Fn, FnMut, FnOnce)
// Concepts Covered:
//   - Anonymous functions capturing environment
//   - The three closure traits: Fn, FnMut, FnOnce
//   - Moving ownership into closure with `move` keyword

fn main() {
    let factor = 3;
    // Captures immutable reference by default (Fn)
    let multiply = |x| x * factor;
    println!("Multiply 10: {}", multiply(10));

    let mut count = 0;
    // Captures mutable reference (FnMut)
    let mut increment = || {
        count += 1;
        count
    };
    println!("Tick: {}", increment());
    println!("Tick: {}", increment());

    // Captures by value (FnOnce) with move
    let data = vec![1, 2, 3];
    let consume = move || {
        println!("Consumed vector inside closure: {:?}", data);
    };
    consume();
}
