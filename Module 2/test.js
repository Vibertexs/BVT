/* Variables & Data Types */

//Question 1: There are 8 Primitive Data Types in JavaScript, list them all 
//Note: Arrays and Objects are not primitive data-types
//Answer: Numbers, strings, booleans, null, object, bigint, symbol, undefined

//Question 2: Is JavaScript a dynamically typed Language? or a Statically typed language?
//Answer: Dynamically tpyped

//Question 3: Variable Scoping
// Part 1 - What 2 types of scope can variables declared with the "var" keyword have?
//Answer: global and local

//Part 2 - As of ES6 JavaScript has 2 new variable declaration keywords: "let" and "const".  
//How are let and const variables scoped?
//Answer: their scope is based on where they are declared

//Part 3 - What is the difference between "let" and "const"? Hint: it has to do with variable reassignment
//Answer: let allows for reassignment, const does not


//Question 4:

//Part 1: Read the code written below. What is wrong with the code?
// You cant declare a variable twice

// var carBrandOne = "Ford";
// let carBrandOne = "Mercedes";

// comment out the code above and write a correction to the code below this  line

let carBrandOne = "Ford";
carBrandOne = "Mercedes";

//Part 2: Read the code written below. What is wrong with the code?
// You cant reassign a const variable

// const myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"}
// myConstant = 10;
// comment out the code above and write a correction to the code below this  line

let myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"}
myConstant[1] = 10;

// Part 3: Read the code written below. What will happen? Will this throw an error?
const myConstant2 = {id: 2, name: "Bill", favoriteSnack: "potato chips"}
myConstant2["name"] = "James"

// This will throw an error because you can not modify a const variable

//Part 4: Read the code written below. Look at the function call below the defined function,
// Will declaring a let variables with the same name throw an error in this case? Why or why not?
// What will the function return?

//Answer: It will throw an error because the variable is already declared, this can only be done if the variable is declared globaly

function variablesExample(number){
    let returnMessage = '';
    if(number > 10){
        let message = "the given number is larger than 10";
        returnMessage = message;
    }else if(number === 10){
        let message = "the given number is equvalent to 10";
        returnMessage = message;
    }else{
        let message = "the given number is less than 10";
        returnMessage = message;

    }
    console.log(returnMessage);
    return returnMessage;
}
variablesExample(15);


//Question 5: 

// Part-1: What are acceptable characters that you can use to start variable names?
//Answer: You can use letters, underscores, and dollar signs

//Part-2: What are acceptable characters that you can use to name variables (after the first character of the name)?
// Answer: You can use letters, numbers, underscores, and dollar signs


/* END OF VARIABLES AND STRINGS SECTION */



/* Strings */

// Given the string below,
// Part 1 - Write code that will return the 8th character of the string
// Part 2 - Then write code that will return (or console.log) "is a"
// Note - don't convert this string to an array
let coolString = "Hello World is a tradition";
console.log(coolString[7]);
console.log(coolString.slice(7, 11));


//Part 3
// How would you return the 4th from the last character from the coolString without just hard coding the index of that character?

console.log(coolString[coolString.length - 4]);


//Part 4
// Look at the variables below that have been initialized with string data.  
//What are the 2 ways you can concatinate these strings together?
let aString = "Back to "
let bString = "The Future"

//Write the 2 ways of concatinating the strings below this line.  Declare a new variable for the results.
let cString = aString + bString;
console.log(aString + bString);



/*For Loops */
// You are provided an array of strings below
// an example of a console.log is also provided

let namesArray = ["Joe", "Larry", "Bob", "James", "David", "Tim", "Jimmy", "Jessie", "Marty"];
console.log(namesArray["The first name is: ", 0]);

/*directly below this comment, 
write a for loop that iterates over the namesArray from the beginning to the end of the array and logs the names to the console */
for(let i = 0; i < namesArray.length; i++){
    console.log(namesArray[i]);
}

//write a for loop that iterates over the namesArray from the END to the BEGINnING of the array and logs the names to the console
for(let i = namesArray.length - 1; i >= 0; i--){
    console.log(namesArray[i]);
}

//write a for loop that iterates over the namesArray BUT only logs every other name to the console
for(let i = 0; i < namesArray.length; i += 2){
    console.log(namesArray[i]);
}


/*While Loops*/

// Inside the function below, Write a while loop that will console.log("Hello World") "number" times.  Use continueBoolean in your while loop's specified condition

function whileLoopQuestion1(number){
    let continueBoolean = true;
    console.log("Hello World")
}

whileLoopQuestion1(20);


/* Array Methods */

//What does the Array.prototype.push() method do? What does it return?
// It adds an new element to the end of the array 

//What does the Array.prototype.unshift() method do? What does it return?
// It adds an element to the beginning of the array

//What does the Array.prototype.pop() method do? What does it return?
// It removes the last element of the array

//What does the Array.prototype.shift() method do? What does it return?
// It removes the first element of the array

// What does the Array.prototype.join() method do? What does the 1 optional parameter do to modify how this method works? What does it return?
// It combines 2 arrays into one

//What does the Array.prototype.slice() method do? What will it return?
// It gets a section of an array and returns it

//What does the Array.prototype.splice() method do? What will it return?
// It removes or replaces elements in an array

//Look at the Array Below
let nestedArray = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12],[13,14,15],[16,17,18]], 19];
//How many dimensions does this array have?
// 3

//How would you access the value 11?
nestedArray[3][0][1];

// how would you access the value 5?
nestedArray[1][1];

// How would you access the last element in the array without knowing the array's length?
nestedArray[nestedArray.length - 1];

// How would you access the 3rd element in the array?  What will that element's value be?
nestedArray[2];

/* Functions */

/* Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

write a function named convertCtoF.
The function should take 1 argument.
The parameter should be named celsius.

Your function needs to accept an argument of a temperature in Celsius, and return the equivalent temperature in Fahrenheit
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
convertCtoF(30); should return 86;

*/


function convertCtoF(celsius){
    return (celsius * 9/5) + 32;
}