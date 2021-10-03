import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, options) {
  const rep = options.repeatTimes
  const sep = options.separator ? options.separator : '+'
  let add = options.addition
  const addTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  const addSep = options.additionSeparator ? options.additionSeparator : '|'
  let res = Array(rep).fill(`${str}`)

  if (add !== undefined) {
    let newRes = []
    add = `${options.addition}`
    for (let i of res) {
      if (addTimes > 1) {
        let additionWithSep = Array(addTimes).fill(add)
        additionWithSep = additionWithSep.join(addSep)
        newRes.push(i = i + additionWithSep)
      } else {
        newRes.push(i = i + add.repeat(addTimes))
      }
    }

    res = newRes;
  }

  if (sep && rep > 1) {
    res = res.join(sep)
  } else {
    res = res.join('')
  }

  return res;
}