import java.util.PriorityQueue;

public class PriorityQueueDemo {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(40); pq.offer(10); pq.offer(30);
        System.out.println("Min polled: " + pq.poll()); // 10
    }
}
