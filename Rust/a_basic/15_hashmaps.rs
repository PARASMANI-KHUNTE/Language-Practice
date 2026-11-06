// Topic: Hash Maps (std::collections::HashMap)
// Concepts Covered:
//   - Creating hash maps and ownership of keys/values
//   - Insert, get, and remove
//   - The Entry API: .entry(key).or_insert(value)
//   - Word frequency counter idiom

use std::collections::HashMap;

fn main() {
    let mut scores: HashMap<String, i32> = HashMap::new();
    scores.insert(String::from("Blue Team"), 10);
    scores.insert(String::from("Yellow Team"), 50);

    // Retrieve safely
    let team_name = String::from("Blue Team");
    if let Some(score) = scores.get(&team_name) {
        println!("{}: {} points", team_name, score);
    }

    // Entry API - update or insert default
    scores.entry(String::from("Red Team")).or_insert(30);

    // Word count idiom
    let text = "hello world wonderful world hello rust";
    let mut word_count: HashMap<&str, u32> = HashMap::new();
    for word in text.split_whitespace() {
        let count = word_count.entry(word).or_insert(0);
        *count += 1;
    }

    println!("Word counts: {:?}", word_count);
}
