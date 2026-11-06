public class ArrayOperations {
    public static int maxSubarraySum(int[] nums, int k) {
        if (nums.length < k) return 0;
        int sum = 0;
        for (int i = 0; i < k; i++) sum += nums[i];
        int maxSum = sum;
        for (int i = k; i < nums.length; i++) {
            sum += nums[i] - nums[i - k];
            maxSum = Math.max(maxSum, sum);
        }
        return maxSum;
    }
    public static void main(String[] args) {
        int[] arr = {2, 1, 5, 1, 3, 2};
        System.out.println("Max sum window k=3: " + maxSubarraySum(arr, 3));
    }
}
