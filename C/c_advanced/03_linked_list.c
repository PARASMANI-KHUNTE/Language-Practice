/* Topic: Singly Linked List Data Structure */
#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

Node* insertFront(Node *head, int value) {
    Node *newNode = (Node*)malloc(sizeof(Node));
    newNode->data = value;
    newNode->next = head;
    return newNode;
}

int main(void) {
    Node *head = NULL;
    head = insertFront(head, 30);
    head = insertFront(head, 20);
    head = insertFront(head, 10);

    printf("Linked List: ");
    for (Node *curr = head; curr != NULL; curr = curr->next) {
        printf("%d -> ", curr->data);
    }
    printf("NULL\n");

    // Free nodes
    while (head != NULL) {
        Node *temp = head;
        head = head->next;
        free(temp);
    }
    return 0;
}
