let computerScore = 0;
let playerScore = 0;

const playerSelection = prompt("Pick an item");
const computerSelection = getComputerChoice();

console.log(playRound(computerSelection, playerSelection));

function getComputerChoice(){
  const items = ["Rock", "Paper", "Scissors"]; 
  return items[Math.floor(Math.random() * items.length)];
}

function playRound(computerSelection, playerSelection) {
  console.log(`Computer: ${computerSelection}\nPlayer: ${playerSelection}\n`)

  if(computerSelection === playerSelection) {
    return tie();
  }
  else {
    if(
      computerSelection === "Rock" && playerSelection === "Scissors" ||
      computerSelection === "Paper" && playerSelection === "Rock" ||
      computerSelection === "Scissors" && playerSelection === "Paper"
    ) {
      return computerWins();
    }
    else {
      return playerWins();
    }
  }
}

function tie() {
  computerScore++;
  playerScore++;
  return "It's a tie!";
}

function playerWins() {
  playerScore++;
  return "Player wins!";
}

function computerWins() {
  computerScore++;
  return "Computer wins!";
}
