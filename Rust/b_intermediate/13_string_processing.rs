// Topic: Advanced String Processing & Parsing
// Concepts Covered:
//   - UTF-8 representation and grapheme clusters
//   - Splitting, trimming, and pattern searching
//   - Parsing numbers and types with FromStr trait

use std::str::FromStr;

#[derive(Debug, PartialEq)]
struct Port(u16);

impl FromStr for Port {
    type Err = &'static str;

    fn from_str(s: &str) -> Result<Self, Self::Err> {
        let port: u16 = s.parse().map_err(|_| "Invalid port number")?;
        Ok(Port(port))
    }
}

fn main() {
    let port_str = "8080";
    let port: Result<Port, _> = port_str.parse();
    println!("Parsed port: {:?}", port);

    let log = "level=INFO,service=auth,duration_ms=45";
    for kv in log.split(',') {
        if let Some((k, v)) = kv.split_once('=') {
            println!("  Tag -> Key: {}, Val: {}", k, v);
        }
    }
}
