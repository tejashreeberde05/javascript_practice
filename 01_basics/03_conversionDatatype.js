let score = "33"

console.log(typeof score)
console.log(typeof(score));

let stringtoNumber = Number(score)
console.log(typeof stringtoNumber)
console.log(typeof(stringtoNumber));


let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn)

console.log(booleanisLoggedIn);

/*
1=> true ; 0=> false
"" => false
"string" => true
*/

//************** Operations **************/
let value = 9
let negtiveValue = -value

console.log(negtiveValue);

//Arithmetic Operators in JavaScript

console.log(2+2)
console.log(2-2);
console.log(2*2);
console.log(2*3);
console.log(2/2);
console.log(5%2);

let x = 5;

// Addition operator
console.log("Addition:=", x+3);


// Subtraction operator
console.log("Substraction:=", x-2);


// Multipliaction operator
console.log("Multiplication:=", x*2);


// Division opeartior
console.log("Division:=",x/2);


// Remainder or modulus operator
console.log("Remainder:=",x%2);


//Increment operator
/* If you use the ++ operator as a prefix like: ++var, the value of var is incremented by 1; then it returns the value.*/
console.log("Increment as prefix:=",++x); // Output : 6  


let z=9;
/*If you use the ++ operator as a postfix like: var++, the original value of var is returned first; then var is incremented by 1.*/
console.log("Incremnt as postfix:=",z++); // otput : 9


let var1 = 100;
var1++;
console.log("New Var1 as postfix:=",var1);



// Decrement operator
let y=3
/* If you use the -- operator as a prefix like: --var, the value of var is decremented by 1; then it returns the value.*/
console.log("Decrement as prefix:=", --y);

/*If you use the -- operator as a postfix like: var--, the original value of var is returned first; then var is decremented by 1.*/ 
let m=8
console.log("Decrement as postfix:=", m--);



// Exponentiation operator
console.log("Exponentiation operator:=", x**2);

let str1 = " Welcome To";
let str2 = " Javascript Tutorial";

console.log(str1 + str2);













