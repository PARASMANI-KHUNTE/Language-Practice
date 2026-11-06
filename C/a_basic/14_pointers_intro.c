/* Topic: Introduction to Pointers */
#include <stdio.h>

int main(void) {
    int value = 42;
    int *ptr = &value; // Store memory address of value

    printf("Value: %d\n", value);
    printf("Address (&value): %p\n", (void*)&value);
    printf("Pointer stored address: %p\n", (void*)ptr);
    printf("Dereferenced pointer (*ptr): %d\n", *ptr);

    *ptr = 99; // Mutate value via pointer
    printf("Value after pointer mutation: %d\n", value);

    return 0;
}
