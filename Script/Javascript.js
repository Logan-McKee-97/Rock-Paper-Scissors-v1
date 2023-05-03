
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');
let result = document.querySelector('.result-text');
let choice = document.querySelector('.choice-text');
let restartButton = document.querySelector('.restart');

let playerScore = 0;
let compScore = 0;

rockButton.addEventListener('click', () => {
    let playerSelection = "rock";
    if (playerScore < 5 && compScore < 5) {
        game(playerSelection);
    } else {
        return;
    }
});

paperButton.addEventListener('click', () => {
    let playerSelection = "paper";
    if (playerScore < 5 && compScore < 5) {
        game(playerSelection);
    } else {
        return;
    }
})

scissorsButton.addEventListener('click', () => {
    let playerSelection = "scissors";
    if (playerScore < 5 && compScore < 5) {
        game(playerSelection);
    } else {
        return;
    }
});

restartButton.addEventListener('click', restartGame);

function getComputerChoice() {
    let randomNum = Math.random(); //Generate random number between 0 and 1 and assign it to randomNum variable.
    let computerDecision = undefined;

    if (randomNum < 0.33) { //Assign rock, paper or scissors as a string to the computerDecision variable based upon the randomNum.
        computerDecision = "rock";
    } else if (randomNum > 0.33 && randomNum < 0.66) {
        computerDecision = "paper";
    } else {
        computerDecision = "scissors";
    }

    return computerDecision; //Return rock, paper or scissors!
}

function playRound(computerSelection, playerSelection) {

    if (playerSelection === computerSelection) {
        choice.textContent = `It's a draw! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        choice.style.color = "grey";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {//Winning results first
        playerScore++;
        choice.textContent = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        choice.style.color = "green";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        choice.textContent = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        choice.style.color = "green";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        choice.textContent = `You win! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        choice.style.color = "green";
    } else if (playerSelection === "rock" && computerSelection === "paper") { //Losing results
        compScore++;
        choice.textContent = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        choice.style.color = "red";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++;
        choice.textContent = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        choice.style.color = "red";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        choice.textContent = `You lose! You chose ${playerSelection} and the computer chose ${computerSelection}.`;
        choice.style.color = "red";
    }
}


function game(playerSelection) {


    let computerSelection = getComputerChoice(playerSelection);
    playRound(computerSelection, playerSelection);
    result.textContent = `Player Score: ${playerScore} Computer Score: ${compScore}`;

    if (playerScore == 5) {
        choice.textContent = `Game Over - You win!`;
        choice.style.color = "green";
    } else if (compScore == 5) {
        choice.textContent = `Game Over - You Lose!`;
        choice.style.color = "red";
    }
}

function restartGame() {
    playerScore = 0;
    compScore = 0;
    choice.textContent = "Game on!";
    choice.style.color = "black";
    result.textContent = "";
}