/**
 * DSA Topic 06: Binary Search
 */
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

const data = [10, 20, 30, 40, 50, 60, 70];
console.log("Index of 50:", binarySearch(data, 50));
console.log("Index of 99:", binarySearch(data, 99));
