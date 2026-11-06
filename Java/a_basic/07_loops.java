// Topic: Loops (for, while, do-while, enhanced for)
public class Loops {
    public static void main(String[] args) {
        // Standard loop
        for (int i = 1; i <= 3; i++) {
            System.out.println("Standard loop: " + i);
        }

        // Enhanced for loop
        String[] fruits = {"Apple", "Banana", "Cherry"};
        for (String fruit : fruits) {
            System.out.println("Fruit: " + fruit);
        }
    }
}
