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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0;
  
  let findSumLeft = (tree) => {
          console.log(tree)
    if (!tree) { 
      return 0;
    }
    if (tree.left === null && tree.right === null) {
      return 0;
    }
    
    if (tree.left) {
      if (!tree.left.left && !tree.left.right) {
        sum += tree.left.val;
      }
    }
    findSumLeft(tree.left)
    findSumLeft(tree.right)
  }
  findSumLeft(root);
  return sum;
};