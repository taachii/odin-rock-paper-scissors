let computerScore = 0;
let playerScore = 0;

const items = ["ROCK", "PAPER", "SCISSORS"]; 
playGame(5);

function playGame(rounds) {
  for(let i = 0; i < rounds; i++) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(computerSelection, playerSelection));
    logCurrentScore();
  }
}

function getPlayerChoice() {
  while(true) {
    const choice = prompt("Choose your item").toUpperCase();
    if(items.includes(choice)) return choice
    else alert("Wrong item!");
  }
}

function getComputerChoice(){
  return items[Math.floor(Math.random() * items.length)];
}

function playRound(computerSelection, playerSelection) {
  console.log(`Computer: ${computerSelection}\nPlayer: ${playerSelection}\n`)

  if(computerSelection === playerSelection) {
    return tie();
  }
  else {
    if(
      computerSelection === "ROCK" && playerSelection === "SCISSORS" ||
      computerSelection === "PAPER" && playerSelection === "ROCK" ||
      computerSelection === "SCISSORS" && playerSelection === "PAPER"
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

function logCurrentScore() {
  console.log(
    `SCORE:

    COMPUTER: ${computerScore}
    PLAYER: ${playerScore}`
  );
}
