/*
JavaScript Strings : Strings are for storing text.Strings are written with quotes

In JavaScript, strings are surrounded by quotes:
Single quotes: 'Hello'
Double quotes: "Hello"
Backticks: `Hello`

In JavaScript, backticks (`) are used to create template literals. Template literals are string literals that can span multiple lines, include variable interpolation, and can contain special characters. To use backticks in JavaScript, you can simply enclose your string with them.



*/

// string enclosed within single quotes
let fruitName = 'Watermelon';
console.log(fruitName)

// string enclosed within double quotes
let countryName = "INDIA";
console.log(countryName);

// string enclosed within backticks
let resultPassFail = `fail`;
console.log(resultPassFail);

const name = "Alice";
const repoCount = 20;
const age  =  25;
const message = `My Name is ${name} and age is ${age}`;
console.log(message);

 
//console.log("Name  " + name  + "  " +  repoCount);
//console.log(`Hello`);
 

//JavaScript Strings as Object
const  myName = new String("abcdf");

console.log(myName);


/* in Debug colsole

const myName = new String("abcdf");
undefined
myName;
String {'abcdf'}
0: "a"
1: "b"
2: "c"
3: "d"
4: "f"
length: 5
[[Prototype]]: String
[[PrimitiveValue]]: "abcdf"
*/



/* **********************************  JavaScript String Methods *******************************************************/


/* JavaScript String Length : The length property returns the length of a string:*/

let text = "Welcome To Javascript";
let strlength = text.length;
//let length = `Length is  ${strlength} `;
//console.log(length);
console.log(`String Length is  ${strlength} `); // output : 21




/*JavaScript String charAt() : This method returns the character at a specified index (position) in a string:*/

const string = "Hello World!";
//finding the character at index 1
let charAtindex = string.charAt(1);
console.log(charAtindex); // output : e



/*JavaScript String charCodeAt() : This method returns the code of the character at a specified index in a string.The method returns a UTF-16 code (an integer between 0 and 65535).
*/
let CharcodeAtindex = string.charCodeAt(0);
console.log(CharcodeAtindex); // output : 72



/*JavaScript String at() */
let alphabet = string.at(4);
console.log(alphabet); //output : o




/*  JavaScript String concat()  : The concat() method concatenates given arguments to the given string. 
    Syntax : str.concat(str1, ..., strN);
*/

let firstString = "Welcome to ";

// joint arguments string
let joinedString = firstString.concat("JavaScript", " is", " fun.");
console.log(joinedString); // Output: Welcome JavaScript is fun.




/* JavaScript String replace() : This  method returns a new string with the specified string/regex replaced.
   Syntax : str.replace(pattern, replacement)
*/

const stringtoReplace = "ball bat";

// replace the first b with c
let result = stringtoReplace.replace('b', 'c');
console.log(result);  // Output: call bat



/* JavaScript String split() : This method divides a string into a list of substrings and returns them as an array.
   Syntax : str.split(separator, limit)
*/

const texttoSpilt = "Java is awesome. Java is fun.";
let textafterSpilt = texttoSpilt.split("."); // output : // [ 'Java is awesome', ' Java is fun', '' ]
console.log(textafterSpilt);

const text2 = "JavaScript ;  Python ;C;C++";
let newtext2 = text2.split(";",2);
console.log(newtext2); // output : [ 'JavaScript ', '  Python ' ]




/* JavaScript String substring()
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().

Syntax : str.substring(indexStart, indexEnd)
*/

const texttoSubstring = "JavaScript is fun.";

// get the substring starting from index 0 to 12
//let textafterSubstring = texttoSubstring.substring(0, 12); // output : Javascript i
//let textafterSubstring = texttoSubstring.substring(0); // output :  JavaScript is fun.

/* With substring(), it will treat a negative value as zero index.*/
//let textafterSubstring = texttoSubstring.substring(-5,4); // output :  Java 


/* A big difference with substring() is that if the 1st argument is greater than the 2nd argument, substring() will swap them.*/

let textafterSubstring = texttoSubstring.substring(15,0); // output :JavaScript is f
console.log(textafterSubstring);




/* JavaScript String slice() : The slice() method extracts and returns a section of a string.
Syntax : str.slice(beginIndex, endIndex)
*/

const messagetoSlice = "JavaScript is fun";
//let textafterSlice = messagetoSlice.slice(0,12); // output : Javascript i
//let textafterSlice = messagetoSlice.slice(0); // output : Javascript is fun



/* when you enter a negative number as an argument, the slice() interprets it as counting from the end of the string.*/
//let textafterSlice = messagetoSlice.slice(-5);  //  // output : s fun

/* slice() returns an empty string if the 1st argument is greater than the 2nd argument.*/
let textafterSlice = messagetoSlice.slice(12,0); // output : empty string
console.log(textafterSlice);




/* Javascript String toLowerCase() : This method returns the string converted to lowercase.
Syntax : str.toLowerCase()
*/
const texttoLowerCase = "JAVASCRIPT IS FUN";
let textafterLowerCase = texttoLowerCase.toLowerCase();
//`My Name is ${name} and age is ${age}`;
//let tes = `lower case : ${textafterLowerCase}`;
console.log(`lower case : ${textafterLowerCase}`);




/* Javascript String toUpperCase() : This method returns the string converted to uppercase.
Syntax : str.toUpperCase()
*/
 const texttoUpperCase = "Hello World !";
 let textafterUppercase = texttoUpperCase.toLocaleUpperCase();
 console.log(`UPPER CASE : ${textafterUppercase}`);


 /* JavaScript String trim() : This method removes whitespace from both ends of a string

 Syntax : str.trim()

*/
 
const texttoTrim = "   JAVASCRIPT IS FUN ";
let textafterTrim = texttoTrim.trim();
console.log(`Remove white space of a string : ${textafterTrim}`);


/* JavaScript String trimStart() : This  method works like trim(), but removes whitespace only from the start of a string.
Syntax : string.trimStart()

*/

let texttrimStart = "  Hello World!  ";
let textaftertrimstart = texttrimStart.trimStart();
console.log(`Text Length before trimStart ${texttrimStart.length}`); //output : Text Length before trimStart 16
console.log(`Text Length after trimStart ${textaftertrimstart.length}`); // output : Text Length after trimStart 14


/* JavaScript String trimEnd() : This method works like trim(), but removes whitespace only from the end of a string.
   Syntax : string.trimEnd()
*/

let texttrimEnd = " Hello World   ";
let textaftertrimEnd = texttrimEnd.trimEnd();
//let final =textaftertrimEnd.trimEnd();
console.log(textaftertrimEnd);
console.log(`Text Length before trimEnd ${texttrimEnd.length}`); //output : Text Length before trimEnd is 15
console.log(`Text Length after trimEnd ${textaftertrimEnd.length}`); // output : Text Length after trimEnd is 12


/* JavaScript String Padding : ECMAScript 2017 added two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.
*/

/* JavaScript String padStart() : This method pads a string from the start.It pads a string with another string (multiple times) until it reaches a given length.

   Syntax : string.padStart(targetLength, padString)

*/

let exString = "Hello";
let paddedNewString = exString.padStart(10,`!`); // Output : !!!!!Hello
//console.log(paddedNewString);

let texttoPad = "5";
let padded = texttoPad.padStart(4,"0"); // Pad a string with "0" until it reaches the length 4. Output : 0005
console.log(padded);


/* The padStart() method is a string method.To pad a number, convert the number to a string first.*/
let numb = 5;
let numtoText = numb.toString();
let paddedNumber = numtoText.padStart(4,"0"); // Output : 0005
console.log(paddedNumber);



/* JavaScript String padEnd() : This method pads a string from the end.
   It pads a string with another string (multiple times) until it reaches a given length.

   Syntax : string.padEnd(targetLength, padString)


*/

let stringbeforepadEnd = "Hello";
let stringafterpadEnd = stringbeforepadEnd.padEnd(10,`!`); // Output : Hello!!!!!
console.log(stringafterpadEnd);

/* This example uses the padEnd() method to pad numbers into another number. */
let exNumber = 1234;
let output = String(exNumber).padEnd(8, "0"); // output : 12340000

console.log(output);


/* JavaScript String repeat() : This method returns a string with a number of copies of a string.It returns a new string.
   Syntax : string.repeat(count)
*/

let textbeforeRepeat = "Hello World ";
let textafterRepeat = textbeforeRepeat.repeat(4); // output : Hello World Hello World Hello World Hello World
console.log(textafterRepeat);

/* JavaScript String replaceAll(): This method is used to replace all occurrences of a specified substring or pattern with a new substring.

  Syntax : const newString = originalString.replaceAll(regexp | substr , newSubstr | function)

*/

let stringbeforeReplaceall = "Geeks or Geeks";
let stringafterReplaceall = stringbeforeReplaceall.replaceAll("Gee","Poo"); // Output : Pooks or Pooks
console.log(stringafterReplaceall);


const regexptext = "coffee";
let stringold = "Lets, have coffee today!";
newString = stringold.replaceAll(regexptext, "tea"); // Output : Lets, have tea today!
console.log(newString);



/* JavaScript String split() :  string can be converted to an array with the split() method.
   Syntax : str.split(separator, limit) 
*/

const strbeforesplit = "JavaScript is fun";
let straftersplit = strbeforesplit.split(" ",3); // // Output: [ 'JavaScript', 'is', 'fun' ]
console.log(straftersplit);


const text1 = "Java is awesome. Java is fun.";
let pattern = ".";
let newText = text1.split(pattern); // Output : [ 'Java is awesome', ' Java is fun', '' ]
console.log(newText);






























