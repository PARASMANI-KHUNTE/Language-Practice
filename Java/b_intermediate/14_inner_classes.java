// Topic: Nested and Anonymous Classes
class Outer {
    private String secret = "Outer Private State";

    class Inner {
        void reveal() {
            System.out.println("Inner class accessed: " + secret);
        }
    }
}

public class InnerClassesDemo {
    public static void main(String[] args) {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.reveal();
    }
}
