/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  
  // trivial case
  if (!headA || !headB) return null;

  // initialize data structures to traverse the linked lists
  let traverseA = headA;
  let traverseB = headB;

  while (traverseA != traverseB) {
    traverseA = (traverseA == null) ? headB : traverseA.next;
    traverseB = (traverseB == null) ? headA : traverseB.next;
  }
  
  // default case if no intersection
  return traverseA;
};