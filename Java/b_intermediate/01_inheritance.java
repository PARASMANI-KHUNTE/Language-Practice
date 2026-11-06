// Topic: Inheritance & The super Keyword
class Animal {
    protected String species;

    public Animal(String species) {
        this.species = species;
    }

    public void makeSound() {
        System.out.println("Animal makes generic sound");
    }
}

class Dog extends Animal {
    private String breed;

    public Dog(String breed) {
        super("Canine");
        this.breed = breed;
    }

    @Override
    public void makeSound() {
        System.out.println("Dog barks! (Species: " + species + ", Breed: " + breed + ")");
    }
}

public class InheritanceDemo {
    public static void main(String[] args) {
        Dog d = new Dog("Labrador");
        d.makeSound();
    }
}
