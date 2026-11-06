/* Topic: Header Files and Modular C Architecture */
#include <stdio.h>

/*
In multi-file C projects:
  - Header files (.h) contain type definitions and function prototypes
  - Source files (.c) contain implementation details
  - Include guards (#ifndef HEADER_H ... #endif) prevent multiple definition errors
*/

int main(void) {
    printf("Modular C separates declarations in .h and implementations in .c\n");
    return 0;
}
