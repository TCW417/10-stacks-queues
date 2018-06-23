'use strict';

const Node = require('./node');

const Queue = module.exports = class {
  constructor() {
    this.next = null;
    this.prev = null;
  }

  dequeue() { // remove item from head of the queue
    // queue head.prev
    let ptr;
    if (this.prev === null) return null; // queue is already empty
    if (this.prev === this.next) { // one item in queue
      ptr = this.prev;
      this.prev = this.next = null;
    } else {
    // more than one item on the queue.
      ptr = this.prev;
      this.prev = this.prev.prev;
      this.prev.next = this;
    }
    ptr.next = ptr.prev = null;
    return ptr.value;
  }


  enqueue(...val) { // add ...val to head of queue
    val.forEach((item) => {
      if (this.next === null) { // if ptr is null, queue is empty
        this.next = new Node(item);
        this.prev = this.next;
        this.next.prev = this;
        this.prev.next = this;
      } else { // queue isn't empty. add to end (queue head.next)
        const p = new Node(item);
        this.next.prev = p;
        p.next = this.next;
        p.prev = this;
        this.next = p;
      }
    });
  }

  peek() {
    return this.prev ? this.prev.value : null;
  }
};
