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
}