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

    sinkDown() { // you can put index in, but empty will start from the top 
        let idx = 0; 
        const length = this.values.length; 
        const element = this.values[0]; 
        while(true) {
            let leftChildIdx = 2 * idx + 1; 
            let rightChildIdx = 2 * idx + 2; 
            let leftChild, rightChild; 
            let swap = null; 
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]; 
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx; 
                }
            }
            if (rightChildIdx < length) {
                rigthChild = this.values(rightChildIdx); 
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx; 
                }
            }
            if (swap === null) break; 
            this.values[idx] = this.values[swap]; 
            this.values[swap] = element; 
            idx = swap; 
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