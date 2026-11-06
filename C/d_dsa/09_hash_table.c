#include <stdio.h>
#include <string.h>

#define CAPACITY 16

unsigned int hash(const char *key) {
    unsigned int h = 0;
    while (*key) h = (h << 5) + *key++;
    return h % CAPACITY;
}

int main(void) {
    printf("Hash for 'port': %u\n", hash("port"));
    return 0;
}
