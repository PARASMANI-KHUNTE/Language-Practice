#include <stdio.h>

int parent[10];

int find(int i) {
    if (parent[i] == i) return i;
    return parent[i] = find(parent[i]);
}

void unionSets(int i, int j) {
    int rI = find(i), rJ = find(j);
    if (rI != rJ) parent[rI] = rJ;
}

int main(void) {
    for (int i = 0; i < 10; i++) parent[i] = i;
    unionSets(1, 2);
    printf("1 & 2 connected: %d\n", find(1) == find(2));
    return 0;
}
