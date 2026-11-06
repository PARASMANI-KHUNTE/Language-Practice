/* Topic: Fixed-Bucket Hash Table with Separate Chaining */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define TABLE_SIZE 10

typedef struct Entry {
    char key[32];
    int value;
    struct Entry *next;
} Entry;

unsigned int hash(const char *key) {
    unsigned int h = 0;
    while (*key) h = (h << 5) + *key++;
    return h % TABLE_SIZE;
}

int main(void) {
    printf("Hash index for 'server_port': %u\n", hash("server_port"));
    printf("Hash index for 'api_key':     %u\n", hash("api_key"));
    return 0;
}
