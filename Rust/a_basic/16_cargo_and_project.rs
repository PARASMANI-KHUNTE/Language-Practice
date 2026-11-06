// Topic: Cargo Project Ecosystem and Module Architecture
// Concepts Covered:
//   - Cargo.toml project configuration (manifest, dependencies, profiles)
//   - Crate structure: src/main.rs (binary) vs src/lib.rs (library)
//   - Modules (mod), visibility (pub), and paths (crate::, super::)
//   - Cargo commands: build, run, test, check, clippy, doc

mod sound {
    pub mod instrument {
        pub fn clarinet() {
            println!("Clarinet playing melodies.");
        }
    }

    mod voice {
        // Private by default
        fn whisper() {}
    }
}

fn main() {
    println!("=== Cargo & Project Architecture ===");
    println!("1. Cargo manages build steps, dependencies, and compilation profiles.");
    println!("2. Use 'cargo check' for rapid syntax/type checking without codegen.");
    println!("3. Hierarchical module invocation below:");

    crate::sound::instrument::clarinet();
}
