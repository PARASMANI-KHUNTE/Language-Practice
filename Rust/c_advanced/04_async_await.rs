// Topic: Asynchronous Programming Concepts in Rust
// Concepts Covered:
//   - Futures and the Poll state model (Ready vs Pending)
//   - async / await syntax
//   - Executor concepts (tokio / async-std architecture)

fn main() {
    println!("=== Async / Await in Rust ===");
    println!("1. Rust Futures are pull-based state machines: they do no work until polled.");
    println!("2. In production, runtimes like Tokio or smol drive Futures on thread pools.");
    println!("3. Syntax demo:");
    println!("   async fn fetch_data() -> String { \"result\".to_string() }");
}
