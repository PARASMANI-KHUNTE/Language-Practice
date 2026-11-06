#include <stdio.h>
#include <stdlib.h>

typedef struct DNode {
    int val;
    struct DNode *prev;
    struct DNode *next;
} DNode;

int main(void) {
    DNode *first = (DNode*)malloc(sizeof(DNode));
    first->val = 100;
    first->prev = first->next = NULL;
    printf("DLL Node: %d\n", first->val);
    free(first);
    return 0;
}
