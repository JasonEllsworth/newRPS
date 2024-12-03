//general stats that will control our game loop.
let computerScore = 0;
let userScore = 0;
let rpsTie = 0;

//query selectors

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const compScore = document.querySelector("#compScore");
const displayResult = document.querySelector("#result");

//Append round results
function round(result) {
    let p = document.createElement("p");
    p.innerText = result;
    return p;
}

// event listeners for player button selection.

rockBtn.addEventListener('click', ()=> {
    playround("rock");
})

paperBtn.addEventListener('click', ()=> {
    playround("paper");
})

scissorsBtn.addEventListener('click', ()=>
{
    playround("scissors");
})


// computer choice function
function computer() {
    let compNumber = Math.floor(Math.random() * 3);
            let compChoice;
            switch (compNumber) {
                 case 0:
                    compChoice = "paper";
                    break;
                case 1:
                    compChoice = "scissors";
                    break;
                case 2:
                    compChoice = "paper";
                    break;
            }
            return compChoice;
}


//play round function.
function playround(value) {
    let buttonValue = value;
    let compValue = computer();

            if (buttonValue === compValue) {
                console.log("Its a  tie!");
                rpsTie = rpsTie + 1;
            } else if (buttonValue === "rock" && compValue === "paper" || buttonValue === "scissors"
                && compValue === "paper" || buttonValue=== "paper" && compValue === "rock") {
                console.log("You win!");
                userScore = userScore + 1;
            } else {
                compScore.innerText = computerScore;
                
                console.log("You lose!");
               computerScore = computerScore + 1;
            }
}

//score manipulation




//Deprecated
//while(playContinue === true) {
//
//         choices();
//
//         function choices() {
//             //First we randomly generate a choice for the computer on each
//             //iteration of the program.
//             let compNumber = Math.floor(Math.random() * 3);
//             let compChoice;
//             switch (compNumber) {
//                 case 0:
//                     compChoice = "paper";
//                     break;
//                 case 1:
//                     compChoice = "scissors";
//                     break;
//                 case 2:
//                     compChoice = "paper";
//                     break;
//             }
//
//             let userInput = prompt("rock paper scissors shoot!")
//             let userChoice = userInput.toLowerCase();
//             if (choiceArray.includes(userChoice)) {
//                 rPS(userChoice, compChoice);
//             } else {
//                 console.log("Sorry, you made an illegal entry. Please try again.");
//                 choices();
//             }
//         }
//
//         function rPS(uC, cC) {
//             console.log(uC);
//             console.log(cC);
//             if (uC === cC) {
//                 console.log("Its a  tie!");
//                 rpsTie = rpsTie + 1;
//             } else if (uC === "rock" && cC === "paper" || uC === "scissors"
//                 && cC === "paper" ||
//                 uC === "paper" && cC === "rock") {
//                 console.log("You win!");
//                 userScore = userScore + 1;
//             } else {
//                 console.log("You lose!");
//                computerScore = computerScore + 1;
//             }
//         }
//     let tryAgainInput = prompt("go again? yes/no");
//     let tryAgain = tryAgainInput.toLowerCase();
//     if (tryAgain === "no") {
//         console.log(userScore);
//         console.log(computerScore);
//         console.log(rpsTie);
//         playContinue = false;
//     }
// }
