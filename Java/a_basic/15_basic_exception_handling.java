// Topic: Exception Handling (try-catch-finally)
public class BasicExceptionHandling {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.err.println("Caught expected arithmetic exception: " + e.getMessage());
        } finally {
            System.out.println("Finally block always executes.");
        }
    }
}
