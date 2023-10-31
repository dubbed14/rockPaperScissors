function getComputerChoice() {
    let compChoice = Math.random() * 10;
    console.log(compChoice);
    if (compChoice <= 3 ) {
        console.log("rock!")
        return "rock";
    } else if (compChoice <= 7) {
        console.log("paper!")
        return "paper";
    } else {
        console.log("scissors!")
        return "scissors";
    }
}

function oneRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("tie!");
        return "tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("computer wins!");
        return "computer wins!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("player wins!");
        return "player wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("player wins!");
        return "player wins!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("tie!");
        return "tie!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("computer wins!");
        return "computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("computer wins!");
        return "computer wins!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("player wins!");
        return "player wins!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("tie!");
        return "tie!";
    }
}

let playerSelection = prompt("rock, paper, scissors?");

let gameResult = oneRound(playerSelection, getComputerChoice());

//getComputerChoice();