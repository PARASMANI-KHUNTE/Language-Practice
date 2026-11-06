#include <stdio.h>

#define SIZE 5
int queue[SIZE];
int front = 0, rear = 0, count = 0;

void enqueue(int val) {
    if (count < SIZE) {
        queue[rear] = val;
        rear = (rear + 1) % SIZE;
        count++;
    }
}

int dequeue(void) {
    if (count == 0) return -1;
    int val = queue[front];
    front = (front + 1) % SIZE;
    count--;
    return val;
}

int main(void) {
    enqueue(10); enqueue(20);
    printf("Dequeued: %d\n", dequeue());
    return 0;
}
