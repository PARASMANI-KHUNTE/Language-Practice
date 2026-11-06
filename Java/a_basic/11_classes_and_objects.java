// Topic: Classes, Constructors, and Objects
class Book {
    private String title;
    private String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public String getInfo() {
        return "'" + title + "' by " + author;
    }
}

public class ClassesAndObjects {
    public static void main(String[] args) {
        Book b = new Book("Effective Java", "Joshua Bloch");
        System.out.println("Book Info: " + b.getInfo());
    }
}
