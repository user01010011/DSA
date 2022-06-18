function sumRange(num) {
    if (num === 1) return 1; // this is the base case 
    return num + sumRange(num - 1); // this is the recursive call
}


// sumRange(3) // sumRange(3) == 6 // 3 + 3
//     return 3 + sumRange(2) // sumRange(2) == 3 / 2 + 1
//                 return 2 + sumRange(1) // sumRange(1) = 1 // 1
//                             return 1 

// return 6
//     return 3 + 3
//         return 2 + 1 
//             return 1