// Topic: Java Streams API
import java.util.List;
import java.util.stream.Collectors;

public class StreamsDemo {
    public static void main(String[] args) {
        List<String> names = List.of("alice", "bob", "alexander", "charlie", "anna");

        List<String> aNamesUpper = names.stream()
            .filter(name -> name.startsWith("a"))
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());

        System.out.println("Filtered & Transformed: " + aNamesUpper);
    }
}
