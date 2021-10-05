/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} row, col
 *     @return {integer}
 *     this.get = function(row, col) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    let [x, y] = binaryMatrix.dimensions();
    
    let currentRow = 0;
    let currentCol = y - 1;

    while (currentRow < x && currentCol >= 0) {
        if (binaryMatrix.get(currentRow, currentCol) === 0) {
            currentRow++;
        } 
        else {
            currentCol--;
        }
    }
    return (currentCol === y - 1) ? -1  : currentCol + 1;
};