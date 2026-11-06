#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int val;
    struct Node *next;
} Node;

Node* prepend(Node *head, int val) {
    Node *n = (Node*)malloc(sizeof(Node));
    n->val = val;
    n->next = head;
    return n;
}

int main(void) {
    Node *head = NULL;
    head = prepend(head, 20);
    head = prepend(head, 10);
    printf("Head node: %d\n", head->val);
    free(head->next);
    free(head);
    return 0;
}
