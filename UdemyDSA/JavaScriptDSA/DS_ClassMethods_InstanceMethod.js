// Data Structures 

// Class 

// Instance Methods 
// class DataStructure(){
//     constructor(){
//         // what default properties should it have? 
//     };
//     someInstanceMethod(){
//         // what should each object created from this class be able to do?
//     };
// };

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.year = year; 
        this.tardies = 0; 
        this.scores = []; 
    }
    // all of these functions below work on individual instances 
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`; 
    }
    markLate() {
        this.tardies += 1; // every time markLate() function is called, counts one more 
        if (this.tardies >= 3) {
            return "YOU ARE EXPELLED!!!!"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score); 
        return this.scores  
    }
    // should return the average of the scores in the individual student's scores array. 
    calculateAverage() { 
       let sum = this.scores.reduce(function(a, b) {return a+b;}) // calculate the sum of all the elements
       return sum / this.scores.length 
    }
}
let firstStudent = newStudent("Hello", "World", 1, 0); 
firstStudent.fullName() // "Hello World"

