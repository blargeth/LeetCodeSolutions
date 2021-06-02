/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function(poured, query_row, query_glass) {
    let tower = [poured];
    for(let i = 0; i < query_row; i++){
        // initialize the next row with 0s
        let nextRow = new Array(tower.length + 1).fill(0);
        for(let j = 0; j < tower.length; j++){
            let spillOver = Math.max(0, tower[j] - 1);
            nextRow[j] += spillOver / 2;
            nextRow[j + 1] += spillOver / 2;
        }
        tower = nextRow;
    }
    return Math.min(1,tower[query_glass]);
};