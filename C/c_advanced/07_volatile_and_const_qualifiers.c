/* Topic: Type Qualifiers: const and volatile */
#include <stdio.h>

int main(void) {
    // 1. Pointer to constant integer (data cannot be changed via ptr)
    int val = 10;
    const int *ptrToConst = &val;

    // 2. Constant pointer to integer (pointer address cannot be changed)
    int *const constPtr = &val;

    // 3. Volatile tells compiler not to cache variable in CPU registers (e.g., hardware sensors)
    volatile int sensorValue = 100;

    printf("ptrToConst value: %d, sensorValue: %d\n", *ptrToConst, sensorValue);
    _ = constPtr;
    return 0;
}
