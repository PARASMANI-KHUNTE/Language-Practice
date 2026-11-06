/* Topic: Bit Masking and Manipulation */
#include <stdio.h>

#define FLAG_READ    (1 << 0) // 0001
#define FLAG_WRITE   (1 << 1) // 0010
#define FLAG_EXECUTE (1 << 2) // 0100

int main(void) {
    int permissions = FLAG_READ | FLAG_WRITE;

    printf("Has read access: %s\n", (permissions & FLAG_READ) ? "YES" : "NO");
    printf("Has execute access: %s\n", (permissions & FLAG_EXECUTE) ? "YES" : "NO");

    return 0;
}
