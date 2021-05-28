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
var inorderTraversal = function(root) {
  const result = [];

  let helper = ( tree ) => {
      if (tree === null) return;
      if (tree.left) {
        helper( tree.left );
      }
        result.push(tree.val);
      if (tree.right) { 
        helper( tree.right );
      }
  }
  
  helper(root);
  return result;
};
