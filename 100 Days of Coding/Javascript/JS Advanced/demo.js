//These variables defined the elements being called by the function
let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

let maxAllowedChars = productNameInputElement.maxLength;
console.log(maxAllowedChars);

//event grants access to the target of the element
function updateRemainingCharacters(event){
    //This variable reaches out to the targets
    let enteredText = event.target.value;
    //Finds out how long the user input is
    let enteredTextLength = enteredText.length;
    //Calculates the remaining characters
    let remainingCharacters = maxAllowedChars - enteredTextLength;
    //Updates the remainder of the characters
    remainingCharsElement.textContent = remainingCharacters;

    if(remainingCharacters === 0) {
        //This targets the element itself from within JS code
        //remainingCharsElement.style.color = "red";

        //This incorporates CSS
        remainingCharsElement.classList.add("error");
        //This changes the background of the input field
        productNameInputElement.classList.add("error");
    } else if(remainingCharacters <= 10) {
        remainingCharsElement.classList.add("warning");
        productNameInputElement.classList.add("warning");
        remainingCharsElement.classList.remove("error");
        productNameInputElement.classList.remove("error");
    }
    else {
        remainingCharsElement.classList.remove("warning");
        productNameInputElement.classList.remove("warning");
    }
}
//Listens to the user input
productNameInputElement.addEventListener("input", updateRemainingCharacters);