#include <stdio.h>

int partition(int arr[], int low, int high) {
    int pivot = arr[high], i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int t = arr[i]; arr[i] = arr[j]; arr[j] = t;
        }
    }
    int t = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = t;
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high);
    }
}

int main(void) {
    int nums[] = {10, 80, 30, 90, 40};
    quickSort(nums, 0, 4);
    printf("Quick Sorted: %d %d %d %d %d\n", nums[0], nums[1], nums[2], nums[3], nums[4]);
    return 0;
}
