/**
 * DSA Topic 16: Trie (Prefix Tree)
 */
class TrieNode {
  children = new Map<string, TrieNode>();
  isWord = false;
}

class Trie {
  root = new TrieNode();

  insert(word: string): void {
    let curr = this.root;
    for (const c of word) {
      if (!curr.children.has(c)) curr.children.set(c, new TrieNode());
      curr = curr.children.get(c)!;
    }
    curr.isWord = true;
  }
}

const t = new Trie();
t.insert("typescript");
console.log("Trie initialized.");
