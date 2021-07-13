/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  
  //create stack
  //create curr variable to iterate thru the linked list
  // while curr !== null 
    // check if a child exists
       // if it does, 
          // iterate thru the child list and add it to the stack
          // change the pointers to the correct things, 
       // if not, check curr.next to see if its the end of the list (and if ur at the end of the stack)
  // set cur to cur.next to continue iterating thru the linked list
  // return head
  
  
  let stack = [];
  let curr = head;
  
  while (curr) {
    
    if (curr.child) {
      if (curr.next) stack.push(curr.next);
      curr.next = curr.child;
      curr.next.prev = curr;
      curr.child = null
    }
      else if (!curr.next && stack.length !== 0) {
        curr.next = stack.pop();
        curr.next.prev = curr;
      }
    curr = curr.next;
  }
  
  return head;
    
  
  
//     if (!head) return head;
//     let stack = []; //store all rest part of linkedlist nodes when has child
//     let cur = head;
//     while (cur){
//         if (cur.child){
//             if (cur.next) stack.push(cur.next);  //must check cur.next is null or not before added to stack
//             cur.next = cur.child;
//             cur.next.prev = cur; //because it is doubly linkedlist
//             cur.child = null; //already assigned to next so now no child anymore. set null
//         }
//         else if (!cur.next && stack.length!= 0){ //now reach tail of linkedlist 
//             cur.next = stack.pop();
//             cur.next.prev = cur; // because it is doubly linkedlist
//         }
//         cur = cur.next;
//     }
//     return head; //return reference of head
};