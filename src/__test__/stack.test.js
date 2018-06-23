'use strict';

const Stack = require('../lib/stack');

describe('Stack class tests', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  afterEach(() => {
    stack = null;
  });

  test('#constructor ensure constructor returns proper object', () => {
    const stk = new Stack();
    expect(stk.next).toBeNull();
    expect(stk.prev).toBeNull();
  });

  test('#push test 0, into empty stack', () => {
    stack.push(1);
    expect(stack.prev.value).toEqual(1);
  });

  test('#push test 1, two values check', () => {
    stack.push(1);
    stack.push(2);
    expect(stack.next).not.toBeNull();
    expect(stack.prev).not.toBeNull();
    expect(stack.next.value).toEqual(1);
    expect(stack.prev.value).toEqual(2);
    expect(stack.prev.prev.value).toEqual(1);
    expect(stack.next.next.value).toEqual(2);
  });
  
  test('#pop test 0, empty stack', () => {
    expect(stack.pop()).toBeNull();
  });

  test('#pop test 1, remove 1 value', () => {
    stack.push(1);
    const n = stack.pop();
    expect(n).toEqual(1);
    expect(stack.next).toBeNull();
    expect(stack.prev).toBeNull();
  });

  test('#pop test 2, pop and leave non-emtpy', () => {
    stack.push(1);
    stack.push(2);
    const n = stack.pop();
    expect(n).toEqual(2);
    expect(stack.next.value).toEqual(1);
    expect(stack.prev.value).toEqual(1);
    expect(stack.prev.next).toEqual(stack);
    expect(stack.next.prev).toEqual(stack);
  });

  test('#pop test 3', () => {
    stack.push(1, 2, 3);
    const n = stack.pop();
    expect(n).toEqual(3);
    expect(stack.next.value).toEqual(1);
    expect(stack.prev.value).toEqual(2);
    expect(stack.prev.next).toEqual(stack);
  });

  test('#peek test 1, empty list', () => {
    expect(stack.peek()).toBeNull();
  });

  test('#peek test 2, one item', () => {
    stack.push(1);
    const p = stack.peek();
    const n = stack.pop();
    expect(p).toEqual(1);
    expect(n).toEqual(1);
  });

  test('#peek test 3, >1 item', () => {
    stack.push(1, 2, 3);
    expect(stack.peek()).toEqual(3);
  });
});
