// Topic: Collections Framework - List (ArrayList & LinkedList)
import java.util.ArrayList;
import java.util.List;

public class ListDemo {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Kotlin");
        list.add("Scala");

        System.out.println("List elements: " + list);
        list.remove("Scala");
        System.out.println("Contains 'Java'? " + list.contains("Java"));
    }
}
