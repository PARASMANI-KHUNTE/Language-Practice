// Topic: Java Reflection API
import java.lang.reflect.Method;

public class ReflectionDemo {
    public void secretGreeting() {
        System.out.println("Secret greeting triggered via Reflection!");
    }

    public static void main(String[] args) throws Exception {
        Class<?> clazz = ReflectionDemo.class;
        System.out.println("Class Name: " + clazz.getName());

        Method method = clazz.getMethod("secretGreeting");
        method.invoke(new ReflectionDemo());
    }
}
