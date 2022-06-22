// Data Structures

// Doubly Linked List

// Set up our 2 classes:
// Node
// - val
// - next
// - prev

// DoublyLinkedList
// - head
// - tail
// - length

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null; // this is the only difference from Singly Linked List
  }
}
// our Node class is done. All instance method functions are added to the DoublyLinkedList class

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0; // this is it. We've created a Doubly Linked List (empty)
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      // just another way of checking if the list is empty
      // if (!this.head || !this.tail) OR if (this.head === null || this.tail === null)
      this.head = newNode; // make the head and tail be the newly created node
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // the current tail's next node, give us the arrow going this way
      newNode.prev = this.tail; // set the new tail (not the new tail yet)'s previous to be the old tail
      this.tail = newNode; // finally update the tail to be the newly created node
    }
    this.length++;
    return this;
  }
}
