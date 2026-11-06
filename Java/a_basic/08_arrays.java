// Topic: Arrays and java.util.Arrays utilities
import java.util.Arrays;

public class ArraysDemo {
    public static void main(String[] args) {
        int[] numbers = {50, 10, 40, 20, 30};
        Arrays.sort(numbers);
        System.out.println("Sorted array: " + Arrays.toString(numbers));

        int index = Arrays.binarySearch(numbers, 30);
        System.out.println("Found 30 at index: " + index);
    }
}
