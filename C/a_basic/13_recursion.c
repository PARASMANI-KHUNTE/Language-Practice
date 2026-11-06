/* Topic: Recursion */
#include <stdio.h>

long long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main(void) {
    printf("Factorial of 6: %lld\n", factorial(6));
    return 0;
}
