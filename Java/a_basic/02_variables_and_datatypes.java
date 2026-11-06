// Topic: Primitive and Reference Data Types
public class VariablesAndDatatypes {
    public static void main(String[] args) {
        byte b = 127;
        short s = 32000;
        int age = 25;
        long worldPopulation = 8000000000L;
        float price = 19.99f;
        double pi = 3.14159265359;
        boolean isActive = true;
        char grade = 'A';

        // Local variable type inference (Java 10+)
        var username = "java_developer";

        System.out.println("User: " + username + " (Age: " + age + ", Grade: " + grade + ")");
        System.out.println("Primitives initialized successfully.");
    }
}
