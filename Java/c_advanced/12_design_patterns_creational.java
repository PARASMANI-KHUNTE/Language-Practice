// Topic: Creational Design Patterns: Singleton & Factory
class DatabasePool {
    private static DatabasePool instance;
    private DatabasePool() {}

    public static synchronized DatabasePool getInstance() {
        if (instance == null) {
            instance = new DatabasePool();
        }
        return instance;
    }
}

public class CreationalPatternsDemo {
    public static void main(String[] args) {
        DatabasePool p1 = DatabasePool.getInstance();
        DatabasePool p2 = DatabasePool.getInstance();
        System.out.println("Singleton verify (p1 == p2): " + (p1 == p2));
    }
}
