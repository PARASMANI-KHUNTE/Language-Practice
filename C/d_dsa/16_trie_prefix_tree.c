#include <stdio.h>
#include <stdlib.h>

#define ALPHABET_SIZE 26

typedef struct TrieNode {
    struct TrieNode *children[ALPHABET_SIZE];
    int isEndOfWord;
} TrieNode;

int main(void) {
    printf("Trie Node structure size: %zu bytes\n", sizeof(TrieNode));
    return 0;
}
