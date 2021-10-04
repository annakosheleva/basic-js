import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight( arr ) {
  const array = [];
  const sorted = [];
  arr.forEach((e, i) => {
    if (e === -1) {
      array[i] = e;
    } else {
      sorted.push(e);
    }
  });
  sorted
    .sort((a, b) => a - b)
    .forEach((e) => {
      let finish = true;
      let i = 0;
      while (finish) {
        if (array[i] === undefined) {
          array[i] = e;
          finish = false;
        }
        i++;
      }
    });

  return array;
}