import java.util.HashMap;
import java.util.Map;

public class HashTableDemo {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("port", 8080);
        System.out.println("Port: " + map.get("port"));
    }
}
