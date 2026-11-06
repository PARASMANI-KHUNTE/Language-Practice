class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class SinglyLinkedList {
    ListNode head;

    public void prepend(int val) {
        ListNode node = new ListNode(val);
        node.next = head;
        head = node;
    }

    public static void main(String[] args) {
        SinglyLinkedList list = new SinglyLinkedList();
        list.prepend(20);
        list.prepend(10);
        System.out.println("Head val: " + list.head.val);
    }
}
