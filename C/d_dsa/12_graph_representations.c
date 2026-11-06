#include <stdio.h>

#define V 4
int adjMatrix[V][V];

void addEdge(int u, int v) {
    adjMatrix[u][v] = 1;
    adjMatrix[v][u] = 1;
}

int main(void) {
    addEdge(0, 1);
    addEdge(1, 2);
    printf("Edge 0-1 exists? %d\n", adjMatrix[0][1]);
    return 0;
}
