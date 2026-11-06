/* Topic: Loops (for, while, do-while) */
#include <stdio.h>

int main(void) {
    // For loop
    for (int i = 1; i <= 3; i++) {
        printf("For loop step: %d\n", i);
    }

    // While loop
    int count = 2;
    while (count > 0) {
        printf("While count: %d\n", count--);
    }

    return 0;
}
