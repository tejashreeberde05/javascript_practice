/* Datatype Summary*/
//JavaScript data types are divided into primitive and non-primitive types.
/*

Primitive Data Types: They can hold a single simple value. String, Number, BigInt, Boolean, undefined, null, and Symbol are primitive data types.


Non-Primitive Data Types: Non-primitive data types, also known as reference types.They can hold multiple values. Objects are non-primitive data types.
*/



// integer value
let integer_number = -3;
console.log(integer_number); // output : -3

// floating-point value
let float_number = 3.15;
console.log(float_number); // output : 3.15


// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1);  //  output : "900719925124740999n"

let value2 = 900719925124740998n;

//JavaScript Boolean

let dataChecked = true;
console.log(dataChecked);  // output : true

let valueCounted = false;
console.log(valueCounted);  // output : false


//JavaScript undefined
let name;
console.log(name);  // output : undefined

let fname = undefined;
console.log(fname);  // output : undefined

//JavaScript null
let number = null;
console.log(number);  //output :  null

//JavaScript Symbol
// two symbols with the same description
let val1 = Symbol("abcd");
let val2 = Symbol("abcd");

console.log(val1 === val2);  // output : false

//JavaScript Object
let student = {
    firstName: "Raj",
    lastName: null,
    class: 2
};

console.log(student); // output : { firstName: 'Raj', lastName: null, class: 2 }


//JavaScript Arrays
const carsNames = ["Saab", "Volvo", "BMW"];
console.log(carsNames); // output : [ 'Saab', 'Volvo', 'BMW' ]

/* The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable.
The typeof operator returns the type of a variable or an expression:
*/

console.log(typeof "");             // Returns "string"
console.log(typeof ("John"))         // Returns "string"
console.log(typeof "John Doe")     // Returns "string"
console.log(typeof 0); //Returns "number"

//https://262.ecma-international.org/5.1/#sec-11.4.3
