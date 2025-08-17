/**
 * @overview
 *
 * Boilerplate helper for creating FNAF fangames in Scratch (more for the most part for Turbowarp/PenguinMod)
 * In early stages of development it will need to be used with Keys+ v2 and More Timers, but compatbility w/o them
 * will be added by maybe late 2026/early 2027.
 *
 * Made on iPad w/keyboard
 *
 * @license MIT
 * @author  CrSb0001
 * @version 0.0.1-infdev
 *
 */


/*
These consts aren't used outside of this project, although it might be nice to have
if someone wants to modify the project and add new functions.
*/
const __TO_NUMBER__ = 0;
const __TO_STRING__ = 1;

class UnidentifiedOptionError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

class UnsandboxedError extends Error {
  constructor(msg) {
    super(msg);
    this.name = this.constructor.name;
  }
}

class RandomUtils {
  static randint(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  static randrange(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  static randbits(bits, retType = __TO_STRING__) {
    if (bits < 1 || typeof(bits) !== "number" || !Number.isInteger(bits)) {
      return -1;
    }
    
    if (bits > 53) {
      console.warn("Number of bits might make result too large to safely convert to integer");
    }
    
    let res = "";
    for(let i = 0; i < bits; i++) {
      res += Math.floor(Math.random() * 2).toString()
    }
    
    if (retType == __TO_STRING__) return res;
    if (retType == __TO_NUMBER__) return Number("0b" + res).toString;
    else {
      throw new UnidentifiedOptionError("retType should either be __TO_STRING__ or __TO_NUMBER__.")
    }
  }
}
