/* Topic: Preprocessor Directives (#define, macros, header guards) */
#include <stdio.h>

#define SQUARE(x) ((x) * (x))
#define MIN(a, b) (((a) < (b)) ? (a) : (b))

int main(void) {
    printf("Square of 9: %d\n", SQUARE(9));
    printf("Min of (14, 8): %d\n", MIN(14, 8));
    return 0;
}
