package main

import "fmt"

type TrieNode struct {
    Children map[rune]*TrieNode
    IsWord   bool
}

type Trie struct {
    Root *TrieNode
}

func NewTrie() *Trie {
    return &Trie{Root: &TrieNode{Children: make(map[rune]*TrieNode)}}
}

func (t *Trie) Insert(word string) {
    curr := t.Root
    for _, ch := range word {
        if _, exists := curr.Children[ch]; !exists {
            curr.Children[ch] = &TrieNode{Children: make(map[rune]*TrieNode)}
        }
        curr = curr.Children[ch]
    }
    curr.IsWord = true
}

func main() {
    trie := NewTrie()
    trie.Insert("golang")
    fmt.Println("Trie initialized with 'golang'.")
}
