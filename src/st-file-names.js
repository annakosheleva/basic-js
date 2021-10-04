import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles( names ) {
  const result = [];
  const mapFiles = new Map();
  while (names.length) {
    if (!result.length) {
      result.push(names.shift());
    } else if (result.includes(names[0])) {
      let count = '';
      if (!mapFiles.has(names[0])) {
        mapFiles.set(names[0], 1);
        result.push(`${names[0]}(1)`);
      } else {
        count = mapFiles.get(names[0]);
        mapFiles.set(names[0], count++);
        result.push(`${names[0]}(${count})`);
      }
      names.splice(0, 1);
    } else {
      result.push(names.splice(0, 1)[0]);
    }
  }
  return result;
}