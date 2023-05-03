/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const zeroArr: number[] = nums.filter((num) => num === 0);
  const tempArr: number[] = nums.filter((num) => num !== 0);
  tempArr.splice(tempArr.length, 0, ...zeroArr);
  nums.splice(0, nums.length, ...tempArr);
}

moveZeroes([0, 1, 0, 3, 12]);
