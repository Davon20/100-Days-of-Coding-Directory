let age = 38;
let userName = 'Max';
let greeting = "Hi, My Name Is \"Clifford\"!"
/* let is the keyword that assigns variables in Javascript */
alert(greeting)
let hobbies = ['Sports', 'Reading', 'Running']
/* hobbies is an array. */
let job = {
    title: 'Developer', 
    location: 'New York', 
    salary: 50000};
/* job is an object.  title & location are propeties assinged values. 
this gives the object different types of properties and values for the same object, like a database.*/

let totalAdultYears;
/* totalAdultYears is a variable */

function calculateAdultYears(userAge) {
    return age - 18;
}
/* function is returning the variable value while holding the equation */

totalAdultYears = calculateAdultYears(age);
/* the value of totalAdultYears is being set */
/* the function parameter is a variable specific to the function, this 
is used so that external variables aren't constantly being relied upon
when only a function variable is needed */
alert(totalAdultYears);
/* the variable is being called */

age = 48;
totalAdultYears = calculateAdultYears(age);
/* the variable values are being changed, which requires the function to be called again through the variable */
alert(totalAdultYears);
/* variable is called again this time, intentionally producing a new value */