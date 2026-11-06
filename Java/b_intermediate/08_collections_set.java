// Topic: Collections Framework - Set (HashSet & TreeSet)
import java.util.Set;
import java.util.HashSet;
import java.util.TreeSet;

public class SetDemo {
    public static void main(String[] args) {
        Set<String> uniqueTags = new HashSet<>();
        uniqueTags.add("backend");
        uniqueTags.add("java");
        uniqueTags.add("backend"); // Duplicate ignored

        System.out.println("HashSet unique count: " + uniqueTags.size());

        // TreeSet keeps natural order
        Set<Integer> sortedNumbers = new TreeSet<>(Set.of(40, 10, 50, 20));
        System.out.println("TreeSet sorted: " + sortedNumbers);
    }
}
