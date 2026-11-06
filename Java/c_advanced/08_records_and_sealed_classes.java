// Topic: Modern Java: Records & Sealed Classes
record UserRecord(long id, String username, String email) {}

sealed interface NetworkResponse permits Success, ErrorResponse {}

final class Success implements NetworkResponse {
    public String data = "OK";
}

final class ErrorResponse implements NetworkResponse {
    public String error = "Timeout";
}

public class RecordsAndSealedDemo {
    public static void main(String[] args) {
        UserRecord user = new UserRecord(1, "alex_dev", "alex@example.com");
        System.out.println("Record user: " + user);
    }
}
