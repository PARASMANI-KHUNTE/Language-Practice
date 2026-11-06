/* Topic: Unions (Shared Memory Structures) */
#include <stdio.h>

union DataPacket {
    int intVal;
    float floatVal;
    char charVal;
};

int main(void) {
    union DataPacket packet;
    packet.intVal = 42;
    printf("packet.intVal: %d\n", packet.intVal);

    packet.floatVal = 3.14f; // Overwrites shared memory
    printf("packet.floatVal: %.2f\n", packet.floatVal);
    printf("Union size is size of largest member: %zu bytes\n", sizeof(packet));

    return 0;
}
