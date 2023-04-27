function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;

  // return [...new Set(nums)].length;
}

console.log(removeDuplicates([1, 1, 2]));
