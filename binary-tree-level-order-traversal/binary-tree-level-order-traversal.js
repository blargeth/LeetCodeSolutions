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
 * @return {number[][]}
 */

//pseudocode - 


var levelOrder = function(root) {
  
  const result = [];
  const map = {};
    
  // helper function
  const helper = ( root, level ) => {
    if (!root) return;
    
    // initialize the value 
    map[level] = map[level] || [];
    map[level].push(root.val);
    helper(root.left, level + 1);
    helper(root.right, level + 1);

  }
  
  // check
  if (root === null) return result;
  
  // call helper
  helper(root, 0);
  
  // create array form of result
  for (let key in map) {
    result.push(map[key]);
  }
  
  return result;
  
};