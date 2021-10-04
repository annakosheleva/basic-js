import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine( str ) {
  let resultStr = "";
  for (let i = 0, sum = 1; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      sum++;
    } else {
      resultStr = resultStr + sum + str[i];
      sum = 1;
    }
  }

  return resultStr.replace(/1/g, "");
}