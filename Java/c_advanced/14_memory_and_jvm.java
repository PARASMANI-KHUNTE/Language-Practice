// Topic: JVM Architecture & Garbage Collection
public class MemoryAndJVMDemo {
    public static void main(String[] args) {
        Runtime runtime = Runtime.getRuntime();
        System.out.printf("Total Memory: %d MB\n", runtime.totalMemory() / (1024 * 1024));
        System.out.printf("Free Memory:  %d MB\n", runtime.freeMemory() / (1024 * 1024));
    }
}
