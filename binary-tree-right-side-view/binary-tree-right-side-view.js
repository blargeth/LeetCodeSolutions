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

// level order traverse

// create a result variable;

  // create a map of the order level traverse where the map is an object
  //    { level number: [items in that order] }

// ex:    {1: 1, 2: [2, 3], 3: [5,4]}   ==> ill have to return the last item of each level

// return result variable;

var rightSideView = function(root) {
  
  let result = [];
  
  let map = {};
  
  const traverse = ( node, level ) => {
    // stop case
    if ( !node ) return;
    
    if (!map[level]) map[level] = [node.val];
    else {
      map[level].push(node.val);
    }
    //recursive case
    traverse( node.left, level + 1);
    traverse( node.right, level + 1);
  }
  
  traverse ( root, 0 );
  
  for (let key in map) {
    result.push(map[key][map[key].length - 1]);
  }
  
  return result;
};