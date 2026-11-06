/* Topic: Pointer Arithmetic and Array Equivalence */
#include <stdio.h>

int main(void) {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr; // Points to first element

    for (int i = 0; i < 5; i++) {
        printf("Index %d: value = %d (address = %p)\n", i, *(ptr + i), (void*)(ptr + i));
    }

    return 0;
}
