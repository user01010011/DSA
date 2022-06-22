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
    var newNode = new Node(val);
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
  pop() {
    if (!this.head) return undefined; // this.length === 0 also works
    var poppedNode = this.tail;
    if (this.length === 1) {
      // if there is only 1 item
      this.head = null;
      this.tail = null;
    } else {
      // otherwise we need to update the tail
      this.tail = poppedNode.prev; // set the tail to be the previous node of the poppedNode, node right before the severed node
      this.tail.next = null; // the tail's next is now empty, this severs the bond
      poppedNode.prev = null; // the old tail's previous is now empty, this severs the previous connect of the poppedNode
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    var shiftedHead = this.head;
    if (this.length === 1) {
      this.head = null; // this is an edge case
      this.tail = null;
    } else {
      this.head = shiftedHead.next; //  new head to node after the node to be shifted, move the head of the list to the node after the shifted node
      this.head.prev = null; // make sure the list head is the head, there is no node before the head
      shiftedHead.next = null; // sever the connection between the old head
    }
    this.length--;
    return shiftedHead;
  }

  unshift(val) {
    var newNode = new Node(val); 
    if (this.length === 0) {
        this.head = newNode; 
        this.tail = newNode; 
    } else {
        this.head.prev = newNode; // connecting old head to new node  (right to left), newNode left to right to old head
        newNode.next = this.head; // connecting back new node to old head (left to right)
        this.head = newNode; // assign newNode to be the head 
    }
    this.length++; 
    return this; // return entire list 
  }
  // un-optimized version
  get(index) {
    if (index < 0 || index >= this.length) return null; // recall that index counts at 0, so last item should be length - 1; 
    var count = 0; 
    var current = this.head; 
    while(count != index) {
        current = current.next; 
        count++; 
    }
    return current; 
  }

}
var list = new DoublyLinkedList();
