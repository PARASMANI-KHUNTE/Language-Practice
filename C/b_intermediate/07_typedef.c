/* Topic: Type Aliasing with typedef */
#include <stdio.h>

typedef unsigned long long uint64_t;

typedef struct {
    double latitude;
    double longitude;
} GeoPoint;

int main(void) {
    uint64_t largeId = 18446744073709551615ULL;
    GeoPoint loc = {37.7749, -122.4194};

    printf("ID: %llu\n", largeId);
    printf("Location: (%.4f, %.4f)\n", loc.latitude, loc.longitude);
    return 0;
}
