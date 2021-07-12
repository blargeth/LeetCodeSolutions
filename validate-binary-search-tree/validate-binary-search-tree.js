/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


var isValidBST = function(root, lower = -Infinity, upper = Infinity) {
    if (!root) return true;
    
    let val = root.val;
    
    if (val <= lower || val >= upper) return false; 
    
    return isValidBST(root.left, lower, val) && isValidBST(root.right, val, upper)
};

var isValidBST = function(root) {
  
  let traverse = ( node, lower = -Infinity, upper = Infinity ) => {

    //stop condition
    if (!node) return true;
    
    if (node.val <= lower || node.val >= upper) return false; 

    return traverse(node.left, lower, node.val) && traverse(node.right, node.val, upper)
    
  }
  
  return traverse(root);
};