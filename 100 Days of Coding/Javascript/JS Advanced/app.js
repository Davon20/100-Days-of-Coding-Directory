//defines the variable to be changed
let paragraphElement = document.querySelector("p");
//implements the type of change
function changeP(event){
    paragraphElement.textContent = "Clicked!";
    console.log("Paragraph Clicked!");
    console.log(event);
}
//determines when the change is implemented
paragraphElement.addEventListener("click", changeP);

//defines the variable to be changed in some way
let inputElement = document.querySelector("input");
//this function generates the user input through the console
function retrieveUserInput(event){
    let enteredText = inputElement.value;
    console.log(enteredText);
    console.log(event);
}
//the event determines when to listen
inputElement.addEventListener("input", retrieveUserInput);