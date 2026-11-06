// Topic: Traits: Defining Shared Behavior
// Concepts Covered:
//   - Defining traits with method signatures and default implementations
//   - Implementing traits on types
//   - Trait bounds in functions (`impl Trait` vs `<T: Trait>`)
//   - Deriving common traits (Debug, Clone, PartialEq)

pub trait Summary {
    fn summarize_author(&self) -> String;

    // Default implementation
    fn summarize(&self) -> String {
        format!("(Read more from {}...)", self.summarize_author())
    }
}

pub struct NewsArticle {
    pub headline: String,
    pub author: String,
}

impl Summary for NewsArticle {
    fn summarize_author(&self) -> String {
        format!("@{}", self.author)
    }

    fn summarize(&self) -> String {
        format!("{}: {}", self.headline, self.summarize_author())
    }
}

fn notify(item: &impl Summary) {
    println!("Breaking News! {}", item.summarize());
}

fn main() {
    let article = NewsArticle {
        headline: String::from("Rust 2026 released with new features"),
        author: String::from("ferris_crab"),
    };
    notify(&article);
}
