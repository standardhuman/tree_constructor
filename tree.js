'use strict'

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    const child = new Tree(value);
    this.children.push(child);
  }
  contains(target) {
    if (this.value === target){
      return true;
    }

    for (let i = 0; i < this.children.length; i++){
      const child = this.children[i];
      if (child.contains(target) === true){
        return true;
      }
    }
    return false;
    }
  }

module.exports = Tree;
