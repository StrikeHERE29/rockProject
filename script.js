//create a function getComputerChoice 
// return a random value from rock, paper, scissors
// create a variable playerSelection
//create a function that plays a single round of Rock Paper Scissors.
// the function should take two parametres
// return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//return winner after 5 games

   function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const randomComputerChoice = Math.floor(Math.random() * choice.length);
    return choice[randomComputerChoice];
}
   
    function getPlayerChoice(){
        const playerChoice = prompt("Rock/Paper/Scissors: ").toUpperCase();
        return playerChoice;
    }




    function playRound(playerSelection, computerSelection) {
        // your code here!
        if(playerSelection===computerSelection){
            return "TIE";
        }else if(playerSelection === "ROCK" && computerSelection === "scissors"){
            return "You win! Rock beats Scissors";
        }else if(playerSelection === "ROCK" && computerSelection === "paper"){
            return "You lose! Paper beats Rock";
        }else if (playerSelection === "PAPER" && computerSelection === "rock"){
            return "You win! Paper beats Rock";
        }else if (playerSelection === "PAPER" && computerSelection === "scissors"){
            return "You lose! Scissors beats Paper";
        }else if(playerSelection === "SCISSORS" && computerSelection === "paper"){
            return "You win! Scissors beats Paper";
        }else if(playerSelection === "SCISSORS" && computerSelection === "rock"){
            return "You lose! Rock beats Scissors";
        }
    }



  
      const playerSelection = getPlayerChoice();
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));