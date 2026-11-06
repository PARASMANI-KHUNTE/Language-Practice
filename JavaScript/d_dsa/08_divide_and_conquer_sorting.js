/**
 * DSA Topic 08: Merge Sort & Quick Sort
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  const result = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = arr.filter((x, i) => x < pivot && i < arr.length - 1);
  const right = arr.filter(x => x >= pivot && x !== pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const dataset = [38, 27, 43, 3, 9, 82, 10];
console.log("Merge Sort:", mergeSort(dataset));
console.log("Quick Sort:", quickSort(dataset));
