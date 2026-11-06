// Topic: Optional Class
import java.util.Optional;

public class OptionalDemo {
    public static Optional<String> findUser(int id) {
        if (id == 1) return Optional.of("Alice");
        return Optional.empty();
    }

    public static void main(String[] args) {
        String user = findUser(1).orElse("Guest");
        System.out.println("User found: " + user);

        String missing = findUser(99).orElse("Default Guest");
        System.out.println("User fallback: " + missing);
    }
}
