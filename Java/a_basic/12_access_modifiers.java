// Topic: Access Modifiers (public, private, protected, default)
public class AccessModifiers {
    public String publicMsg = "Accessible everywhere";
    private String privateSecret = "Accessible only in this class";

    public String getSecret() {
        return privateSecret;
    }

    public static void main(String[] args) {
        AccessModifiers obj = new AccessModifiers();
        System.out.println(obj.publicMsg);
        System.out.println("Accessed via getter: " + obj.getSecret());
    }
}
