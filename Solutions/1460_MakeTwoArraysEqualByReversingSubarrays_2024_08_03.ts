/**
 * You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty subarray of arr and reverse it. You are allowed to make any number of steps.

Return true if you can make arr equal to target or false otherwise.
// */
function canBeEqual(target: number[], arr: number[]): boolean {
  const count = (num: number, arr: number[]) =>
    arr.reduce((acc, curr) => (curr === num ? acc : acc + 1), 0);
  return arr.every(num => count(num, target) === count(num, arr));
}
