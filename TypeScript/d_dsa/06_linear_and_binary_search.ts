/**
 * DSA Topic 06: Binary Search
 */
function binarySearch(arr: number[], target: number): number {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}

console.log("Found 42 at index:", binarySearch([10, 20, 30, 42, 50], 42));
