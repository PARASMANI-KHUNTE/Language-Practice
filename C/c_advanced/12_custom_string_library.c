/* Topic: Implementing String Algorithms from Scratch */
#include <stdio.h>

size_t customStrlen(const char *s) {
    const char *p = s;
    while (*p) p++;
    return (size_t)(p - s);
}

void customStrcpy(char *dest, const char *src) {
    while ((*dest++ = *src++));
}

int main(void) {
    const char *orig = "Systems C";
    char copy[20];

    customStrcpy(copy, orig);
    printf("Custom strlen: %zu\n", customStrlen(orig));
    printf("Custom copied string: %s\n", copy);
    return 0;
}
