function containsDuplicate(nums: number[]): boolean {
  return nums.length !== [...new Set(nums)].length;
}

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
