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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  
  let result = [];
  
  let traverse = (tree) => {
    if (tree === null) {
      return;
    }

    traverse(tree.left)
    traverse(tree.right);
    result.push(tree.val);
  }
  traverse(root);
  return result;
};