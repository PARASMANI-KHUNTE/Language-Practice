import java.util.ArrayDeque;
import java.util.Queue;

public class QueueDemo {
    public static void main(String[] args) {
        Queue<String> q = new ArrayDeque<>();
        q.offer("First");
        q.offer("Second");
        System.out.println("Polled from queue: " + q.poll());
    }
}
