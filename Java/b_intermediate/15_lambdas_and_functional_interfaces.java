// Topic: Lambda Expressions & Functional Interfaces
import java.util.function.Predicate;
import java.util.function.Function;

public class LambdasDemo {
    public static void main(String[] args) {
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println("Is 14 even? " + isEven.test(14));

        Function<String, Integer> stringLength = String::length; // Method reference
        System.out.println("Length of 'Enterprise': " + stringLength.apply("Enterprise"));
    }
}
