// Topic: Operators (Arithmetic, Relational, Logical, Bitwise)
public class Operators {
    public static void main(String[] args) {
        int a = 20, b = 6;
        System.out.println("Sum: " + (a + b) + ", Modulo: " + (a % b));

        // Logical
        boolean condition = (a > 10) && (b < 10);
        System.out.println("Condition met: " + condition);

        // Bitwise
        System.out.println("Bitwise AND (a & b): " + (a & b));
        System.out.println("Ternary: " + (a > b ? "a is greater" : "b is greater"));
    }
}
