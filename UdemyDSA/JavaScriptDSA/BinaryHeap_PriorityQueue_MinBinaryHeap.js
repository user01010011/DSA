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

    dequeue() {
        const max = this.values[0]; // first store the value of max
        const end = this.values.pop(); // pop the last item off
        if (this.values.length > 0) {
            this.values[0] = end; // put the end node to the top 
            this.sinkDown(); 
        }
        return max; 

    }
}

class Node {
    constructor(val, priority) {
        this.val = val; 
        this.priority = priority; 
        // this.insertTime = Data.now(); // if entered two items with the same priority, can go by insert time
    }
}