/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
  
  // loop thru each spot on the grid
  // for each spot, do a recursive check that will:
    // turn the 1 to a zero and then keep checking each spot in each direction
  
  
  // result counter
  // a helperfunction that will sink the islands - islandSinker
  
  // i need boundaries for the grid - height and width
    // if i am outside of the bounds 0 to width or 0 to height then continue going
  

  const height = grid.length;
  const width = height && grid[0].length;
  
  let counter = 0;
  
  const sinkIsland = ( row, col ) => {
    if (row < 0 || row === height || col < 0 || col === width) return;
    if (grid[row][col] === '0') return;
    //else 
    grid[row][col] = '0';
    sinkIsland(row + 1,col)
    sinkIsland(row - 1,col)
    sinkIsland(row,col + 1)
    sinkIsland(row,col - 1)
    
  }  
  
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      // console.log(i, j, grid[i,j])
      if (grid[i][j] === "1") {
        // console.log('hi')
        counter+=1;
        sinkIsland( i, j );
      }
    }
  }
  
  return counter;

  
  
  
  // plan:
  
  // iterate thru each spot on the grid using 2 loops
  // when i get to a 1, "sink that island" by turning them to 0s and tracking it with a counter (1 sunk island). by the next iteration, there will be no more island, moving on the next step
  // need a islandSinker function
    //this function will turn 1s to zeros to the adjacent spots
  
  
  ////////pseudo:
  
  // set "boundaries" for the grid (height and width)
  // create a result counter variable:
  
  // double loop to iterate thru each spot in the grid
    // check if the spot is a 0 or a 1
       // if 0; do nothing and keep going
       // if 1; counter ++ and activate the islandSinker - giving it the start spot
       
  // islandSinker: recursive function that will keep going until the stop conditions
     // stops: if "out of bounds" 
       // if the spot is 0 (then it doesnt need to sink)
       
     // OTHERWISE (if [r][c] === 1) then 
       // [r][c] = 0
       //   
       // islandSinker in the 4 directions: which are 
  // (r-1, c), (r+1, c), (r, c -1 ), (r, c + 1)  
  
  
//   const height = grid.length;
//   const width = height && grid[0].length;
  
//   const sinkIsland = ( row, col ) => {
//     if (row < 0 || row === height || col < 0 || col === width) return;
//     if (grid[row][col] === '0') return;
//     //else 
//     grid[row][col] = '0';
//     sinkIsland(row + 1,col)
//     sinkIsland(row - 1,col)
//     sinkIsland(row,col + 1)
//     sinkIsland(row,col - 1)
    
//   }  
  
//   let counter = 0;

//   for (let i = 0; i < height; i++) {
//     for (let j = 0; j < width; j++) {
//       if (grid[i][j] === '0') continue;
//         counter+= 1;
//         sinkIsland(i,j);
//     }
//   }
  
//   return counter;
  
  
  
  
  
  
  
  
  
  
 /////////////////////// DONT LOOK! U CHEATER! //////////////////////// 
  
  
  /// solution with great logic! this is the one im going to follow:
  
//   function numIslands(grid) {
//   const H = grid.length;
//   const W = H && grid[0].length;
//   let count = 0;
  
//   for (let r = 0; r < H; r++) {
//     for (let c = 0; c < W; c++) {
//       if (grid[r][c] === '0') continue;
      
//       count++;
//       dfs(r, c);
//     }
//   }
//   return count;
  
//   function dfs(r, c) {
//     if (r < 0 || c < 0 || r === H || c === W) return;
//     if (grid[r][c] === '0') return;
    
//     grid[r][c] = '0';
//     dfs(r-1, c);
//     dfs(r+1, c);
//     dfs(r, c-1);
//     dfs(r, c+1);
//   }
// }
  
  
  
};