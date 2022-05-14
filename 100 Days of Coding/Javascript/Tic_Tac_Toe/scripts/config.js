//Stores The Functionality of JS Code
function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;
    formElement.firstElementChild.classList.remove("error");
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event){
    /* This is being used to keep the browser from sending the info of the 
    user to a server that isn't currently present as all code is only being
    run between HTML, CSS, & JS */
    event.preventDefault();
    //Form Data object handles the browser traffic of storing user data to just the browser
    const formData = new FormData(event.target);
    //.get uses the string value of the username to save that value
    const enteredPlayerName = formData.get("playername").trim();

    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Only enter a valid name!";
        return;
    }
    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data");
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;
    //dynamically accesses the current player where a If-Else statement would be needed
    players[editedPlayer -1].name = enteredPlayerName;
    //manually closes after the submit/cancel buttons are clicked
    closePlayerConfig();
}