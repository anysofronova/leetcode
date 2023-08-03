function removeDuplicates(nums: number[]): number {
  let k = 0;
  for (const x of nums) {
    if (k < 2 || x !== nums[k - 2]) nums[k++] = x;
  }
  return k;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
