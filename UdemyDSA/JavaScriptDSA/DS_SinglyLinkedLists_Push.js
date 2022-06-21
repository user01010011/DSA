// Data Structures 

// Singly Linked List

// Push 

// piece of data - val 
// refernce to next node - next 
class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; // nothing linked to it yet
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }
    // push is insert in the end 
    push(val) {
        var newNode = new Node(val); // create a new node 
        if (!this.head) { // if there is no head, set the head to the new node  // one edge case that is empty 
            this.head = newNode; // head and tail are the same thing, both point to the new node 
            this.tail = this.head; 
        } else { // if not empty, take the tail add onto the end and then move the tail one spot over 
            this.tail.next = newNode; /// if HELLO as the tail and push GOODBYE, take GOODBYE as the new node, take the current tail HELLO set the .next to be GOODBYE
            this.tail = newNode; // update this.tail to point to the new node
        }
        this.length++; // update the length of the linked list after you have created the new nodes & assigned new tail
        return this; 
    }
}
var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")