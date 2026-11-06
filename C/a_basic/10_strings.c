/* Topic: Strings in C (Null-terminated Character Arrays) */
#include <stdio.h>
#include <string.h>

int main(void) {
    char greeting[30] = "Hello";
    strcat(greeting, ", C World!");

    printf("String: %s\n", greeting);
    printf("Length: %zu characters\n", strlen(greeting));
    printf("Comparison (strcmp): %d\n", strcmp("apple", "banana"));

    return 0;
}
