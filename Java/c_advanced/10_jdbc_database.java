// Topic: JDBC Architecture Concepts
public class JDBCDemo {
    public static void main(String[] args) {
        System.out.println("=== JDBC Architecture ===");
        System.out.println("DriverManager -> Connection -> PreparedStatement -> ResultSet");
        System.out.println("Connection con = DriverManager.getConnection(url, user, pass);");
    }
}
