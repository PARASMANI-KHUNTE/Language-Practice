// Topic: Advanced Lifetimes
// Concepts Covered:
//   - Lifetime subtyping ('a: 'b means 'a outlives 'b)
//   - Higher-Ranked Trait Bounds (for<'a>)
//   - Anonymous and static lifetime interaction

struct Context<'a>(&'a str);

// Higher-Rank Trait Bound (HRTB) demonstration
fn apply_to_str<F>(func: F)
where
    F: for<'a> Fn(&'a str) -> usize,
{
    let s = String::from("Rust Lifetimes");
    println!("Applied result: {}", func(&s));
}

fn main() {
    apply_to_str(|slice| slice.len());
}
