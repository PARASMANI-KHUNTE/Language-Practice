// Topic: Abstract Classes
abstract class BaseRepository {
    abstract void connect();
    abstract void query(String sql);

    public void execute(String sql) {
        connect();
        query(sql);
        System.out.println("Query executed successfully.");
    }
}

class PostgresRepo extends BaseRepository {
    void connect() { System.out.println("Connected to Postgres."); }
    void query(String sql) { System.out.println("Running SQL: " + sql); }
}

public class AbstractionDemo {
    public static void main(String[] args) {
        BaseRepository repo = new PostgresRepo();
        repo.execute("SELECT * FROM users");
    }
}
