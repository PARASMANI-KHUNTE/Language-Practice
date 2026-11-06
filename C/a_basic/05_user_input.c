/* Topic: User Input with scanf and sscanf */
#include <stdio.h>

int main(void) {
    char inputBuffer[] = "25 98.6";
    int age;
    float temp;

    // sscanf reads formatted input from string buffer safely
    sscanf(inputBuffer, "%d %f", &age, &temp);
    printf("Parsed age: %d, temperature: %.1f\n", age, temp);

    return 0;
}
