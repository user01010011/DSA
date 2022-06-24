// Push

// SLL - push Exercise 
// Implement the following on the SinglyLinkedList class:  

// push
// This function should take in a value and add a node to the end of the SinglyLinkedList.
// It should return the SinglyLinkedList.

class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; 
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }

    push(val) {
        let newNode = new Node(val); 
        if (this.length === 0) {
            this.head = newNode; 
            this.tail = newNode; 
        } else {
            this.tail.next = newNode; 
            newNode.next = null; 
            this.tail = newNode; 
        }
        this.length++; 
        return this; 
    }
}
