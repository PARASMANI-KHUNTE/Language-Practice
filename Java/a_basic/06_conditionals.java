// Topic: If-Else and Modern Switch Expressions
public class Conditionals {
    public static void main(String[] args) {
        int score = 88;
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: C");
        }

        // Modern Switch Expression (Java 14+)
        String day = "FRIDAY";
        String feeling = switch (day) {
            case "MONDAY" -> "Start of week";
            case "FRIDAY" -> "Weekend vibes!";
            default -> "Midweek grind";
        };
        System.out.println("Day status: " + feeling);
    }
}
