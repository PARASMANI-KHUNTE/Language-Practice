// Topic: Advanced Generics & Wildcards (PECS)
import java.util.List;

public class AdvancedGenericsDemo {
    // Producer Extends: reads from list
    public static double sumOfList(List<? extends Number> list) {
        double s = 0.0;
        for (Number n : list) s += n.doubleValue();
        return s;
    }

    public static void main(String[] args) {
        List<Integer> ints = List.of(1, 2, 3, 4);
        System.out.println("Sum of ints: " + sumOfList(ints));
    }
}
