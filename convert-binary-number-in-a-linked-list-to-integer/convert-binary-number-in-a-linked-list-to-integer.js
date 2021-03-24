/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let s = '';
  
  let currNode = head;
  while (currNode !== null) {
    s += currNode.val;
    
    currNode = currNode.next;
  }
  return parseInt(s, 2);
};