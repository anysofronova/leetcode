function removeElement(nums: number[], val: number): number {
  return nums.splice(0, nums.length, ...nums.filter((i) => i !== val)).length;
}
