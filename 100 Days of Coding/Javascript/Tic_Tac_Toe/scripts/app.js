//Initializes Constants that will implemented by the other scripts
const gameData = [
    [0, 0, 0],
    [0, 0, 0,],
    [0, 0, 0]
]

let editedPlayer = 0;
let activePlayer = 0;

const players = [
    {name: "",
    symbol: "X"}, 
    {name: "",
    symbol: "O"}];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameAreaEleemnt = document.getElementById("active-game");
const activePlayerElement = document.getElementById("active-player-name");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const cancelConfigButnElement = document.getElementById("cancel-config-btn");
const startNewGameBtn = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig)
editPlayer2BtnElement.addEventListener("click", openPlayerConfig)

cancelConfigButnElement.addEventListener("click", closePlayerConfig)
backdropElement.addEventListener("click", closePlayerConfig)

formElement.addEventListener("submit", savePlayerConfig)
startNewGameBtn.addEventListener("click", startNewGame)

for (const gameFieldElement of gameFieldElements){
    gameAreaEleemnt.addEventListener("click", selectGameField);
}