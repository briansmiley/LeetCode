/**
 * https://leetcode.com/problems/find-the-minimum-and-maximum-number-of-nodes-between-critical-points/description/?envType=daily-question&envId=2024-07-05
 * A critical point in a linked list is defined as either a local maxima or a local minima.

A node is a local maxima if the current node has a value strictly greater than the previous node and the next node.

A node is a local minima if the current node has a value strictly smaller than the previous node and the next node.

Note that a node can only be a local maxima/minima if there exists both a previous node and a next node.

Given a linked list head, return an array of length 2 containing [minDistance, maxDistance] where minDistance is
 the minimum distance between any two distinct critical points and maxDistance is the maximum distance between any 
 two distinct critical points. If there are fewer than two critical points, return [-1, -1].
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  //maxes/mins must alternate because delta directions
  //so we can find the addresses of critical points
  let currentNode = head!.next;
  let [min, max] = [-1, -1];
  let prevVal = head!.val;
  let sinceLastCrit = -1;
  let sinceFirstCrit = -1;
  while (currentNode!.next) {
    if (!currentNode) return [min, max];
    //we are at a critical point if prev and next values are both more/less
    const isCrit =
      (currentNode.val > prevVal && currentNode.val > currentNode?.next.val) ||
      (currentNode.val < prevVal && currentNode.val < currentNode.next.val);

    //now that we've established whether we are at a crit, we can update prevVal
    prevVal = currentNode.val;

    if (isCrit) {
      min =
        sinceLastCrit > 0
          ? min === -1
            ? sinceLastCrit
            : Math.min(min, sinceLastCrit)
          : min;
      sinceLastCrit = 0;
      //start counting sinceFirstCrit if needed
      if (sinceFirstCrit === -1) sinceFirstCrit = 0;
      max = sinceFirstCrit || max;
    }
    //in any event we increment the counter and move on
    //increment steps since first crit if we have found it
    sinceLastCrit += sinceLastCrit === -1 ? 0 : 1;
    sinceFirstCrit += sinceFirstCrit === -1 ? 0 : 1;
    currentNode = currentNode.next;
  }
  return [min, max];
}
