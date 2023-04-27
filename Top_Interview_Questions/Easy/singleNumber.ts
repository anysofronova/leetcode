function singleNumber(nums: number[]): number {
  return nums.reduce((accum, elem) => accum ^ elem, 0);
}

console.log(singleNumber([4, 1, 2, 1, 2]));
