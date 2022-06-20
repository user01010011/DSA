// Data Structures 

// Class 

// Class Methods 
// Example 1: 

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName; 
        this.lastName = lastName; 
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`; 
    }
    // This is a class method: not related to a particular instance. It's part of the class in general, that some overall functionality, some utility function
    // The way we call class method is use Student with capitalized S
    static enrollStudents(...students) { // you can pass in multiple students in an array 
        // maybe send an email here 
    }
}

let firstStudent = new Student("Colt", "Steele"); 
let secondStudent = new Student("Blue", "Steele"); 

Student.enrollStudents([firstStudent, secondStudent])