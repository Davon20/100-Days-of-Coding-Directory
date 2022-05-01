let age = 38;
let userName = 'Max';
let greeting = "Hi, My Name Is \"Clifford\"!"
/* let is the keyword that assigns variables in Javascript */
console.log(greeting)
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
console.log(totalAdultYears);

age = 48;
totalAdultYears = calculateAdultYears(age);
/* the variable values are being changed, which requires the function to be called again through the variable */
console.log(totalAdultYears);
/* variable is called again this time, intentionally producing a new value */

let person = { // Object, a grouping of variables and functions. 
    name: "Davon", // Property, a variable inside a function.
    greet(){ // Method, a function inside an object.
        console.log("Hello!");
    }
}

person.greet();