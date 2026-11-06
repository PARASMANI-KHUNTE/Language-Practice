// Topic: Lifetimes and Borrow Checker Mechanics
// Concepts Covered:
//   - Lifetime annotations syntax ('a)
//   - Lifetime elision rules
//   - Structs holding references with lifetimes
//   - The static lifetime ('static)

// Function returning reference with lifetime tied to input parameters
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

struct Excerpt<'a> {
    part: &'a str,
}

fn main() {
    let string1 = String::from("long string is long");
    let result;
    {
        let string2 = String::from("xyz");
        result = longest(string1.as_str(), string2.as_str());
        println!("The longest string is: {}", result);
    }

    let excerpt = Excerpt { part: "Call me Ishmael." };
    println!("Excerpt: {}", excerpt.part);
}
