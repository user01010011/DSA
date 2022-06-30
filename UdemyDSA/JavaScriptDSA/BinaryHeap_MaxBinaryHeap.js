// Data Structures 

// Binary Heap - Max Binary Heap

class MaxBinaryHeap {
    constructor() {
        // this.values = [41, 39, 33, 18, 27, 12]; 
        this.values = [100, 79, 52, 41, 33, 12];
    }

    insert(element) {
        this.values.push(element); 
        this.bubbleUp(); 
    }

    bubbleUp() {
        let idx = this.values.length - 1; 
        const element = this.values[idx];      
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2); 
            let parent = this.values[parentIdx]; 
            if (element <= parent) break;
            this.values[parentIdx] = element; 
            this.values[idx] = parent; 
            idx = parentIdx; 
        }
    }

    extractMax() {
        const max = this.values[0]; // first store the value of max 
        const end = this.values.pop(); //  pop the last item off 
        if (this.values.length > 0) {
            this.values[0] = end; // put the end node to the top 
            this.sinkDown(); 
        } 
        return max; 
    }

    sinkDown() { // <-- you can put index in, but empty will start from the top 
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
                if (leftChild > element){
                    swap = leftChildIdx; 
                }
            } 
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]; 
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild) 
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

let heap = new MaxBinaryHeap(); 
heap.insert(55)
// [41,39,33,18,27,12,55]
//  0  1  2  3  4  5  6        