// Topic: Enums with Fields and Methods
enum OrderStatus {
    PENDING("Awaiting Payment"),
    PROCESSING("In Fulfillment"),
    COMPLETED("Delivered");

    private final String description;

    OrderStatus(String description) {
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}

public class EnumDemo {
    public static void main(String[] args) {
        OrderStatus status = OrderStatus.PROCESSING;
        System.out.println("Order Status: " + status + " (" + status.getDescription() + ")");
    }
}
