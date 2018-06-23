![cf](http://i.imgur.com/7v5ASc8.png) Lab 10 - Stacks and Queues Data Structures
====


####  Documentation  
Add your Travis badge to the top of your README. List out the methods for your Queue and Stack class and explain what they do by using your favorite analogy for each. List the Big Oh time and space complexity for each method, making considerations for the actual Big Oh complexity they might have under the hood when utilizing Linked List or Array methods. 

This lab exports two classes, Stack and Queue

### Stack class

The stack class is an O(1) for space and time class that implements a stack (Last In First Out data structure) using an underlying doubly-linked list. 

#### Methods

##### `Stack.push(item1 [, item2...])`
Push one or more items onto the stack. The last item pushed will be the first item popped (removed) from the stack.

##### `Stack.pop()`

Remove the last item pushed onto the stack.

#### `Stack.peek()`
Return the value at the top of the stack without removing it. Operates just like Stack.pop() without actually removing the item from the stack.

### Queue class

The queueu class is an O(1) for space and time class that implements a queue, a First-in-First-out (FIFO) data structure.

#### Methods

##### `Queue.enqueue(item1 [, item2...])`
Add one or more items to the queue.  Item1 will be at the head of the queue and the first item to be dequeued.

##### `Queue.dequeue()`
Remove the item at the head of the queue.

##### `Queue.peek()`
Examine the item at the head of the queue but do not remove it.
