import java.util.LinkedList;

public class DoublyLinkedListDemo {
    public static void main(String[] args) {
        LinkedList<String> dll = new LinkedList<>();
        dll.addFirst("Alpha");
        dll.addLast("Beta");
        System.out.println("DLL first: " + dll.getFirst());
    }
}
