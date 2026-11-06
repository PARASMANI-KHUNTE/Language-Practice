/* Topic: Storage Classes (auto, static, extern, register) */
#include <stdio.h>

void counterFunction(void) {
    // Static variable preserves value between function calls
    static int callCount = 0;
    callCount++;
    printf("Function called %d time(s)\n", callCount);
}

int main(void) {
    counterFunction();
    counterFunction();
    counterFunction();
    return 0;
}
