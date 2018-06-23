'use strict';

const Queue = require('../lib/queue');

describe('Queue class tests', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  afterEach(() => {
    queue = null;
  });

  test('#constructor ensure constructor returns proper object', () => {
    expect(queue.next).toBeNull();
    expect(queue.prev).toBeNull();
  });

  test('#enqueue test 1', () => {
    queue.enqueue(1);
    expect(queue.next.value).toEqual(1);
    expect(queue.prev.value).toEqual(1);
    expect(queue.prev).toEqual(queue.next);
  });

  test('#enqueue test 2', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.prev.value).toEqual(1);
    expect(queue.next.value).toEqual(2);
  });

  test('#enqueue test 3', () => {
    queue.enqueue(1, 2, 3);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
  });

  test('#dequeue test 1', () => {
    const n = queue.dequeue();
    expect(n).toBeNull();
    expect(queue.next).toBeNull();
    expect(queue.prev).toBeNull();
  });

  test('#dequeue test 2', () => {
    queue.enqueue(1);
    const n = queue.dequeue();
    expect(n).toEqual(1);
    expect(queue.next).toBeNull();
    expect(queue.prev).toBeNull();
  });

  test('#dequeue test 3', () => {
    queue.enqueue(1, 2);
    expect(queue.next.value).toEqual(2);
    expect(queue.prev.value).toEqual(1);
    const n = queue.dequeue();
    expect(n).toEqual(1);
    expect(queue.prev).toEqual(queue.next);
    expect(queue.next.value).toEqual(2);
    expect(queue.prev.value).toEqual(2);
  });

  test('#dequeue test 4', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    const n = queue.dequeue();
    expect(n).toEqual(1);
    expect(queue.next.value).toEqual(3);
    expect(queue.prev.value).toEqual(2);
  });

  test('#peek test 1, empty queue', () => {
    expect(queue.peek()).toBeNull();
  });

  test('#peek test 2, 2 items', () => {
    queue.enqueue(1, 2);
    expect(queue.peek()).toEqual(1);
  });

  test('#peek test 2, 3 items', () => {
    queue.enqueue(1, 2, 3);
    expect(queue.peek()).toEqual(1);
  });
});
