/* Topic: Non-Local Jumps with setjmp and longjmp (C Exception Simulation) */
#include <stdio.h>
#include <setjmp.h>

jmp_buf jumpBuffer;

void riskyFunction(void) {
    printf("Inside riskyFunction: encountering error, jumping back!\n");
    longjmp(jumpBuffer, 404); // Jumps back to setjmp call point
}

int main(void) {
    int state = setjmp(jumpBuffer);
    if (state == 0) {
        printf("Initial entry point established.\n");
        riskyFunction();
    } else {
        printf("Caught simulated exception! Error code: %d\n", state);
    }
    return 0;
}
