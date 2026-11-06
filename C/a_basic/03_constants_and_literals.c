/* Topic: Constants, #define, and Enums */
#include <stdio.h>

#define MAX_BUFFER_SIZE 1024

enum Day { MON = 1, TUE, WED, THU, FRI, SAT, SUN };

int main(void) {
    const double TAX_RATE = 0.0825;
    printf("Max Buffer: %d\n", MAX_BUFFER_SIZE);
    printf("Tax Rate: %.4f\n", TAX_RATE);
    printf("Wednesday enum value: %d\n", WED);

    return 0;
}
