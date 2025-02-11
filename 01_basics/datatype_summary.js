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
  
/* Primitive and Reference value in JavaScript*/


/*
The size of Primitive values are fixed, therefore JavaScript stores the primitive value in the call stack.When we access a primitive value, we manipulate the actual value stored in that variable. Thus, variables that are primitive are accessed by Value. When we assign a variable that stores a primitive value to another, the value stored in the variable is created and copied into the new variable.

Immutable, meaning their values cannot be changed after assignment. Modifying a primitive value creates a new copy.
*/


//Example: Let us take an example to understand primitive value:

let age1 = 30;
let age2 = age1;
//console.log(age2);
console.log("Age 1 : ", age1); // output : 30
console.log("Age 2: ", age2); // output : 30
age1=31;
console.log("New Age 1 :",age1); // output : 31;
console.log("New Age 2 :",age2); // output : 30


/*
Reference Value: JavaScript provides three types of Reference values that include Array, Object, and Function. The size of a reference value is dynamic therefore It is stored on Heap.

When we access a reference value, we manipulate it through reference, not through its actual value that is stored. Thus, variables that are reference values are accessed by reference. When we assign a reference value from one variable to another, the value stored in the variable is also copied into the location of the new variable but the difference is that the values stored in both variables now are the address of the actual object stored on the heap. As a result, both variables are referencing the same object, So we can manipulate the original object from both variables.

Mutable, allowing their values to be modified after assignment. Changes affect the original data referenced.
*/

//Example: Let us take an example to understand reference value:

let info = { 
    Name :"Abc", 
    Age :10 
} 
console.log("Name : ", info.Name , "Age :",info.Age); //output : Name :  Abc Age : 10


let info2 = info;

//console.log(info2);
info2.Name = "Raj";
info2.Age= 35;

console.log("Name : ", info.Name , "Name :",info.Age); // Name :  Raj Name : 35

