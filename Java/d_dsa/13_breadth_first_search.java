import java.util.*;

public class BFSDemo {
    public static List<String> bfs(Map<String, List<String>> graph, String start) {
        List<String> order = new ArrayList<>();
        Set<String> visited = new HashSet<>();
        Queue<String> queue = new ArrayDeque<>();

        queue.offer(start);
        visited.add(start);

        while (!queue.isEmpty()) {
            String node = queue.poll();
            order.add(node);
            for (String neighbor : graph.getOrDefault(node, List.of())) {
                if (visited.add(neighbor)) {
                    queue.offer(neighbor);
                }
            }
        }
        return order;
    }
    public static void main(String[] args) {
        Map<String, List<String>> g = Map.of("A", List.of("B", "C"), "B", List.of("D"));
        System.out.println("BFS: " + bfs(g, "A"));
    }
}
