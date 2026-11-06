// Topic: Methods and Overloading
public class Methods {
    public static int add(int a, int b) {
        return a + b;
    }

    // Method Overload
    public static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println("Int add: " + add(10, 20));
        System.out.println("Double add: " + add(10.5, 20.2));
    }
}
