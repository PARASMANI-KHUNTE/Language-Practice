/* Topic: C Memory Segments (Text, Data, BSS, Heap, Stack) */
#include <stdio.h>
#include <stdlib.h>

int globalInitialized = 42; // Data segment
int globalUninitialized;    // BSS segment

int main(void) {
    int stackVar = 10;                     // Stack segment
    int *heapVar = (int*)malloc(sizeof(int)); // Heap segment
    *heapVar = 99;

    printf("Addresses in memory:\n");
    printf("  Data Segment (global init):  %p\n", (void*)&globalInitialized);
    printf("  BSS Segment (global uninit): %p\n", (void*)&globalUninitialized);
    printf("  Heap Segment (malloc):       %p\n", (void*)heapVar);
    printf("  Stack Segment (local var):   %p\n", (void*)&stackVar);

    free(heapVar);
    return 0;
}
