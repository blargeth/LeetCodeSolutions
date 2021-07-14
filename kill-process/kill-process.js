/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function(pid, ppid, kill) {
    
  
  
  
  
  
  
  
  
  
  
  
  //////////////// SOLUTION
  
      /*
        1) create a hashmap with key parent and
        val children
        2) start by finding the node to delete, 
        go through all its children and check if they have
        children, return all ancestors
    */
    let map = {};
    for (let i = 0; i < ppid.length; i ++) {
        let parent = ppid[i];
        let child = pid[i];
        if (!map[parent]) map[parent] = [];
        map[parent].push(child);
    }
    
    let deleted = [];
    function deleteAll(node) {
        deleted.push(node);
        let children = map[node];
        if (!children) return;
        for (let child of children) {
            deleteAll(child);
        }
    }
    
    deleteAll(kill);
    return deleted;
  
  
  
  
  
};