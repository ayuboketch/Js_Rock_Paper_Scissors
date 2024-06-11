let humanChoice = document.getElementById("humanChoice");
let computerChoiceDisplay = document.getElementById("computerChoice");
let resultDisplay = document.getElementById("result");
let userScoreDisplay = document.getElementById("userScore");
let computerScoreDisplay = document.getElementById("computerScore");

let userScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let choice = humanChoice.value.trim().toLowerCase();
    if (choice === "") {
        alert("Please enter Rock, Paper, or Scissors");
        return null;
    }
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Invalid choice. Please enter Rock, Paper, or Scissors");
        return null;
    }
    document.getElementById("userChoice").innerHTML = `<p>Your Choice = ${choice}</p>`;
    return choice;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

function updateScores() {
    userScoreDisplay.textContent = `User Score: ${userScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

function playGame() {
    let humanChoiceValue = getHumanChoice();
    if (!humanChoiceValue) return;

    let computerChoiceValue = getComputerChoice();
    computerChoiceDisplay.innerHTML = `<p>Computer Choice = ${computerChoiceValue}</p>`;

    let result = playRound(humanChoiceValue, computerChoiceValue);
    resultDisplay.innerHTML = `<p>${result}</p>`;

    updateScores();

    if (userScore >= 5 || computerScore >= 5) {
        if (userScore > computerScore) {
            alert("You win the game!");
        } else {
            alert("Computer wins the game!");
        }
        userScore = 0;
        computerScore = 0;
        updateScores();
    }
}

document.getElementById("playButton").addEventListener("click", playGame);
