import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum( matrix ) {
  const n = matrix[0].length;
  const data = matrix.flat();
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 0 && data[i + n] !== undefined) {
      data[i + n] = 0;
    }
  }
  return data.reduce((acc, val) => acc + val, 0);
}
