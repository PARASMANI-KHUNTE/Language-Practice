// Topic: Behavioral Pattern: Strategy Pattern
interface PaymentStrategy {
    void pay(double amount);
}

class CreditCardStrategy implements PaymentStrategy {
    public void pay(double amount) { System.out.printf("Paid $%.2f with Credit Card\n", amount); }
}

public class StructuralBehavioralPatternsDemo {
    public static void main(String[] args) {
        PaymentStrategy strategy = new CreditCardStrategy();
        strategy.pay(99.95);
    }
}
