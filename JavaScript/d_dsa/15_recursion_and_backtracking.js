/**
 * DSA Topic 15: Subsets Generator via Backtracking
 */
function subsets(nums) {
  const result = [];
  function backtrack(start, path) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }
  backtrack(0, []);
  return result;
}

console.log("Subsets of [1, 2]:", subsets([1, 2]));
