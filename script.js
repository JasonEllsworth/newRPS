let compNumber = Math.floor(Math.random() * 3);
let compChoice;
switch (compNumber) {
    case 1:
        compChoice = "paper";
        break;
    case 2:
        compChoice = "scissors";
        break;
    case 3:
        compChoice = "paper";
        break;
}

const choiceArray = ["paper", "scissors", "rock"];
let userInput = prompt("rock paper scissors shoot!")
let userChoice = userInput.toLowerCase();
if (choiceArray.includes(userInput)) {
    rPS();
}else{
    console.log("Sorry, you made an illegal entry");
}

function rPS() {
    if (userChoice === compChoice) {
        console.log("Its a  tie!");
    } else if (userChoice === "rock" && compChoice === "paper" || userChoice === "scissors" && compChoice === "paper" ||
        userChoice === "paper" && compChoice === "rock") {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

