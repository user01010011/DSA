// Data Structures 

// Binary Search Trees 

class Node {
    constructor(value) {
        this.value = value; 
        this.left = null; 
        this.right = null; 
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null; 
    }
    insert(value) {
        let newNode = new Node(value); 
        if (this.root === null) {
            this.root = newNode; 
            return this; 
        } else {
            let current = this.root; 
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode; 
                        return this;
                    } else {
                        current = current.left; // update current
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode; 
                    } else {
                        current = current.right; 
                    }
                } 
            } 
        }
    }

    find(value) {
        if (this.root === null) return false; 
        let current = this.root; 
        let found = false; 
        while (current && !found) {
            if (value < current.value) {
                current = current.left; 
            } else if (value > current.value) {
                current = current.right; 
            } else {
                found = true;
            }
        }
        if (!found) return undefined; 
        return current; 
    }

    BFS() {
        let node = this.root,
        data = [], // what will return at the end 
        queue = []; // empty array 
        queue.push(node); // place the root in the queue; 
        while (queue.length) { // as long as something is in the queue, we remove from the beginning
            node = queue.shift(); 
            data.push(node.value); 
            if (node.left) queue.push(node.left); // if there is a node on the left, we push it into the queue 
            if (node.right) queue.push(node.right); 
        }
        return data; 
    }

    DFSPreOrder(){
        let data = [];
        let current = this.root; 
        function traverse(node) {
            data.push(node.value); 
            if (node.left) traverse(node.left); 
            if (node.right) traverse(node.right); 
        }
        traverse(current); 
        return data;
    }

    DFSPostOrder() {
        let data = []; 
        let current = this.root; 
        function traverse(node) {
            if (node.left) traverse(node.left); 
            if (node.right) traverse(node.right); 
            data.push(node.value); 
        }
        traverse(current); 
        return data; 
    }

    DFSInOrder() {
        let data = []; 
        let current = this.root; 
        function traverse(node) {
            if (node.left) traverse(node.left); 
            data.push(node.value); 
            if (node.right) traverse(node.right); 
        }
        traverse(current); 
        return data; 
    }

    DFSInOrder() {
        let data = []; 
        let current = this.root; 
        function traverse(node) {
            node.left && traverse(node.left); 
            data.push(node.value); 
            node.right && traverse(node.right); 
        }
        traverse(this.root); 
        return data; 
    }
}

let tree = new BinarySearchTree()
// tree.root = new Node(10)
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3) 
tree.insert(8)
tree.insert(20)
