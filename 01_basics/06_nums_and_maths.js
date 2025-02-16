const Score =500;
console.log(Score); // Output : 500

const balance = new Number(500);
console.log(balance); // Output : [Number: 500]
console.log(balance.toString()); // Output : 500 number converted as string
console.log(typeof(balance.toString())); // Output : String
console.log(balance.toString().length); //Output : 3
console.log(balance.toFixed(3)); //Output : 500.000


/* JavaScript Number constructor : The constructor property returns the function that created the Number prototype.
   Syntax : number.constructor
   Output :function Number() { [native code] }
*/
let num = 134.5;
let text = num.constructor;
console.log(text); // Output : [Function: Number]


/* JavaScript Number EPSILON : Number.EPSILON returns the difference between the smallest floating point number greater than 1 and 1.

  Syntax: Number.EPSILON
*/

let x = 100;
let numafterEpsilon= x.EPSILON;
console.log(numafterEpsilon); // Output : undefined



/* JavaScript Number isFinite() Method : This method is used to check whether the passed value is a finite number or not.
   Syntax :Number.isFinite(value)
*/

console.log(Number.isFinite(123)); // Output : true
console.log(Number.isFinite("123")); // Output : false


/* JavaScript Number isInteger() : This method returns true if a value is an integer of the datatype Number.Otherwise it returns false.
   Syntax : Number.isInteger(value);
 */

   console.log(Number.isInteger(123)); // Output : true
   console.log(Number.isInteger(-123)); // Output : true
   console.log(Number.isInteger('123')); // Output : false
   console.log(Number.isInteger(4-2)); // Output : true
   console.log(Number.isInteger(5/2)); // Output : false
   console.log(Number.isInteger(0)); // Output : truoe
   console.log(Number.isInteger(0/0)); //Output :false
   console.log(Number.isInteger(0.5)); //Output : false
   console.log(Number.isInteger(false)); // Output : false
   console.log(Number.isInteger(NaN)); // Output : false
   console.log(Number.isInteger(Infinity)); // Output : false
   console.log(Number.isInteger(-Infinity));// Output : false



   /* JavaScript Number isNaN() : This method returns true if a value is NaN. This method checks whether the passed value is NaN and of type Number.
     
     Syntax : Number.isNaN(value)

   */

      console.log(Number.isNaN(123)); // Output : false
      console.log(Number.isNaN(-1.23)); // Output : false
      console.log(Number.isNaN('123')); // Output : false
      console.log(Number.isNaN(0/0)); // Output : true
      console.log(Number.isNaN('Hello')); // Output : false
      console.log(Number.isNaN('2005/12/12')); //  Output : false


/* JavaScript Number MAX_VALUE : This method is used to represent maximum and minimum numeric values in javascript. 
    Syntax : Number.MAX_VALUE 

*/

let maxVal = Number.MAX_VALUE;
console.log(maxVal); // Output : 1.7976931348623157e+308
let x1=100;
console.log(x1.MAX_VALUE); // Output : undefined


/* JavaScript Number MIN_VALUE : It returns the smallest number possible in JavaScript.
   Syntax : Number.MIN_VALUE

*/
 let minVal = Number.MIN_VALUE;
 console.log(minVal); // Output : 5e-324

 let y1 = 100;
 console.log(y1.MIN_VALUE); // Output : undefined


 /* JavaScript Number.parseFloat() : This method parses a value as a string and returns the first number.
    Syntax : Number.parseFloat(value)

 */

    console.log(Number.parseFloat(10)); // Output : 10
    console.log(Number.parseFloat("10")); // Output : 10
    console.log(Number.parseFloat("10.33")); // Output : 10.33
    console.log(Number.parseFloat("40 years")); // Output : 40
    console.log(Number.parseFloat("40H")); // Output : 40
    console.log(Number.parseFloat("H40")); // Output : Nan

 /* JavaScript Number.parseInt() : This method parses a value as a string and returns the first integer.
       Syntax : Number.parseInt(string, radix)

*/
       console.log(Number.parseInt(10)); // Output : 10
       console.log(Number.parseInt("10")); // Output : 10
       console.log(Number.parseInt("10.33")); // Output : 10
       console.log(Number.parseInt("40 years")); // Output : 40
       console.log(Number.parseInt("40H")); // Output : 40
       console.log(Number.parseInt("H40")); // Output : Nan

/* JavaScript Number toFixed() : This method converts a number to a string. The toFixed() method rounds the string to a specified number of decimals.
   Syntax : number.toFixed( value );
*/

let numbeforFixed = 5.56789;
let numberafterFixed = num.toFixed(10);
console.log(numberafterFixed);



/* JavaScript Number toPrecision() :This method formats a number to a specified length.
   Syntax : number.toPrecision(x)
*/

let numbeforePrecision = 13.3714;
console.log(numbeforePrecision.toPrecision(2));
console.log(numbeforePrecision.toPrecision(3));
console.log(numbeforePrecision.toPrecision(4));




    
    
    
    
    
    
 
 



      
      
      
      
      

      
   
   
   
   
   
   
   
   

   
   
   
   
   










