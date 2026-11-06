/* Topic: Stack Data Structure (LIFO) */
#include <stdio.h>

#define CAPACITY 5

typedef struct {
    int items[CAPACITY];
    int top;
} Stack;

void push(Stack *s, int val) {
    if (s->top < CAPACITY - 1) {
        s->items[++(s->top)] = val;
    }
}

int pop(Stack *s) {
    if (s->top >= 0) {
        return s->items[(s->top)--];
    }
    return -1;
}

int main(void) {
    Stack s = {.top = -1};
    push(&s, 100);
    push(&s, 200);

    printf("Popped from stack: %d\n", pop(&s));
    printf("Popped from stack: %d\n", pop(&s));
    return 0;
}
