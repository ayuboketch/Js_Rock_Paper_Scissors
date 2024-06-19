let humanChoiceInput = document.getElementById("humanChoiceInput");
let computerChoiceDisplay = document.getElementById("computerChoice");
let resultDisplay = document.getElementById("result");
let userScoreDisplay = document.getElementById("userScore");
let computerScoreDisplay = document.getElementById("computerScore");
let buttons = document.querySelectorAll(".button");
let playButton = document.getElementById("playButton");

let userScore = 0;
let computerScore = 0;

function getHumanInput() {
    let choice = humanChoiceInput.value.trim().toLowerCase();
    if (choice === "") {
        alert("Please enter Rock, Paper, or Scissors");
        return null;
    } else if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        alert("Invalid choice. Please enter Rock, Paper, or Scissors");
        return null;
    }
    return choice;
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        humanChoiceInput.value = button.innerText.toLowerCase();
        document.getElementById("result").innerHTML = `<p>Your Choice = ${button.innerText}</p>`;
    });
});

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
    let humanChoiceValue = getHumanInput();
    if (!humanChoiceValue) return;

    let computerChoiceValue = getComputerChoice();
    computerChoiceDisplay.innerHTML = `<p>Computer Choice = ${computerChoiceValue}</p>`;

    let result = playRound(humanChoiceValue, computerChoiceValue);
    resultDisplay.innerHTML = `<p>${result}</p>`;

    updateScores();
}

playButton.addEventListener("click", playGame);
