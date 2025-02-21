/* JavaScript Date Reference */
let myDate = new Date();
console.log(myDate); // Ouput : 2025-02-16T13:30:20.565Z
console.log(myDate.toString()); // Output : Sun Feb 16 2025 19:01:04 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sun Feb 16 2025
console.log(myDate.toLocaleString()); // Output : 16/2/2025, 7:02:27 pm
console.log(typeof myDate); // Output : Object


/* JavaScript Date getDate() : This method returns the day of the month (1 to 31) of a date.
   Syntax : Date.getDate()
*/

const d = new Date();
let day = d.getDate();
console.log(`The day is ${day}`); // Output : The Day is 16

//Get the day of a specific date:

const d1 = new Date("July 21, 1983 01:15:00");
let day1 = d1.getDate();
console.log(`The day is ${day1}`); // Output : The day is 21

/* JavaScript Date getFullYear() : It returns the full year of a date.
   Syntax : Date.getFullYear()
*/

const dateforFullyear = new Date();
let year = dateforFullyear.getFullYear();
console.log(`Year is ${year}`); //Output :  Year is 2025

/* JavaScript Date getHours() : It  returns the hour (0 to 23) of a date.
   Syntax : Date.getHours()
*/
const dateforHours = new Date();
let hour = dateforHours.getHours();
console.log(`Hours are ${hour}`) // Output : Hours are 19  - (7PM)


/* JavaScript Date getMilliseconds() : IT returns the milliseconds (0 to 999) of a date.
   Syntax : Date.getMilliseconds()
*/
const dateforMilliseconds= new Date();
let ms = dateforMilliseconds.getMilliseconds();
console.log(`Millisecobs ${ms}`); // Output : Millisecobs 411



/* JavaScript Date getMinutes() :  returns the minutes (0 to 59) of a date
   Syntax : Date.getMinutes()
*/

const dateforMinutes = new Date();

let minutes = dateforMinutes.getMinutes();
console.log(`Minutes are ${minutes}`); // Output : Minutes are 21 -  (7:21 PM)

/* JavaScript Date getMonth() :  returns the month (0 to 11) of a date.
   Syntax : Date.getMonth()
*/

const dateforMonth = new Date();
console.log(dateforMonth);

let month = dateforMonth.getMonth();
console.log(`Month is ${month}`); // Output Months is 1 Note: 0=January, 1=February etc.


/* JavaScript Date getSeconds() : returns the seconds (0 to 59) of a date.
   Syntax : Date.getSeconds()

 */

const dateforSeconds = new Date();
let seconds = dateforSeconds.getSeconds();
console.log(`Seconds are ${seconds}`); // Output : Seconds are 43



/* JavaScript Date getTime() : returns the number of milliseconds since January 1, 1970 00:00:00.
   Syntax : Date.getTime()
 */

const dateforgetTime = new Date();
let time = dateforgetTime.getTime();
console.log(`Time is  ${time}`); // Output : Time is  1740072113637

/* JavaScript Date.now() : returns the number of milliseconds since January 1, 1970.
   Syntax : Date.now()

*/

let datefornow = Date.now();
console.log(datefornow); // Output is : 1740072313020
















