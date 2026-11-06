/* Topic: Signal Handling (signal.h) */
#include <stdio.h>
#include <signal.h>

void handleSigint(int sig) {
    printf("\nCaught signal %d (SIGINT). Exiting safely.\n", sig);
}

int main(void) {
    signal(SIGINT, handleSigint);
    printf("Signal handler registered for SIGINT (Ctrl+C).\n");
    return 0;
}
