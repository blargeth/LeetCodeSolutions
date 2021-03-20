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
var maxDepth = function(root) {
  
  let traverse = (tree) => {
    if (tree === null) {
      return 0;
    }
    let left = traverse(tree.left) + 1;
    let right = traverse(tree.right) + 1;

    return Math.max(left, right);
  }
  
  return traverse(root);
};