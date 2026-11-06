// DSA Topic 09: Hash Map Implementation (std::collections)
use std::collections::HashMap;

fn main() {
    let mut map = HashMap::new();
    map.insert("port", 8080);
    map.insert("timeout", 30);
    println!("Port config: {:?}", map.get("port"));
}
