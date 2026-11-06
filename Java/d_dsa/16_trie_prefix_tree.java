import java.util.HashMap;
import java.util.Map;

class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isWord = false;
}

public class TrieDemo {
    TrieNode root = new TrieNode();
    public void insert(String word) {
        TrieNode curr = root;
        for (char c : word.toCharArray()) {
            curr = curr.children.computeIfAbsent(c, k -> new TrieNode());
        }
        curr.isWord = true;
    }
    public static void main(String[] args) {
        TrieDemo t = new TrieDemo();
        t.insert("java");
        System.out.println("Trie initialized.");
    }
}
