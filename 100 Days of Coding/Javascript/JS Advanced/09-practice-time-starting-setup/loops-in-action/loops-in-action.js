//First example: Sum Numbers

/*Access the element that will be used by the eventListener
#id then selector all the query to find only the first element of it's type*/
const calSumBtn = document.querySelector("#calculator button");

function calculateSum(){
    /* const userNum retrives user input from w/i function */
    const userNum = document.getElementById("user-number");
    /* const enteredNum stores the user input variable. userNum object has value property */
    const enteredNum = userNum.value;
    /* Defines variable of sum */
    let sumUp = 0;
    /* the for loop will run until the number of iterations is reached */
    for(let i = 0; i <= enteredNum; i++) {
        //sumUp is to be iterated as each iteration is a new number
        sumUp = sumUp + i;
    }
    //accesses the element to be displayed 
    const outputResult = document.getElementById("calculated-sum");
    //textContent displays the element
    outputResult.textContent = sumUp;
    //required as the CSS class has a none attritbute to the element
    outputResult.style.display = "block";
}

calSumBtn.addEventListener("enter", calculateSum);

//Highlight Links
const hiliBtn = document.querySelector("#highlight-links button");
function hiliLinks(){
    //stores all the elements of #highlight-links a into a single variable
    //these elements are treated as an array because there is more than a single element
    const anchorElements = document.querySelectorAll("#highlight-links a");
    /*the const is recreated for every iteration of the for loop while pointing at the 
    individual array elements*/
    for (const anchorElement of anchorElements) {
        //this highlight class is being called from the CSS file
        anchorElement.classList.add("highlight");
    }
}

hiliBtn.addEventListener("click", hiliLinks)

//Display User Data
//this object contains the data
const dummyUserData = {
    firstName: "Davon",
    lastName: "Albury",
    age: 27
};
//this const accesses the variable containing the button from user-data id
const displayUserDataButtonElement = document.querySelector("#user-data button");

function displayUserData() {
    //this const accesses the variable that will be ouptuted
    const outputResult = document.getElementById("output-user-data");
    //this element removes the user data in list items so that each time the button is clicked it clears the list
    outputResult.innerHTML = " ";
    //for-in loops are to be used whenever there is a task that needs to be completed for each property in an object
    for(const key in dummyUserData){
        //creates the data list from inside the function 
        const newUserDataListItemElement = document.createElement("li");
        //the next two lines handle the display of the user's info. dummyUserData[key allows each element in the list to be accessed dynamically]
        const outputText = key.toUpperCase() + ": " + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        //appends the items of the list to outputText
        outputResult.append(newUserDataListItemElement);
    }
}
displayUserDataButtonElement.addEventListener("click", displayUserData)

//Stats / Roll The Dice

const rollDiceElement = document.querySelector("#statistics button");
//rolls the dice
function rollDice(){
    //returns a number between 1 - 6 by using the * w/the Math bulit-in function
    return Math.floor(Math.random() * 6) + 1; //Math.floor rounds down
}
//controls the click of the button
function deriveDiceRolls() {
    //these const access the elements to be displayed
    const targetNumber = document.getElementById("user-target-number");
    const diceRollList = document.getElementById("dice-rolls");
    //this const retrieves the value from targetNumber
    //+targetNumber.value converts a string to a number automatcially in JS
    const enteredNum = targetNumber.value
    //this const clears the list afte the dice have been rolled
    diceRollList.innerHTML = " ";
    //variable measures whether the target has been rolled
    let hasRolledTargetNumber = false;
    //keeps track of the # of rolls 
    let numOfRolls = 0;

    while(!hasRolledTargetNumber){
        const rolledNum = rollDice();
        //this operation will increment the number of rolls by 1
        numOfRolls++;
        //a helper constant that lists the rolls information
        const newRollListItemElement = document.createElement("li");
        //the string of the lists that will be displayed
        const ouptutText = "Roll " + numOfRolls + ": " + rolledNum;
        //the outputting of the string above 
        newRollListItemElement.textContent = ouptutText;
        //appends the output
        diceRollList.append(newRollListItemElement);
        //this boolean is storing the results of the 2 comparisons into itself 
        hasRolledTargetNumber = rolledNum == enteredNum;
    }
    //this const is accessing the elements that will determine the stats displayed
    const outputTotalRollsElement = document.getElementById("output-total-rolls");
    const outputTargetNumberElement = document.getElementById("output-target-number");
    //displays the target number according to entered number by user
    outputTargetNumberElement.textContent = enteredNum;
    //displays the number of rolls before the target is reached
    outputTotalRollsElement.textContent = numOfRolls;
}

rollDiceElement.addEventListener("click", deriveDiceRolls)