// Topic: String Immutability and StringBuilder
public class StringOperations {
    public static void main(String[] args) {
        String str = "  Java Practice Code  ";
        System.out.println("Cleaned: " + str.trim().toUpperCase());
        System.out.println("Substring: " + str.trim().substring(0, 4));

        // StringBuilder for high performance mutable string concatenation
        StringBuilder sb = new StringBuilder("Initial");
        for (int i = 1; i <= 3; i++) {
            sb.append(" -> Step ").append(i);
        }
        System.out.println("StringBuilder result: " + sb.toString());
    }
}
