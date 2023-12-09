let playerSelection = prompt("Enter choice");
let playerSelectionLower = playerSelection.toLowerCase();
const compChoices = ["Rock", "Paper", "Scissor"]
let randNum = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
let compSelection = compChoices[randNum];
let compSelectionLower = compSelection.toLowerCase();
let playerSelNum;
console.log(compSelectionLower);
console.log(playerSelection);

playRound();

function playRound() {
    convertToNum();

    if(randNum === playerSelNum) {
        console.log("Tie");
    }

    if (playerSelectionLower === "rock" && compSelectionLower === "paper") {
        console.log("Computer won");
    } 

    else if (playerSelectionLower === "paper" && compSelectionLower === "scissor") {
        console.log("Computer won");
    } 

    else if (playerSelectionLower === "scissor" && compSelectionLower === "rock") {
        console.log("Computer won");
    } 
}

function convertToNum() {
    if (playerSelectionLower === "rock") {
        playerSelNum = 0;
    }

    if (playerSelectionLower === "paper") {
        playerSelNum = 1;
    }

    if (playerSelectionLower === "scissor") {
        playerSelNum = 2;
    }
}