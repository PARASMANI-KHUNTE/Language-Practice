/* Topic: Binary File Operations (fread, fwrite) */
#include <stdio.h>

typedef struct {
    int id;
    char code[4];
} Record;

int main(void) {
    Record r = {101, "SYS"};
    printf("Binary record size: %zu bytes\n", sizeof(r));
    printf("fwrite(&r, sizeof(Record), 1, file_ptr);\n");
    return 0;
}
