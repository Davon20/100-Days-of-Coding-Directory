//These variables defined the elements being called by the function
//const is a variable that cannot be overwritten
const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");

//Defines the variable that will serve as the dynamic number
let maxAllowedChars = productNameInputElement.maxLength;

//event grants access to the target of the element
function updateRemainingCharacters(event){
    //This variable reaches out to the targets
    let enteredText = event.target.value;
    
    //Finds out how long the user input is
    let enteredTextLength = enteredText.length;
    
    //Calculates the remaining characters dynamically rather than hardcoding the int 60
    let remainingCharacters = maxAllowedChars - enteredTextLength;

    //Updates the value of the remainingCharacters
    remainingCharsElement.textContent = remainingCharacters;
}
//Listens to the user input
productNameInputElement.addEventListener("input", updateRemainingCharacters);