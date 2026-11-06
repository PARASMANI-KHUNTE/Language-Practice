// Topic: Modern File I/O (java.nio.file)
import java.nio.file.Path;
import java.nio.file.Paths;

public class ModernFileIODemo {
    public static void main(String[] args) {
        Path path = Paths.get("sample.txt");
        System.out.println("File Name: " + path.getFileName());
        System.out.println("Is Absolute: " + path.isAbsolute());
    }
}
