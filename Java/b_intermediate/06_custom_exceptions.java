// Topic: Custom Exception Classes
class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}

class BankAccount {
    private double balance = 100.0;

    public void withdraw(double amount) throws InsufficientFundsException {
        if (amount > balance) {
            throw new InsufficientFundsException("Cannot withdraw $" + amount + "; Balance is $" + balance);
        }
        balance -= amount;
    }
}

public class CustomExceptionsDemo {
    public static void main(String[] args) {
        BankAccount acc = new BankAccount();
        try {
            acc.withdraw(150.0);
        } catch (InsufficientFundsException e) {
            System.err.println("Transaction declined: " + e.getMessage());
        }
    }
}
