//https://leetcode.com/problems/merge-nodes-in-between-zeros/description/?envType=daily-question&envId=2024-07-04
/**You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list. */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeNodes(head: ListNode | null): ListNode | null {
  let currentNode = head!;
  while (currentNode.next) {
    if (!currentNode.next.next) currentNode.next = null;
    else if (currentNode.next.val === 0) currentNode = currentNode.next;
    else {
      currentNode.val += currentNode?.next.val;
      currentNode.next = currentNode?.next.next;
    }
  }
  return head;
}
