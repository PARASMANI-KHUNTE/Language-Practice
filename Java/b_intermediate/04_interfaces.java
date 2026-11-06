// Topic: Interfaces with Default and Static Methods
interface Printable {
    void print();

    default void printWithBorder() {
        System.out.println("***********************");
        print();
        System.out.println("***********************");
    }

    static void info() {
        System.out.println("Printable Interface Specification v1.0");
    }
}

class Document implements Printable {
    private String text;
    public Document(String text) { this.text = text; }
    public void print() { System.out.println(text); }
}

public class InterfaceDemo {
    public static void main(String[] args) {
        Printable doc = new Document("System Architecture Report");
        doc.printWithBorder();
        Printable.info();
    }
}
