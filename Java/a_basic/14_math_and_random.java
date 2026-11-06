// Topic: Math and Random Classes
import java.util.Random;

public class MathAndRandom {
    public static void main(String[] args) {
        System.out.println("Max(10, 25): " + Math.max(10, 25));
        System.out.println("Square root of 144: " + Math.sqrt(144));
        System.out.println("Power 2^8: " + Math.pow(2, 8));

        Random rand = new Random(42);
        System.out.println("Random int (0-99): " + rand.nextInt(100));
    }
}
