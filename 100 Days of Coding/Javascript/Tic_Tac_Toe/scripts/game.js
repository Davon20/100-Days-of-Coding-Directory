function startNewGame() {
    if(players[0].name === "" || players[1].name === ""){
        alert("Please enter game names for both players before continuing!");
        return;//prevents the remaining code in the funtion from executing
    }
    activePlayerElement.textContent = players[activePlayer].name; 
    gameAreaEleemnt.style.display = "block";
}

function switchPlayer() {
    if (activePlayer === 0){
        activePlayer = 1;
    } else{
        activePlayer = 0;
    }
    activePlayerElement.textContent = players[activePlayer].name; 
}

function selectGameField(event){
    if(event.target.tagName !== "LI"){
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if(gameData[selectedColumn][selectedRow] > 0){
        alert("Please select an empty field!");
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled");


    gameData[selectedColumn][selectedRow] = activePlayer + 1;
    console.log(gameData);

    switchPlayer();
}