function countDown(num) {
    if (num <= 0) {
        console.log("All done!"); 
        return; // add this to stop it otherwise it will go to -1
    }
    console.log(num); 
    num--; 
    countDown(num); 
}

// print 3 
// countDown(2)
// print 2 
// countDown(1)
// print 1 
// countDown(0)
// print "All Done"

// Without Recursion / Regular function - For Loop: 
// function countDown(num) {
//     for (let i = num; i > 0; i--) {
//         console.log(i); 
//     }
//     console.log("All done!")
// }