/* Topic: Variables, Data Types, and Format Specifiers */
#include <stdio.h>

int main(void) {
    int count = 100;
    float pi = 3.14159f;
    double preciseValue = 123456.789012;
    char letter = 'C';

    printf("Integer: %d (size: %zu bytes)\n", count, sizeof(count));
    printf("Float: %.2f (size: %zu bytes)\n", pi, sizeof(pi));
    printf("Double: %.6lf (size: %zu bytes)\n", preciseValue, sizeof(preciseValue));
    printf("Char: %c (size: %zu byte)\n", letter, sizeof(letter));

    return 0;
}
