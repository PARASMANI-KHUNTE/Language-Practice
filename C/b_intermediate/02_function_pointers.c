/* Topic: Function Pointers and Callbacks */
#include <stdio.h>

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

// Higher-order function receiving function pointer
void execute(int (*operation)(int, int), int x, int y) {
    printf("Execution result: %d\n", operation(x, y));
}

int main(void) {
    execute(add, 10, 5);
    execute(multiply, 10, 5);
    return 0;
}
