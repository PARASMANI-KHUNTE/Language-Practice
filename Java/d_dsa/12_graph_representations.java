import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class GraphDemo {
    Map<String, List<String>> adj = new HashMap<>();
    public void addEdge(String u, String v) {
        adj.computeIfAbsent(u, k -> new ArrayList<>()).add(v);
    }
    public static void main(String[] args) {
        GraphDemo g = new GraphDemo();
        g.addEdge("A", "B");
        System.out.println("Graph created.");
    }
}
