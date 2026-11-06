/**
 * DSA Topic 07: Bubble, Selection, and Insertion Sort
 */
function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
  }
  return a;
}

console.log("Bubble Sort:", bubbleSort([64, 34, 25, 12, 22, 11, 90]));
