#include <stdio.h>

int maxSubarraySum(int nums[], int n, int k) {
    if (n < k) return 0;
    int sum = 0;
    for (int i = 0; i < k; i++) sum += nums[i];
    int maxSum = sum;
    for (int i = k; i < n; i++) {
        sum += nums[i] - nums[i - k];
        if (sum > maxSum) maxSum = sum;
    }
    return maxSum;
}

int main(void) {
    int arr[] = {2, 1, 5, 1, 3, 2};
    printf("Max sum window k=3: %d\n", maxSubarraySum(arr, 6, 3));
    return 0;
}
