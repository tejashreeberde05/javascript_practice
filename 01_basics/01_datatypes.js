"use strict";// treat all JS code as  newer version 
// alert("hello") // we are using node.js , not browser

//String	- Textual Data
//Number    - An Integer or floating poimt number
//BigInt	- An integer with arbitrary precision.
//Boolean	 - Any of two values: true or false.	
//undefined  - A data type whose variable is not initialized or value is not assigned.	
//null      -	Denotes a null value.	
//Symbol	- A data type whose instances are unique and immutable.
//Object	- Key-value pairs of collection of data.


// string enclosed in single quotes
let  fruit = 'Apple';
console.log(fruit);

//String enclosed in double quotes
let country = "India";
console.log(country);



/*
JavaScript Number
Integers - Numeric values without any decimal parts. Example: 3, -74, etc.
Floating-Point - Numeric values with decimal parts. Example: 3.15, -1.3, etc.
*/

//integer value
let intNumber = 1;
console.log(intNumber);

let floatNumber = 1.23;
console.log(floatNumber);



/*
JavaScript BigInt
BigInt is a type of number that can represent very large or very small integers beyond the range of the regular number data type.
*/


//Bigint Value
let bigintNumber = 98764322222222n;
console.log(bigintNumber);


// add two big intergers or numbers

let resultAns = bigintNumber + 1n;

console.log(resultAns);




/*
JavaScript Boolean
A Boolean data can only have one of two values: true or false. 
*/

 let dataChecked = "true"
 console.log(dataChecked)

 let statusChecked = "False";
 console.log(statusChecked);



 /*
 JavaScript undefined
 If a variable is declared but the value is not assigned, then the value of that variable will be undefined.
 */

 let fname;
 console.log(fname);

 let name= undefined
 console.log(name);




 /*
 JavaScript null
 In JavaScript, null represents "no value" or "nothing." For example,
*/

let number ="null"
console.log(number);



 /*
 JavaScript Symbol
A Symbol is a unique and primitive value. This data type was introduced in ES6.
When you create a Symbol, JavaScript guarantees that it is distinct from all other symbols, even if they have the same descriptions. 
*/

//Rwo symbols with same description

let value1 = Symbol("Javascript")
let value2 = Symbol("Javascript")

console.log(value1 == value2);



/*
JavaScript Object
An Object holds data in the form of key-value pairs. For example,
*/

let studentInfo = {
            fName : "Raj",
            lName :"Nair",
            age   : 30

};
console.log(studentInfo);


/*
JavaScript Arrays
An array is a special variable, which can hold more than one value:


*/

const studenNames = ["Raj", "Riya", "Siya"];
console.log(studenNames);



console.log(typeof("Apple"));
console.log(typeof(studenNames));
console.log(typeof(studentInfo));






 
 
 





