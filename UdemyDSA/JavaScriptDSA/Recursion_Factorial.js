// 'Recursion 

// Factorial 

// Factorial(4) or 4! = 4 * 3 * 2 * 1

// Use Recursion: 
function factorial(num) {
    if (num === 1) return 1; // stops at 1 
    return num * factorial(num - 1);
}
factorial(5); 

// Using Regular Function / For Loop 
// function factorial(num) {
//     let total = 1; 
//     for (let i = num; i > 1; i--) {
//         total *= i 
//     }
//     return total; 
// }
// factorial(4)