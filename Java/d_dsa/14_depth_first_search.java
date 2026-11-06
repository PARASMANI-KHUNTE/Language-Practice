import java.util.*;

public class DFSDemo {
    public static void dfs(Map<String, List<String>> g, String node, Set<String> visited, List<String> order) {
        visited.add(node);
        order.add(node);
        for (String next : g.getOrDefault(node, List.of())) {
            if (!visited.contains(next)) dfs(g, next, visited, order);
        }
    }
    public static void main(String[] args) {
        Map<String, List<String>> g = Map.of("1", List.of("2", "3"), "2", List.of("4"));
        List<String> order = new ArrayList<>();
        dfs(g, "1", new HashSet<>(), order);
        System.out.println("DFS: " + order);
    }
}
