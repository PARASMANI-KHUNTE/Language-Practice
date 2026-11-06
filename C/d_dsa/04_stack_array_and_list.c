#include <stdio.h>

#define MAX 100
int stack[MAX];
int top = -1;

void push(int val) { if (top < MAX - 1) stack[++top] = val; }
int pop(void) { return (top >= 0) ? stack[top--] : -1; }

int main(void) {
    push(42);
    push(84);
    printf("Popped: %d\n", pop());
    return 0;
}
