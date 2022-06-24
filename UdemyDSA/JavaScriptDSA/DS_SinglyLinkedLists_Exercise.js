// Push

// SLL - push Exercise 
// Implement the following on the SinglyLinkedList class:  

// push
// This function should take in a value and add a node to the end of the SinglyLinkedList.
// It should return the SinglyLinkedList.

// pop
// This function should remove a node at the end of the SinglyLinkedList.
// It should return the node removed.

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

    push(val) {
        if (!this.head) this.head = newNode; 
        else this.tail.next = newNode; 
        this.tail = newNode; 
        return this; 
    }
    pop() {
        if (!this.head) return undefined; 
        let removedNode; 
        if (this.head === this.tail) {
            removedNode = this.head; 
            this.head = null; 
            this.tail = null; 
        } else {
            let current = this.head; 
            let newTail = current; 
            while (current.next) {
                newTail = current; 
                current = current.next; 
            }
            this.tail = newTail; 
            this.tail.next = null; 
        }
        this.length--; 
        return removedNode; 
    }
}
