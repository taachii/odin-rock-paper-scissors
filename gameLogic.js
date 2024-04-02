// Game Variables
let compScore = 0;
let playerScore = 0;
let playerSelection;
let compSelection;

// DOM elements
const playerScoreText = document.querySelector("#player-score");
const compScoreText = document.querySelector("#comp-score");
const playerInfo = document.querySelector("#player-info");
const compInfo = document.querySelector("#comp-info");
const winnerInfo = document.querySelector("#winner-info");
const buttons = document.querySelectorAll(".button");


buttons.forEach(button => {
  button.addEventListener("click", playRound)
});

function playRound(e) {
    playerSelection = e.target.id;
    playerInfo.innerHTML = "You picked: <span>" + playerSelection + "</span>";
    compSelection = getComputerChoice();
    compInfo.innerHTML = "Computer picked: <span>" + compSelection + "</span>";
    assessWinner();
    updateDisplayedScore();
}

function getComputerChoice(){
  const items = ["rock", "paper", "scissors"]; 
  return items[Math.floor(Math.random() * items.length)];
}

function assessWinner() {
 
  if(compSelection === playerSelection) {
    tie();
  }
  else {
    if(
      compSelection === "rock" && playerSelection === "scissors" ||
      compSelection === "paper" && playerSelection === "rock" ||
      compSelection === "scissors" && playerSelection === "paper"
    ) {
      computerWins();
    }
    else {
      playerWins();
    }
  }
}

function tie() {
  winnerInfo.textContent = "It's a tie!";
}

function playerWins() {
  playerScore++;
  winnerInfo.textContent = "You win!";
}

function computerWins() {
  compScore++;
  winnerInfo.textContent = "Computer wins!";
}

function updateDisplayedScore() {
  playerScoreText.textContent = playerScore;
  compScoreText.textContent = compScore;
}