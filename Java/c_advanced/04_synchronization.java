// Topic: Synchronization & Atomic Operations
import java.util.concurrent.atomic.AtomicInteger;

public class SyncDemo {
    private static final AtomicInteger atomicCounter = new AtomicInteger(0);

    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) atomicCounter.incrementAndGet();
        });
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) atomicCounter.incrementAndGet();
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Atomic thread-safe counter (expected 2000): " + atomicCounter.get());
    }
}
