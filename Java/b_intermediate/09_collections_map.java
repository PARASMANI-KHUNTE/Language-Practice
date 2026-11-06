// Topic: Collections Framework - Map (HashMap & TreeMap)
import java.util.HashMap;
import java.util.Map;

public class MapDemo {
    public static void main(String[] args) {
        Map<String, Integer> userPoints = new HashMap<>();
        userPoints.put("Alice", 95);
        userPoints.put("Bob", 80);

        System.out.println("Alice's score: " + userPoints.get("Alice"));
        System.out.println("Default score for Eve: " + userPoints.getOrDefault("Eve", 0));

        userPoints.forEach((k, v) -> System.out.println("  " + k + " => " + v));
    }
}
