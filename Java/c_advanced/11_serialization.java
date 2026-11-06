// Topic: Object Serialization (Serializable)
import java.io.Serializable;

class SessionState implements Serializable {
    private static final long serialVersionUID = 1L;
    private String token = "auth_tok_88192";
    private transient String passwordHash = "do_not_serialize";
}

public class SerializationDemo {
    public static void main(String[] args) {
        System.out.println("SessionState implements java.io.Serializable with transient fields.");
    }
}
