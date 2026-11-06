// Topic: Generics
class Box<T> {
    private T content;
    public void set(T content) { this.content = content; }
    public T get() { return content; }
}

public class GenericsDemo {
    public static void main(String[] args) {
        Box<String> strBox = new Box<>();
        strBox.set("Generic String Content");
        System.out.println("Box content: " + strBox.get());
    }
}
