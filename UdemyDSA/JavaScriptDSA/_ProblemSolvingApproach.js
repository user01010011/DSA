// Write a function which takes two numbers and return their sum.

const { numberToIdentifer } = require("webpack/lib/Template");

// Understand The Problem 
// 1. Can I restate the problem in my own words? 
//     - "implement addition" or "implement adding two numbers"
// 2. What are the inputs that go into the problem? 
//     - integers? floats/floating points? How large are these numbers going to be? What about string for really large numbers? 
//     - Are we only working with 2 inputs? Is it always 2? What if someone wants to add 4, 10 numbers, is it valid to add 10 numbers together mathematically as our function only going to work with 2 numbers?
// 3. What are the outputs that should come from the solution to the problem? 
//      - integer? float? string? 
// 4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
//     - Do we have enough information? What happens if someone only passes one number? Then we don't have enough information to do addition at that point. 
//     - If/when we don't have enough information, do we use 0 or do we return undefined or null or something? Or ignore it all together? What do we do? 
// 5. How should I label the important pieces of data that are a part of the problem?
//     - maybe name the function Add2Nums, num1 and num2 are the arguments, and sum is the result that we return. 

// Write a function which takes in a string and returns counts of each character in the string. 

// Explore Examples
// 1. Start with Simple Examples 
// Write down 2 or 3 simple examples with an input and then the output.
//     Write out examples: 
//     charCount("aaaa"); // {a:4} -> by writing examples, you discover more questions, like should you return count of letters not in the string? ex. b:0, c:0, etc.
//     charCount("hello"); // {h:1, e:1, l:2, o:1}
// 2. Progress to More Complex Examples
//      What about edge cases? 
//     "my phone number is 182763" 
//     -> if this was the input, what would we expect to return? Do we want to account for spaces? That's a important one. 
//     What about other characters? Dollar signs, underscores, numbers, etc. That's a big one. Are we going to put numbers in there? 
//     And an even more important one that definitey would come up. What about this: 
//     "Hello hi" -> Do we store uppercase and lowercase? Do we ignore casing? How should this Worker, should our object have H uppercase one, H lowercase one, or just h two.
//     These are more complex inputs and examples that would really help to understand and help to simplify the problem or understand it better by asking these sort of questions.
//     These examples are really just another form of understanding the problem better before we tackle it.  
// 3. Explore Examples with Empty Inputs 
// Explore examples with empty inputs that often give you some insight into how the problem should work, especially in an interview SVGTextPositioningElement. 
//     What if someone does char count and doesn't pass anything in like this or an ampty string. 
//     charCount()
//     charCount("")
//     What do we want to return? Do we want to return an empty object at the end? Do we want to return null or false or undefined or maybe an error? 
// 4. Explore Examples with Invalid Inputs 
// This is more useful in the real world, what happens if a user enters something that is invalid? We have to think about this all the time. 
//     What if someone passes in something that isn't a string? What if they pass in a number or an object or they pass in null? 
//     There's all sorts of these edge cases and understanding these cases in an interview setting, often is not that important, but it can be really important in the real world to help you build a more robust solution, something that's more foolproof. So it's still important to keep that in mind and sometimes can give you a bit of insight into how the problem works or how you should solve it. 


// Write a function which takes in a string and returns counts of each character in the string. 
// type the skeleton of my function 
function charCount(str) {
    // do something 
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters. (the interviwer decided)
}
function charCount(str) {
    // make object to return at end 
    // loop over string, for each character...
        // if the char is a number/letter AND is a key in object, add one to count
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        // if character is something else (space, period, etc.) don't do anything
    // return object at end 
}
// This isn't even full pseudocode, but just writting these comments out. But for more complicated problems, it really can be a lifesaver, becuase if you write out the steps, especially in an interview, you know what you need to do, even if you're not sure how to accomplish it. 
// It demonstrates to your interviewer that you at least have formulated an approach. And if you run out of time, and you only get halfway there, but you have the layout for what you would have done, so if we stopped here, let's say this is where we run out of time, if we have these notes down here, our interviewer could see that we knew where we were going or we had a general idea. And that can often make the difference in demonstrating that you are competent even if you don't finish the problem. Many people who get jobs who thought they failed the interview because they didn't finish the problem, they didn't have the return value at the end, but often these problems are made to be so difficult or so time consuming that you're not supposed to finish, and it's really about seeing your process. 


// Write a function which takes in a string and returns counts of each character in the string. 
// If you don't know how to solve the problem: 
    // You can start with the first letter / try the first letter 
    // You can start with a loop 

function charCount(str) {
    // make object to return at end 
    let result = {}; 
    // loop over string, for each character...
    for (let i = 0; i < str.length - 1; i++) {
        let char = str[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++; 
        } 
        // if the char is a number/letter AND not in object, add it to object and set value to 1
        else {
            result[char] = 1; 
        };
    }
    // if character is something else (space, period, etc.) don't do anything
    // return object at end 
    return result; 
}

charCount("Hello")
charCount("Hi there!")


// Could do additional research, could ask interviewer if they had suggestions
// To tell a character is alphanumeric: 
    // define an array containing every valid character, very massic array, that had ABCDE...all uppercase and lowercase, etc 
    // regex (regular expression)
    // character codes/ASCII codes
// Then plug in existing code 

// Write a function which takes in a string and returns counts of each character in the string. 
// Look Back & Refactor 

// Solution 1:  
function charCount(str) {
    var obj = {}; 
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase(); 
        if (/[a-zO-9]/.test(char)){
            if (obj[char] > 0) {
                obj[char]++; 
            } else {
                obj[char] = 1; 
            };
        }
    }
    return obj; 
}

// Solution 2: 
function charCount(str) {
    var obj = {}; 
    for (var char of str) {
        char = char.toLowerCase(); 
        if (/[a-z0-9]/.test(char)){
            if (obj[char] > 0) {
                obj[char]++; 
            } else {
                obj[char] = 1; 
            };
        }
    }   
    return obj;
}

// Solution 3: using regex / regexp
function charCount(str) {
    var obj = {}; 
    for (var char of str) {
        char = char.toLowerCase(); 
        if (/[a-z0-9]/.test(char)){
            obj[char] = ++obj[char] || 1; 
        }
    }
    return obj; 
}

// If this was interview setting: 
// I'm using a regular expression here because I know how to do that and it's a quick way, relatively short way of checking for a certain pattern in our case to see if a character is alphanumeric, a letter or a number. 
// But i'm not sure how efficient it actually is. I've heard certain things that in JavaScript (this is true), regular expressions, the performance can vary depending on what you're doing and depending on the browser you use. 
// (Chrome had some issues with regular expressions a while back)

// Solution 4: Using charCode
function charCount(str) {
    var obj = {}; 
    for (var char of str) {
        char = char.toLowerCase(); 
        if (isAlphaNumeric(char)) {
            obj[char] = ++obj[char] || 1; 
        }
    }
    return obj; 
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0); 
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 &&  code < 123)) { // lower alpha (a-z)
            return false; 
        }
        return true; 
}
charCodeAt(0)