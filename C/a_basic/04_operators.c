/* Topic: Arithmetic, Logical, and Bitwise Operators */
#include <stdio.h>

int main(void) {
    int a = 12, b = 5;
    printf("Arithmetic: a + b = %d, a / b = %d, a %% b = %d\n", a + b, a / b, a % b);

    // Bitwise operations
    int x = 6;  // 0110
    int y = 3;  // 0011
    printf("Bitwise AND (x & y): %d\n", x & y);
    printf("Bitwise OR  (x | y): %d\n", x | y);
    printf("Left Shift  (x << 1): %d\n", x << 1);

    return 0;
}
