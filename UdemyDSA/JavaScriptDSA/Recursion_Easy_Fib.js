// Recursion 

// Easy 

// fib 

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

// Examples: 
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Solution 1 - 1: 
function fib(num) {
    if (num === 1) return 1; 
    if (num === 2) return 2; 
    return fib(num - 1) + fib(num - 2)
}

// Solution 1 - 2: 
function fib(num) {
    if (num <= 2) return 1; 
    return fib(num - 1) + fib(num - 2)
}
// fib(5)
//  fib(4) + fib(3)
//   fib(3) + fib(2) + fib(2) + fib(1)
//     fib(3) + 1 + 1 + 1 
//      fib(2) + fib(1) + 3
//         1 + 1 + 3 
//          5
     