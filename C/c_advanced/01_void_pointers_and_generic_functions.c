/* Topic: Generic Programming in C via void Pointers and qsort */
#include <stdio.h>
#include <stdlib.h>

// Generic comparison function for integers
int compareInts(const void *a, const void *b) {
    int arg1 = *(const int*)a;
    int arg2 = *(const int*)b;
    return (arg1 > arg2) - (arg1 < arg2);
}

int main(void) {
    int arr[] = {42, 12, 88, 3, 27};
    size_t n = sizeof(arr) / sizeof(arr[0]);

    // qsort takes void* array and function pointer comparator
    qsort(arr, n, sizeof(int), compareInts);

    printf("Sorted integers via generic qsort:\n");
    for (size_t i = 0; i < n; i++) printf("%d ", arr[i]);
    printf("\n");

    return 0;
}
