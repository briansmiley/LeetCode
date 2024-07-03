/**https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/description/?envType=daily-question&envId=2024-07-03
 * You are given an integer array nums.

In one move, you can choose one element of nums and change it to any value.

Return the minimum difference between the largest and smallest value of nums after performing at most three moves.
 */

function minDifference(nums: number[]): number {
  if (nums.length <= 4) return 0;
  //first sort the array by size, small to large
  const sorted = nums.sort((a, b) => a - b);

  const splices = [0, 1, 2];
  let minDiff = Math.abs(sorted[3] - sorted.slice(-1)[0]);
  splices.forEach((startIndex, idx) => {
    const sliced = sorted.slice(startIndex, -(3 - idx));
    const sliceMinDiff = Math.abs(sliced[0] - sliced.slice(-1)[0]);
    console.log(minDiff, sliceMinDiff);
    minDiff = Math.min(minDiff, sliceMinDiff);
  });
  return minDiff;
}
