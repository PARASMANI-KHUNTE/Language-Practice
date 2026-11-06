/* Topic: One-Dimensional Arrays */
#include <stdio.h>

int main(void) {
    int scores[5] = {90, 75, 88, 92, 80};
    int len = sizeof(scores) / sizeof(scores[0]);

    printf("Array elements:\n");
    for (int i = 0; i < len; i++) {
        printf("  scores[%d] = %d\n", i, scores[i]);
    }

    return 0;
}
