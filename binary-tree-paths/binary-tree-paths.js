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


// traverse the tree when u get to a leaf with no children, then u return that path 

//i want something that will store the path to that leaf 

var binaryTreePaths = function(root) {
  
  
  let result = [];
  
  const traverse = (node, currentPath) => {
    // stop condition
    if (!node) return;
    
    currentPath.push(node.val);
    
    if (!node.left && !node.right) {
      let res = currentPath.join('->');
      result.push(res);
    }
    
    // console.log(currentPath)
    //recursion
    traverse(node.left, [...currentPath])
    traverse(node.right, [...currentPath])
  }
  
  traverse(root, []);
  
  return result;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   let result = [];
//   let pathTrack = [];
  
//   let traverse = ( node ) => {
//     if ( !node ) {
//       return;
//     };
    
//     pathTrack.push(node.val);
    
//     if (node.left === null && node.right === null) {
//       // pathTrack.push(node.val);
//       result.push(pathTrack.join('->'));
//     } else {
//       traverse( node.left);
//       traverse( node.right);      
//     }
    
//     pathTrack.pop();
//   }
  
//   traverse(root, []);
  
//   return result;
  
};