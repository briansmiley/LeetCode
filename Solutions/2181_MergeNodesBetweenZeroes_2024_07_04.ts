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
  //start at the start
  let currentNode = head!;
  //continue until end of list
  while (currentNode.next) {
    //if next.next is null, we are at the end of the list and replace the ending 0 with null to cut it off
    if (!currentNode.next.next) currentNode.next = null;
    //whenver we hit any other 0, add a link to the list
    else if (currentNode.next.val === 0) currentNode = currentNode.next;
    else {
      //otherwise, accumulate the value of the next node
      currentNode.val += currentNode?.next.val;
      //...and skip over it
      currentNode.next = currentNode?.next.next;
    }
  }
  return head;
}
