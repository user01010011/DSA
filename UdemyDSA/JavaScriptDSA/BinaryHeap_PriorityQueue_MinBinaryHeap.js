// Data Structures 

// Binary Heap - Priority Queue - Min Binary Heap

class PriorityQueue {
    constructor() {
        this.values = []; 
    }
}

class Node {
    constructor(val, priority) {
        this.val = val; 
        this.priority = priority; 
        // this.insertTime = Data.now(); // if entered two items with the same priority, can go by insert time
    }
}