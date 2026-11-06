// Topic: Procedural Macros Architecture
// Concepts Covered:
//   - Custom Derive macros (#[derive(MyTrait)])
//   - Attribute-like macros (#[get("/path")])
//   - Function-like macros (sql!(...))
//   - How syn and quote crates construct AST tokens

fn main() {
    println!("=== Procedural Macros in Rust ===");
    println!("1. Procedural macros run at compile-time as compiler plugins.");
    println!("2. They take TokenStream as input and emit TokenStream as output.");
    println!("3. Defined in separate crates with `proc-macro = true` in Cargo.toml.");
}
