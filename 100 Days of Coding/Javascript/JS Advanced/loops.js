//Verifies the trueness of both stringgs
const myName = "Davon"; 
if(myName === "Davon") {
    console.log("Hi!");
}
//confirms if a user is logged in
let isLoggedIn = true;
if(!isLoggedIn) {
    console.log("User is NOT logged in!");
}
//if user input is value(blank spaces in JS are considered valid!)
const enteredUserName = " ";
if(enteredUserName){
    console.log("Input is valid!");
}
//for loop interation 
for (let i = 0; i < 10; i++){
    console.log(i);
}
//for loop assigned to go through each value of an array
const users = ["Mickey", "Goofey", "Donald"];
for (const user of users) {
    console.log(user);
}
//for-in is designed to be userd on objects
const loggedInUser = {
    name: "Davon",
    age: 45, 
    isAdmin: true
};
for (const objectContent in loggedInUser){
    console.log(objectContent);
    //Dynamically access the object
    console.log(loggedInUser[objectContent]);
}

//while operator
let isFinished = false;
while(!isFinished){
    //confirm is a function like alert that allows user response of y/n
    isFinished = confirm("Do you want to quit?");
}
console.log("Done!");