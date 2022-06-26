// Data Structures 

// Binary Search Tree

class BinarySearchTree {
    constructor() {
        this.root = null; 
    }
}

class Node {
    constructor(value) {
        this.left = null; 
        this.right = null; 
        this.value = value; 
    }
}

let tree = new BinarySearchTree(); 
tree.root = new Node(10); 
tree.root.right = new Node(15); 
tree.root.left = new Node(7); 
tree.root.left.right = new Node(9); 