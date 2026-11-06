/* Topic: Struct Padding, Memory Alignment, and offsetof */
#include <stdio.h>
#include <stddef.h>

struct Misaligned {
    char a;    // 1 byte (+3 padding bytes)
    int b;     // 4 bytes
    char c;    // 1 byte (+3 padding bytes)
};

int main(void) {
    printf("Struct size with alignment padding: %zu bytes\n", sizeof(struct Misaligned));
    printf("Offset of member 'b': %zu bytes\n", offsetof(struct Misaligned, b));
    printf("Offset of member 'c': %zu bytes\n", offsetof(struct Misaligned, c));
    return 0;
}
