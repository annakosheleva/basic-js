import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  if(!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  let newArr = [];
  let actions = ['--double-next', '--double-prev', '--discard-next','--discard-prev'];
  //arr.forEach(function(item, i, arr1) {
  for (let i = 0 ; i <= arr.length; i++) {
    if (actions.includes(arr[i])) {
      switch (arr[i]) {
        case '--double-next':
          if (i !== arr.length - 1) newArr.push(arr[i + 1]);
          break;
        case '--double-prev':
          if (i !== 0 && arr[i - 1] !== '--discard-next' && arr[i - 2] !== '--discard-next') newArr.push(newArr[i - 1]);
          break;
        case '--discard-next':
          if (i !== arr.length - 1) i++;
          break;
        case '--discard-prev': 
          if ((i !== 0 || newArr[newArr.length - 1] === arr[1 - 1]) && arr[i - 1] !== '--discard-next' && arr[i - 2] !== '--discard-next') newArr.pop();
          break;
      }
    } else {
      if(arr[i] !== undefined)
        newArr.push(arr[i]);
    }
  }
  return newArr;
}