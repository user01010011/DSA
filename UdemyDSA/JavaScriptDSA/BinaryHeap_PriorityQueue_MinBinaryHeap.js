// Data Structures 

// Binary Heap - Priority Queue - Min Binary Heap

class PriorityQueue {
    constructor() {
        this.values = []; 
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority); 
        this.values.push(newNode); 
        this.bubbleUp(); 
    }

    bubbleUp() {
        let idx = this.values.length - 1; 
        const element = this.values[idx]; 
        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2); 
            let parent = this.values[parentIdx]; 
            if (element.priority <= parent.priority) break; 
            this.values[parentIdx] = element; 
            this.values[idx] = parent; 
            idx = parentIdx; 
        }
    }
}

class Node {
    constructor(val, priority) {
        this.val = val; 
        this.priority = priority; 
        // this.insertTime = Data.now(); // if entered two items with the same priority, can go by insert time
    }
}