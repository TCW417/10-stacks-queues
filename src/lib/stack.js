'use strict';

const Node = require('./node');

const Stack = module.exports = class {
  constructor() {
    this.next = null;
    this.prev = null;
  }

  push(...val) { // add items to top of the stack
    val.forEach((item) => {
      // this.prev points to bottom of the stack.
      if (this.prev === null) { // if ptr is null, stack is empty
        this.prev = new Node(item);
        this.next = this.prev;
        this.prev.prev = this;
        this.next.next = this;
      } else { // stack isn't empty. add to stack
        const p = new Node(item);
        this.prev.next = p;
        p.next = this;
        p.prev = this.prev;
        this.prev = p;
      }
    });
  }

  pop() { // remove item from top of stack
    let ptr;
    if (this.prev === null) return null; // stack is already empty
    if (this.prev === this.next) { // one item in stack
      ptr = this.prev;
      this.prev = this.next = null;
    } else {
    // more than one item on the stack.
      ptr = this.prev;
      this.prev = this.prev.prev;
      this.prev.next = this;
    }
    ptr.next = ptr.prev = null;
    return ptr.value;
  }

  peek() {
      return this.prev ? this.prev.value : null;
  }
}
