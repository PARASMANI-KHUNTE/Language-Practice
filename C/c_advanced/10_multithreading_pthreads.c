/* Topic: POSIX Threads (pthreads) Architecture */
#include <stdio.h>

/*
POSIX Threads Programming Pattern:
  #include <pthread.h>

  void* worker(void *arg) { ... }

  pthread_t thread;
  pthread_create(&thread, NULL, worker, NULL);
  pthread_join(thread, NULL);
*/

int main(void) {
    printf("POSIX Threads architecture enables system-level multithreading in C.\n");
    return 0;
}
