/*JavaScript Comparison Operators */
/*
Operator	Description
==	        equal to
===     	equal value and equal type
!=	        not equal
!==     	not equal value or not equal type
>	        greater than
<	        less than
>=      	greater than or equal to
<=	        less than or equal to
?	        ternary operator
*/

// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2); //output : true

// not equal to operator
console.log("Not equal to: 2 != 2 is", 2 != 2); // output : false
console.log(3 != 5); //output : true

// strictly equal to operator
console.log("Strictly equal to: 2 === '2' is", 2 === '2'); //output : false

// strictly not equal to operator
console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2'); // output : true

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3); // output : false
console.log("Greater than: 3 > 2 is", 3 > 2); // output : true
console.log("Greater than: 3 > 5 is", 3 > 5); // output : false

// less than operator
console.log("Less than: 2 < 2 is", 2 < 2); //output : false
console.log("Less than: 12 < 2 is", 12 < 2); //output : false
console.log("Less than: 15 < 20 is", 15 < 20); //output : true


// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3); // output : true
console.log("Greater than or equal to: 13 >= 30 is", 13 >= 30); // output : false
console.log("Greater than or equal to: 50 >= 30 is", 50 >= 30); // output : true

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2); // output : true
console.log("Less than or equal to: 25 <= 200 is", 25 <= 200); // output : true
console.log("Less than or equal to: 25 <= 200 is", 125 <= 100); // output : false

