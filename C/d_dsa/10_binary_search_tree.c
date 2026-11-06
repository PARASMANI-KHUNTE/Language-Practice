#include <stdio.h>
#include <stdlib.h>

typedef struct BSTNode {
    int val;
    struct BSTNode *left;
    struct BSTNode *right;
} BSTNode;

BSTNode* insert(BSTNode *root, int val) {
    if (!root) {
        BSTNode *n = (BSTNode*)malloc(sizeof(BSTNode));
        n->val = val; n->left = n->right = NULL;
        return n;
    }
    if (val < root->val) root->left = insert(root->left, val);
    else root->right = insert(root->right, val);
    return root;
}

int main(void) {
    BSTNode *root = insert(NULL, 50);
    insert(root, 30);
    printf("BST Root: %d\n", root->val);
    free(root->left);
    free(root);
    return 0;
}
