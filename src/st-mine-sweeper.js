import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper ( matrix ) {
  const result = [];
  matrix.forEach((arr, i) => {
    const col=[];
    arr.forEach((item, j) => {
      let k =[], m =[];
        let count = 0;
        if( i - 1 < 0 ) {
          k.push(0);
        } else {
          k.push(i - 1);
        }
        if (j - 1 < 0) {
          m.push(0); 
        } else {
          m.push(j - 1);
        }
        if( i===matrix.length-1 ) {
          k.push(i);
        } else {
          k.push(i + 1);
        }
        if (j===matrix[i].length-1) {
          m.push(j); 
        } else {
          m.push(j + 1);
        }
      for (let c = k[0]; c <= k[1]; c++) {
          for (let d = m[0]; d <= m[1]; d++) {
            if ((d!=j||c!=i) && matrix[c][d]===true){
              count++;
            }
          }
      }
      col.push(count);
    });
    result.push(col);
  });
  return result;
}