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
    // pop removes the last node 
    // traverse() {
    //     var current = this.head; // set current to be the head of the linked list 
    //     while(current) {
    //         console.llog(current.val); 
    //         current = current.next; // change current to the next node, and until there is no more next, the while loop is done
    //     }
    // }
    pop() {
        if (!this.head) return undefined; // or (!this.tail), check if the length is zero or if there is no head (or no tail), return undefined
        var current = this.head; // start at the top, current is the thing that's going to hit the end 
        var newTail = current; // newTail is the thing that's going to hit before the end, or what will become the tail, 
        while (current.next) { // as long as there is a next node
            newTail = current; // newTail is set to whatever current was 
            current = current.next; // move current one forward and keep going until there is no more next node // always one more than newTail
        }
        this.tail = newTail; // set the new tail to newTail (the new end/tail) move the tail 
        this.tail.next = null; // nothing comes after it and it severs the linked list connection
        this.length--; // reduce the length of the linked list 
        if(this.length === 0) { // or you can use this.head == this.tail, if the list is empty now or if the head equals the tail 
            this.head = null; // this means there was one item, we popped it off and we subtracted one from the length, so now there's zero items there, so we just reset head and tail to be null. 
            this.tail = null; 
        } 
        return current; 
    }

    shift() {
        if(!this.head) return undefined; 
        var currentHead = this.head; // store the current head in a variable 
        this.head = currentHead.next; // set the head to the next node 
        this.length--; 
        return currentHead; 
    }
    unshift(val) {
        var newNode = new Node(val); 
        if (!this.head) { // if there is no head, or nothing in the list to start 
            this.head = newNode; // set both the head and tail to the new node 
            this.tail = this.head; 
        } else { // only runs when there's at least one thing in here in the list. remember to add else {}, without this, we are setting the head and the tail to be the new node. This will set the next to null if there is only one item
            newNode.next = this.head; // otherwise (there is head), set the new node to point to the head / list's head
            this.head = newNode; // this moves the head to the new node 
        }
        this.length++; 
        return this; 
    }

    get(index) {
        if (index < 0 || index >= this.length) return null; 
        var counter = 0; // keep track of 
        var current = this.head; // keep track of our currect position as we traverse
        while (counter !== index) { // while we have not reached the index
            current = current.next; // current now moved to the next node / next node's head
            count++; 
        }
        return current; 
    }
}
var list = new SinglyLinkedList()
list.push("MAKE") // current, counter = 0 // traverse through the linked list
list.push("SOMETHING") // current, counter = 1
list.push("PEOPLE") // current, counter = 2
list.push("WANT") // current, counter = 3
list.push("!") // current, counter = 4
// list.pop() // call the pop function 