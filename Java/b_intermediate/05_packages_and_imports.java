// Topic: Packages and Static Imports
import static java.lang.Math.sqrt;
import static java.lang.Math.PI;

public class PackagesDemo {
    public static void main(String[] args) {
        System.out.println("Square root of 81 via static import: " + sqrt(81));
        System.out.println("PI via static import: " + PI);
    }
}
