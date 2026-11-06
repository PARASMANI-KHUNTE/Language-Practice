// Topic: Reading Input via Scanner
import java.util.Scanner;

public class UserInput {
    public static void main(String[] args) {
        String simulatedInput = "42\nJava Programmer\n";
        Scanner scanner = new Scanner(simulatedInput);

        int luckyNumber = scanner.nextInt();
        scanner.nextLine(); // Consume newline
        String title = scanner.nextLine();

        System.out.println("Title: " + title + ", Number: " + luckyNumber);
        scanner.close();
    }
}
