const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  strChain: '',
  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && position > 0 && position <= this.getLength()) {
      if (position === 0) {
        this.chain.splice(position, 1);
      } else {
        this.chain.splice(position - 1, 1);
      }
    } else {
      this.chain.length = 0;
      throw new Error("You can't remove incorrect link!");
    }
    
    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    this.strChain = this.chain.join('~~');
    this.chain.length = 0;

    return this.strChain
  },
};

module.exports = {
  chainMaker
};
