/* Topic: Double Pointers (Pointer to Pointer) */
#include <stdio.h>
#include <stdlib.h>

void allocateMatrix(int ***matrix, int rows, int cols) {
    *matrix = (int**)malloc(rows * sizeof(int*));
    for (int r = 0; r < rows; r++) {
        (*matrix)[r] = (int*)malloc(cols * sizeof(int));
        for (int c = 0; c < cols; c++) {
            (*matrix)[r][c] = r * 10 + c;
        }
    }
}

int main(void) {
    int **grid = NULL;
    allocateMatrix(&grid, 2, 3);

    printf("Dynamic 2D grid[1][2] = %d\n", grid[1][2]);

    // Free memory
    free(grid[0]);
    free(grid[1]);
    free(grid);
    return 0;
}
