function intersect(nums1: number[], nums2: number[]): number[] {
  return nums1.reduce((acc: number[], val: number) => {
    const ind = nums2.indexOf(val);
    if (ind !== -1) {
      acc.push(val);
      nums2.splice(ind, 1);
    }
    return acc;
  }, []);
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
