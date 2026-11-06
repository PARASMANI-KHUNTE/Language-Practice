// DSA Topic 16: Trie (Prefix Tree)
use std::collections::HashMap;

#[derive(Default)]
struct TrieNode {
    children: HashMap<char, TrieNode>,
    is_word: bool,
}

#[derive(Default)]
struct Trie {
    root: TrieNode,
}

impl Trie {
    fn new() -> Self { Self::default() }

    fn insert(&mut self, word: &str) {
        let mut curr = &mut self.root;
        for c in word.chars() {
            curr = curr.children.entry(c).or_default();
        }
        curr.is_word = true;
    }
}

fn main() {
    let mut trie = Trie::new();
    trie.insert("rust");
    println!("Trie populated.");
}
