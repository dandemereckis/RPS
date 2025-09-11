function getComputerChoice() {
  let randNum = Math.floor(Math.random() * 3);
  let computerChoice;
  if (randNum === 0) {
    computerChoice = "rock";
  } else if (randNum === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice;
  humanChoice = prompt(
    "Select rock, paper, or scissors...good luck!"
  ).toLowerCase();

  while (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissors"
  ) {
    humanChoice = prompt(
      "That's not a valid choice. Please select rock, paper, or scissors"
    ).toLowerCase();
  }
  return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("You both chose the same!  Try again.");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats rock.");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! Rock beats scissors.");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! Paper beats rock");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats paper.");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! Scissors beats paper.");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats scissors.");
  }
}

function playGame() {
  while (humanScore < 3 && computerScore < 3) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(
      `Player Score: ${humanScore}, Computer Score: ${computerScore}`
    );
  }
  if (humanScore === 3) {
    console.log("You won best of 5 :)");
  } else if (computerScore === 3) {
    console.log("You lose best of 5 :(");
  }
}

playGame();
