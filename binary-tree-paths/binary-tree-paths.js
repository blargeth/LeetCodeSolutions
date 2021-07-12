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
 * @return {string[]}
 */


var binaryTreePaths = function(root) {
  
  let result = [];
  
  let traverse = ( node, currPath ) => {
    if ( !node ) {
      return;
    };
    
    if (node.left === null && node.right === null) {
      currPath += node.val;
      result.push(currPath);
      return;
    }
    traverse( node.left, currPath + node.val + "->");
    traverse( node.right, currPath + node.val + "->");
    
  }
  
  traverse(root,'');
  
  return result;
  
};