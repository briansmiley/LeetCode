/**
 * Given an integer array nums, handle multiple queries of the following type:

Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 */

class NumArray {
  arr: number[];
  sumsUpToI: number[];
  constructor(nums: number[]) {
    this.arr = nums;
    this.sumsUpToI = [0];
    let cumuSum = 0;

    for (let i = 0; i < nums.length; i++) {
      cumuSum += nums[i];
      this.sumsUpToI.push(cumuSum);
    }
    // console.log(this.sumsUpToI)
  }

  sumRange(left: number, right: number): number {
    return this.sumsUpToI[right + 1] - this.sumsUpToI[left];
    // let sum = 0
    // for (let i = left; i <= right; i++) {
    //     sum += this.arr[i]
    // }
    // return sum
    // return this.arr.slice(left, right + 1).reduce((acc, curr) => acc+curr,0)
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
