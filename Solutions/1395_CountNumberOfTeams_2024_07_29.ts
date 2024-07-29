/**https://leetcode.com/problems/count-number-of-teams/description/?envType=daily-question&envId=2024-07-29
 * There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).
 */

//Initial attempt; worked for 61/72 test cases before timung out
// function numTeams(rating: number[]): number {
//     const isNotNull = (n: number|null) => n !== null
//     //returns an array of the indices of all subsequent elements in an array which match the comparator function for a given argument index
//     const indicesOfSubsequents = (arr: number[], idx: number, comparator: (a:number, b:number) => boolean):number[] => {
//         const subsequents = arr.slice(idx + 1)
//         const base = arr[idx] //number we are comparing subsequent arra¥ elements to
//         return subsequents.map((n, subIdx) => comparator(n, base) ? idx + subIdx + 1 : null).filter(isNotNull)
//     }
//     //To get the number of teams you can form starting with an index, get the array of al subsequent items that fit the comparator, then add up the total number of subsequent matches for each of those
//     const subsequentTeamCount = (arr: number[], idx: number, comparator: (a:number, b:number) => boolean) => indicesOfSubsequents(arr, idx, comparator).reduce((acc, currSubIdx) => acc + indicesOfSubsequents(arr, currSubIdx, comparator).length,0)
//     const totalTeamsByComparator = (arr: number[], comparator: (a:number, b:number) => boolean) => arr.reduce((acc, curr, idx) => acc + subsequentTeamCount(arr, idx, comparator),0)
//     const comparators = [
//         (a:number, b:number) => a < b,
//         (a:number, b:number) => a > b
//     ]
//     console.log(indicesOfSubsequents([1,5,3,2,7], 1, comparators[0]))
//     const totalValidTeams = comparators.reduce( (acc, curr) => acc + totalTeamsByComparator(rating, curr),0)
//     return totalValidTeams
// }

///woo hoo it works
function numTeams(rating: number[]): number {
  //get a mapped array of values and subsequent lesser/greater value counts
  const mapped = rating.map((val, idx) => {
    const lessersAfter = rating
      .slice(idx + 1)
      .reduce((acc, curr) => acc + (curr < val ? 1 : 0), 0);
    const greatersAfter = rating
      .slice(idx + 1)
      .reduce((acc, curr) => acc + (curr > val ? 1 : 0), 0);
    return { val, lessersAfter, greatersAfter };
  });
  const elementSubsequentAscendingTeams = (val: number, idx: number) =>
    mapped
      .slice(idx + 1)
      .reduce(
        (acc, curr) => acc + (curr.val > val ? curr.greatersAfter : 0),
        0
      );
  const elementSubsequentDescendingTeams = (val: number, idx: number) =>
    mapped
      .slice(idx + 1)
      .reduce((acc, curr) => acc + (curr.val < val ? curr.lessersAfter : 0), 0);
  const subsequentTeamsByIdx = (val: number, idx: number) =>
    elementSubsequentAscendingTeams(val, idx) +
    elementSubsequentDescendingTeams(val, idx);
  const teams = rating.reduce(
    (acc, curr, idx) => acc + subsequentTeamsByIdx(curr, idx),
    0
  );
  return teams;
}
