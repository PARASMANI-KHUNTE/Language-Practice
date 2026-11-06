/* Topic: Dynamic Memory Allocation (malloc, calloc, realloc, free) */
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 5;
    int *arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) {
        perror("Allocation failed");
        return 1;
    }

    for (int i = 0; i < n; i++) arr[i] = (i + 1) * 10;
    printf("Allocated dynamic array first element: %d\n", arr[0]);

    free(arr); // Clean up memory
    arr = NULL;
    return 0;
}
