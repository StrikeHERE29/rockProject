//create a function getComputerChoice 
// return a random value from rock, paper, scissors
// create a variable playerSelection
//create a function that plays a single round of Rock Paper Scissors.
// the function should take two parametres
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//

function playRound(playerSelection, computerSelection) {
   function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const randomComputerChoice = Math.floor(Math.random() * choice.length);
    return choice[randomComputerChoice];
}
   




   
}
   
  let playerSelection = prompt("Rock, Paper, Scissors: ").toLowerCase();

  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));