// piece of data - val 
// refernce to next node - next 

class Node {
    constructor(val) {
        this.val = val; 
        this.next = null; // nothing linked to it yet
    }
}

// var first = new Node("Hi") // create first node
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
        this.length = 0; 
    }
    // push is insert in the end 
    push(val) {

    }
}