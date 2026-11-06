// Topic: Wrapper Classes and Autoboxing
public class WrapperClasses {
    public static void main(String[] args) {
        // Autoboxing: primitive int to Integer
        Integer boxedInt = 100;
        // Unboxing: Integer to primitive int
        int unboxed = boxedInt + 25;

        System.out.println("Boxed value: " + boxedInt + ", Unboxed calculation: " + unboxed);
        System.out.println("Parsed from string: " + Integer.parseInt("450"));
    }
}
