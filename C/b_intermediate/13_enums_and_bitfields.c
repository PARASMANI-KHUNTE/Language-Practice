/* Topic: Struct Bitfields for Memory Optimization */
#include <stdio.h>

struct StatusFlags {
    unsigned int is_ready    : 1; // 1 bit
    unsigned int is_active   : 1; // 1 bit
    unsigned int error_code  : 4; // 4 bits (0-15)
};

int main(void) {
    struct StatusFlags status = {1, 0, 9};
    printf("Bitfield struct size: %zu bytes (compact!)\n", sizeof(status));
    printf("Ready: %u, Error code: %u\n", status.is_ready, status.error_code);
    return 0;
}
