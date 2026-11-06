/* Topic: Functions, Declarations, and Parameters */
#include <stdio.h>

int max(int a, int b) {
    return (a > b) ? a : b;
}

int main(void) {
    printf("Max of (45, 80): %d\n", max(45, 80));
    return 0;
}
