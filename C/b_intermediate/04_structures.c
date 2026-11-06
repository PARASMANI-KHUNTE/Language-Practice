/* Topic: Structures (struct) */
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float gpa;
};

int main(void) {
    struct Student s1 = {"Alexander", 21, 3.85f};
    printf("Student: %s (Age: %d, GPA: %.2f)\n", s1.name, s1.age, s1.gpa);
    return 0;
}
