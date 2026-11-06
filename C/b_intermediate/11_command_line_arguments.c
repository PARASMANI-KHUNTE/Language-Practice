/* Topic: Command-Line Arguments (argc, argv) */
#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Total arguments: %d\n", argc);
    printf("Program executable name: %s\n", argv[0]);
    return 0;
}
