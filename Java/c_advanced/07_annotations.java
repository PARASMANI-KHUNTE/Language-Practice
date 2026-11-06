// Topic: Custom Annotations
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

@Retention(RetentionPolicy.RUNTIME)
@interface ServiceEndpoint {
    String path();
}

@ServiceEndpoint(path = "/api/v1/health")
public class AnnotationsDemo {
    public static void main(String[] args) {
        ServiceEndpoint endpoint = AnnotationsDemo.class.getAnnotation(ServiceEndpoint.class);
        System.out.println("Annotated endpoint path: " + endpoint.path());
    }
}
