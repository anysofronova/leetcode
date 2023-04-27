/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if ((k = k % nums.length) && k === 0) return;
  nums.unshift(...nums.splice(-k));
}

rotate([1, 2], 3);
