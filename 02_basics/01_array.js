/* The JavaScript Array Object : The Array object is used to store multiple values in a single variable.
    Take the example of the scores obtained by a bunch of students in a subject. We can create a variable for each student to store the score, but that is cumbersome to handle and maintain. The arrays allow us to create a single variable and keep all its scores. You can think of an array as a bag containing multiple items.

 */


// Create and initialize an array 
let courses = ["HTML", "CSS", "JavaScript", "React"]; 
console.log(courses); // Output : [ 'HTML', 'CSS', 'JavaScript', 'React' ]


//Create an empty array and add values:
const cars = new Array();
//add values to the set
cars.push("Saab");
cars.push("Volvo");
cars.push("BMW");

console.log(cars); // Output : [ 'Saab', 'Volvo', 'BMW' ]

/* JavaScript Array at() : This method returns an indexed element from an array.
   Syntax : array.at(index)

*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
 console.log(fruit); // Output : Apple 

 //Get the first element of fruits:
 console.log(fruits.at(0)); // Output : Banana


 // Get the last element of fruits:
 console.log(fruits.at(-1)); // Output : Mango
 

 /* JavaScript Array concat() : This method concatenates (joins) two or more arrays.
    Syntax : array1.concat(array2, array3, ..., arrayX)
 */

 const arr1 = ["Cecilie", "Lone"];
 const arr2 = ["Emil", "Tobias", "Linus"];

 const children = arr1.concat(arr2);
 console.log(children); // Output : [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]
 
 //Concatenate strings and numbers:

const str = ["ABC","DEF"];
const num =[1,2];
console.log(str.concat(num)); // Output : [ 'ABC', 'DEF', 1, 2 ]


// Concatenate nested arrays 

const array1 = [1, 2, [3, 4]];
const array2 = [[5, 6], 7, 8];
console.log(array1.concat(array2)); // Output : [ 1, 2, [ 3, 4 ], [ 5, 6 ], 7, 8 ]


/* JavaScript Array constructor : This property returns the function that created the Array prototype.
   Syntax : array.constructor

*/
const fruitsarray = ["Banana", "Orange", "Apple", "Mango"];
let text = fruitsarray.constructor;
console.log(text); // Output : [Function: Array]


/* JavaScript Array copyWithin() : This method copies array elements to another position in an array.This method overwrites the existing values.

   Syntax : array.copyWithin(target, start, end)
*/

// Copy to index 2, all elements from index 0:

const arrbeforCopy = ["Banana", "Orange", "Apple", "Mango"];
console.log(arrbeforCopy.copyWithin(2, 0)); // Output : [ 'Banana', 'Orange', 'Banana', 'Orange' ]


//Copy to index 2, the elements from index 0 to 2:

const arrfruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(arrfruit.copyWithin(2, 0, 2)); // Output : [ 'Banana', 'Orange', 'Banana', 'Orange', 'Kiwi' ]


/* JavaScript Array entries() :  This method returns an Iterator object with the key/value pairs from an array:
   Syntax : array.entries()
*/
// Create an Array
const fruitsbasket = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
const fruitslist = fruitsbasket.entries();

// List the Entries
let strfruit = "";
for (let x of fruitslist) {
    strfruit += x ;
    
}
console.log(strfruit); // Output : 0,Banana 1,Orange 2,Apple 3,Mango


/* JavaScript Array every() : The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.
The every() method does not change the original array
  
Syntax : array.every(function(currentValue, index, arr), thisValue)

*/

// Create an Array
const ages = [32, 33, 16, 40];

// Create a Test Function
function checkAge(age) {
    return age > 18;
  }

  // Are all ages over 18?

console.log(ages.every(checkAge)); // Output : false


/* JavaScript Array fill() : This method fills specified elements in an array with a value.It overwrites the original array.
Start and end position can be specified. If not, all elements will be filled.

  Syntax : array.fill(value, start, end)

*/

const fruitsbeforfill = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitsbeforfill.fill("Kiwi")); // Output : [ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]


//Fill the last two elements:

const fruitsbeforefill1 = ["Banana", "Orange", "Apple", "Mango"];
//fruitsbeforefill1.fill("Kiwi", 2, 4);
console.log(fruitsbeforefill1.fill("Kiwi", 2, 4)); // Output : [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]


/* JavaScript Array filter() : this method creates a new array filled with elements that pass a test provided by a function.
   Syntax : array.filter(function(currentValue, index, arr), thisValue)
*/

//Return an array of all values in ages[] that are 18 or over:

const agesarray = [32, 33, 16, 40];
const result = agesarray.filter(checkAdult);
console.log(result); // Output : [ 32, 33, 40 ]


function checkAdult(age) {
    return age >= 18;
  }

  /* JavaScript Array find() : This  method returns the value of the first element that passes a test.
     Syntax : array.find(function(currentValue, index, arr),thisValue)
  */

/* In this example we searches for the first element in the array greater than 20. It uses the find() method to iterate through the array and returns the first element that satisfies the condition. Finally, it logs the result (30) to the console.

*/

// Input array contain some elements.
let array = [10, 20, 30, 40, 50];

// Method (return element > 20).
let found = array.find(function (element) {
    return element > 20;
});

// Printing desired values.
console.log(found); // Output :  30


/* JavaScript Array findIndex() : This method returns the index (position) of the first element that passes a test.
   Syntax : array.findIndex(function(currentValue, index, arr), thisValue)

*/

//Finding Indices that contain odd numbers.Here, the method findIndex() finds all the indices that contain odd numbers. Since no odd numbers are present therefore it returns -1 .

function isOdd(element, index, array) {
    return (element % 2 == 1);
}

console.log(([4, 6, 8, 12].findIndex(isOdd)));  // Output : -1


/* JavaScript Array findLast() : This method returns the value of the last element that passes a test.
   Syntax : array.findLast(function(currentValue, index, arr),thisValue)

*/
console.log(([4,6,9,13].findLast(isOdd))); // Output : 13


/* JavaScript Array indexOf() :  This method returns the first index (position) of a specified value.
   Syntax : array.indexOf(element, start)

*/
  //Find the first index of "Apple":

  const fruitsindex = ["Banana", "Orange", "Apple", "Mango"];
  let index = fruitsindex.indexOf("Apple");
console.log(index); // Output : 2


//Start at index 3:

const fruitsindex1 = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let inde1x = fruitsindex1.indexOf("Apple", 3);



/* JavaScript Array.isArray() : This method returns true if an object is an array, otherwise false.
   Syntax : Array.isArray(obj)

*/


// Check if an object is an array:

const fruitsarr = ["Banana", "Orange", "Apple", "Mango"];
let resultarr = Array.isArray(fruitsarr);
console.log(resultarr); // Output : true


/* JavaScript Array join() : This method returns an array as a string.
   Syntax : array.join(separator)
*/

const fruitsarr1 = ["Banana", "Orange", "Apple", "Mango"];
let textarr = fruitsarr1.join(" and ");
console.log(textarr); // Output : Banana and Orange and Apple and Mango


/* JavaScript Array length : This property sets or returns the number of elements in an array.
   Syntax : array.length
*/

let length = fruitsarr1.length;
console.log(length); // Output : 4


/* JavaScript Array pop() : This method removes (pops) the last element of an array. The pop() method changes the original array.
   It reduces the array’s length by one and returns the removed element.
   Syntax : array.pop();

*/

//let fruitafterpop = fruitsarr1.pop();
console.log(fruitsarr1.pop()); // Output : Mango


/* JavaScript Array push() : It adds one or more elements to the end of an array and returns the new length of the array. It      modifies the original array, increasing its length by the number of elements added.

  Syntax : array.push(item1, item2, ..., itemX)

*/

let arrbeforepush = ['GFG', 'gfg', 'g4g'];
let arrafterpush = arrbeforepush.push('abcd','test');
console.log(arrbeforepush); // Output : [ 'GFG', 'gfg', 'g4g', 'abcd', 'test' ]


/* JavaScript Array shift() : This method in JavaScript is used to remove the first element of an array.This method is particularly useful for scenarios where elements need to be processed in the order they were added, such as in queue-like structures(FIFO).
 
  Syntax : array.shift()
*/

let arrbeforeshift = ['CAT', 'DOG', 'FISH','PARROT'];
let arraftershift = arrbeforeshift.shift();
console.log(arraftershift); // Output : CAT
console.log(arrbeforeshift); // Output : [ 'DOG', 'FISH', 'PARROT' ]


/* JavaScript Array slice() : This method returns selected elements in an array, as a new array.t selects from a given start, up to a (not inclusive) given end. 

 Syntax : array.slice(startindex, endindex)

*/

 // Original Array
 let arrbeforeSlice = [23, 56, 87, 32, 75, 13];
  // Extracted array
  let new_arr = arrbeforeSlice.slice(2, 4);
console.log(new_arr); // Output : [ 87, 32 ]


/* JavaScript Array sort() : This method sorts the elements of an array.This method sorts the elements as strings in alphabetical and ascending order.

  Syntax : array.sort(compareFunction)

*/

let arrbeforesort = ["JS", "HTML", "CSS"];
console.log(arrbeforesort); // Output : [ 'JS', 'HTML', 'CSS' ]

//sorting the array
arrbeforesort.sort();
console.log(arrbeforesort); // Output :  [ 'CSS', 'HTML', 'JS' ]


/* JavaScript Array unshift() : This Method is used to add one or more elements to the beginning of the given array. 

  Syntax : array.unshift(item1, item2, ..., itemX)

*/

let arrbeforeunshift = ["JS", "HTML", "CSS"];
//let arrafterunshift = arrbeforeshift.unshift("c++");
//console.log(arrbeforeunshift);

let value = arrbeforeunshift.unshift("C++","PHP");
console.log(value); // Output : 4
console.log(arrbeforeunshift); // Output : [ 'C++', 'PHP', 'JS', 'HTML', 'CSS' ]


/* JavaScript Array includes() : This method returns true if an array contains a specified value.This method returns false if the value is not found.

  Syntax : array.includes(element, start)

*/

let A = [1, 2, 3, 4, 5];
let afterIncludes= A.includes(2)
console.log(afterIncludes); //  Output : true

/* JavaScript Array indexOf() : This method returns the first index (position) of a specified value.This method returns -1 if the value is not found.
*/


let name1= ['gfg', 'cse', 'geeks', 'portal'];
let nameafterindexof= name1.indexOf('cse'); // Output : 1
console.log(nameafterindexof);
console.log(name1.indexOf('abc')); // Output : -1













  
  
  

  
  
  



















