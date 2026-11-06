// Topic: Multithreading (Thread & Runnable)
public class ThreadingDemo {
    public static void main(String[] args) throws InterruptedException {
        Thread worker = new Thread(() -> {
            System.out.println("Child thread running: " + Thread.currentThread().getName());
        });

        worker.start();
        worker.join();
        System.out.println("Main thread resumed.");
    }
}
