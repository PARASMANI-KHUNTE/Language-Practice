/**
 * DSA Topic 07: Insertion Sort
 */
function insertionSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && compare(a[j], key) > 0) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
}

console.log("Sorted:", insertionSort([5, 2, 9, 1], (a, b) => a - b));
