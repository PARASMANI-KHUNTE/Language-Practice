/* Topic: Pointers to Structures and the Arrow Operator (->) */
#include <stdio.h>

struct Vector3D {
    float x, y, z;
};

void scale(struct Vector3D *v, float factor) {
    v->x *= factor;
    v->y *= factor;
    v->z *= factor;
}

int main(void) {
    struct Vector3D vec = {1.0f, 2.0f, 3.0f};
    scale(&vec, 2.5f);
    printf("Scaled vector: (%.1f, %.1f, %.1f)\n", vec.x, vec.y, vec.z);
    return 0;
}
