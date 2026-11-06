// Topic: ExecutorService and CompletableFuture
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class ConcurrencyExecutorsDemo {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "Data from async task")
            .thenApply(String::toUpperCase);

        System.out.println("Future result: " + future.get());
    }
}
