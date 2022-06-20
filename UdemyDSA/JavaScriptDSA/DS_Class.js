// Data Structures 

// Class 

// Class Syntax 

// this is a pattern: 
// Conventionally, classes should start with a capital letter, that should be CamelCase
// The method to create new objects must be called constructor 
class Student { 
    constructor(firstName, lastName, year) {
        this.firstName = firstName; // whatever was passed in as firstName, assign it to the individual object
        this.lastName = lastName; // whatever was passed in as lastName, assign it to the individual object
        this.grade = year; 
    }
}
 // use new to instantiate an object from the class
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele"); 