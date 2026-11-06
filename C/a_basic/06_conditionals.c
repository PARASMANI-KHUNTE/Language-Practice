/* Topic: Conditionals (if-else, switch, ternary) */
#include <stdio.h>

int main(void) {
    int score = 85;
    if (score >= 90) {
        printf("Grade: A\n");
    } else if (score >= 80) {
        printf("Grade: B\n");
    } else {
        printf("Grade: C\n");
    }

    int code = 200;
    switch (code) {
        case 200: printf("HTTP Status: OK\n"); break;
        case 404: printf("HTTP Status: Not Found\n"); break;
        default:  printf("HTTP Status: Unknown\n"); break;
    }

    return 0;
}
