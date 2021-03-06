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
    // Optimized: 
    get(index) {
        if (index < 0 || index >= this.length) return null; 
        if (index <= this.length/2) {
            console.log("WORKING FROM START")
            let count = 0; 
            let current = this.head; 
            while(count != index) {
                current = current.next; 
                count++; 
            } 
            return current; 
        } else {
            console.log("WORKING FROM END")
            let count = this.length - 1; 
            let current = this.tail; 
            while (count != index) {
                current = current.prev; 
                count--; 
            }
            return current; 
        }
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val; 
            return true; 
        } 
        return false; 
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false; 
        // if (index === 0) return this.unshift(val); 
        // if (index === this.length - 1) return this.push(val);
        // if want the results to return true or false 
        if (index === 0) return !!this.unshift(val); // coerce it to boolean 
        if (index === 0) return !!this.push(val); // coerce it to boolean 
        var newNode = new Node(val);  
        var beforeNode = this.get(index - 1) // find the item right before the index
        var afterNode = beforeNode.next; 
        beforeNode.next = newNode; // place the new node after the before node 
        newNode.prev = beforeNode; 
        newNode.next = afterNode; 
        afterNode.prev = newNode; 
        this.length++; 
        return true; // insert successful
    }

    remove(index, val) {
      if (index < 0 || index >= this.length) return undefined; 
      if (index === 0) return !!this.shift(val); 
      if (index === this.length - 1) return !!this.pop(val); 
      let removedNode = this.get(index); 
      let beforeNode = removedNode.prev; 
      let afterNode = removedNode.next; 
      beforeNode.next = removedNode.next; // jumps over the removed note and make connection with removed note's next node
      afterNode.prev = removedNode.prev; // jumps over the removed note and make connectoin with removed note's prev node 
      // can also be written as: 
      // beforeNode.next = afterNode; 
      // afterNode.prev = beforeNode; 
      removedNode.prev = null; 
      removedNode.next = null;
      this.length--; 
      return removedNode; 
    }

    reverse() {
      let node = this.head; 
      this.head = this.tail; 
      this.tail = node; 
        let nextRev; // next reverse 
        let prevRev = null; // previous reverse  
        for (let i = 0; i < this.length; i++) {
          nextRev = node.next; 
          node.next = prevRev; 
          node.prev = nextRev; // reverse the prev pointer for doubly linked list
          prevRev = node;
          node = nextRev; 
        }
        return this; 
    }

}
var list = new DoublyLinkedList();
