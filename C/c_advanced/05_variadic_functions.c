/* Topic: Variadic Functions (stdarg.h) */
#include <stdio.h>
#include <stdarg.h>

double average(int count, ...) {
    va_list args;
    va_start(args, count);

    double sum = 0.0;
    for (int i = 0; i < count; i++) {
        sum += va_arg(args, double);
    }
    va_end(args);

    return sum / count;
}

int main(void) {
    printf("Average (3 items): %.2f\n", average(3, 10.0, 20.0, 30.0));
    printf("Average (4 items): %.2f\n", average(4, 5.0, 15.0, 25.0, 35.0));
    return 0;
}
