function getComputerChoice() {
    let compChoice = Math.random() * 10;
    console.log(compChoice);
    if (compChoice <= 3 ) {
        console.log("rock!")
    } else if (compChoice <= 7) {
        console.log("paper!")
    } else {
        console.log("scissors!")
    }
}

getComputerChoice();