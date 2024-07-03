//Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both
//arrays and you may return the result in any order.

function intersect(nums1: number[], nums2: number[]): number[] {
  const countsFromArr = (arr: number[]) => {
    const counts = {};
    arr.forEach(val => (counts[val] = (counts[val] || 0) + 1));
    return counts;
  };
  const [counts1, counts2] = [nums1, nums2].map(countsFromArr);
  console.log(counts1, counts2);
  const intersection: number[] = [];
  for (const key in counts1) {
    const count = Math.min(counts1[key], counts2[key]);
    let i = 0;
    while (i++ < count) intersection.push(parseInt(key));
  }
  return intersection;
}
