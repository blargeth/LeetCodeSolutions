/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  
  // compare the "first" node from the start node with the next node
  // find the smaller value of the 2 compared nodes
  // append it to the result ListNode
  
  let currNode1 = l1;
  let currNode2 = l2;
  
  let l3 = new ListNode();
  let result = l3;
  
  while ( currNode1 !== null &&  currNode2 !== null) {
    //choose the next smallest value from either currNode1 or currNode2
    if (currNode1.val < currNode2.val) {
      l3.next = new ListNode(currNode1.val);
      currNode1 = currNode1.next;
    } else {
      l3.next = new ListNode(currNode2.val);
      currNode2 = currNode2.next;
    }
    
    l3 = l3.next;
  }
  // if one is longer than the other, set the tail to the result
  if (currNode1 !== null) {
    l3.next = currNode1;
  }
  if (currNode2 !== null) {
    l3.next = currNode2;
  }
    
  return result.next;
};




