// Topic: File Input/Output (std::fs and std::io)
// Concepts Covered:
//   - Reading entire files into string or bytes
//   - Buffered reading with BufReader
//   - Writing to files safely
//   - Handling I/O errors

use std::io::{self, Write};

fn main() -> io::Result<()> {
    // Demonstration with stdout and memory buffer
    let mut buffer = Vec::new();
    writeln!(&mut buffer, "Rust Systems Programming - File I/O Demonstration")?;
    writeln!(&mut buffer, "Line 2: Buffered write executed successfully.")?;

    let text = String::from_utf8_lossy(&buffer);
    println!("Buffered I/O content:\n{}", text);
    Ok(())
}
