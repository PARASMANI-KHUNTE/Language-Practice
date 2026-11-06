#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int t = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = t;
            }
        }
    }
}

int main(void) {
    int nums[] = {64, 34, 25, 12, 22};
    bubbleSort(nums, 5);
    printf("Sorted: %d %d %d %d %d\n", nums[0], nums[1], nums[2], nums[3], nums[4]);
    return 0;
}
