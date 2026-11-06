/**
 * DSA Topic 16: Trie (Prefix Tree)
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(word) {
    let curr = this.root;
    for (const c of word) {
      if (!curr.children[c]) curr.children[c] = new TrieNode();
      curr = curr.children[c];
    }
    curr.isWord = true;
  }
  startsWith(prefix) {
    let curr = this.root;
    for (const c of prefix) {
      if (!curr.children[c]) return false;
      curr = curr.children[c];
    }
    return true;
  }
}

const t = new Trie();
t.insert("javascript");
console.log("Starts with 'java':", t.startsWith("java"));
console.log("Starts with 'type':", t.startsWith("type"));
