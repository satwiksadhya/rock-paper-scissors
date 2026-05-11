let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = Math.random();
    if(computerChoice < 1/3){
        console.log("Computer move: Rock");
        return "Rock";
    }
    if(1/3<=computerChoice && computerChoice <2/3){
        console.log("Computer move: Paper");
        return "Paper";
    }
    else{
        console.log("Computer move: Scissors");
        return "Scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your move").toUpperCase();
    if(humanChoice === "ROCK"){
        console.log("Your move: Rock");
        return "Rock";
    }
    else if(humanChoice === "PAPER"){
        console.log("Your move: Paper");
        return "Paper";
    }
    else if(humanChoice === "SCISSORS" || humanChoice === "SCISSOR"){
        console.log("Your move: Scissors");
        return "Scissors";
    }
    else{
        console.log("Invalid move");
        return -1;
    }

}

function playRound(humanChoice, computerChoice){
    if((humanChoice === "Rock" && computerChoice === "Scissors")||(humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")){
        console.log("You Won!");
        console.log("Your Score: " + ++humanScore);
        if(computerScore > 0){
            console.log("Computer Score: " + --computerScore);
        }
        else{
            console.log("Computer Score: " + computerScore);
        }
    }
    else if(humanChoice === computerChoice){
        console.log("Tie!");
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
    else{
        console.log("You Lose!");
        console.log("Computer Score: " + ++computerScore);
        if(humanScore > 0){
            console.log("Your Score: " + --humanScore);
        }
        else{
            console.log("Your Score: " + humanScore);
        }
    }
}

playRound(getHumanChoice(),getComputerChoice());
