import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  direction = "direct";
  constructor(value) {
    if (value === false) {
      this.direction = "reverse";
    }
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let alph = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (alph.indexOf(message[i]) == -1) {
        result += message[i];
        continue;
      }
      let a = alph.indexOf(message[i]);
      let b = alph.indexOf(key[j]);
      let c = a + b;
      result += String.fromCharCode((c % 26) + 65);

      if (j === key.length - 1) {
        j = 0;
      } else {
        j++;
      }
    }

    if (this.direction === "reverse") {
      return result.split("").reverse().join("");
    }
    return result;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let alph = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      if (alph.indexOf(message[i]) == -1) {
        result += message[i];
        continue;
      }
      let a = alph.indexOf(message[i]);
      let b = alph.indexOf(key[j]);
      let c = a - b + 26;
      result += String.fromCharCode((c % 26) + 65);

      if (j === key.length - 1) {
        j = 0;
      } else {
        j++;
      }
    }
    if (this.direction === "reverse") {
      return result.split("").reverse().join("");
    }
    return result;
  }
}