let playerScore = 0;
let computerScore = 0;

/* This function generates a random choice among rock, paper and scissors for the computer */
function computerPlay() {
    let choices = ['rock','paper','scissors'];
    return choices[Math.floor(Math.random() *choices.length)];
}
/* This function handles 1 round of the game */
function gameRound(playerSelection) {
    let computerSelection = computerPlay();

    if (playerSelection === "rock"){
        if (computerSelection === 'rock') {
            return "Opponent chose rock, its a tie!";
        }
        else if (computerSelection === 'paper') {
            return "Opponent chose paper, you lose!";
        }
        return "Opponent chose scissors, you win!";
    }
    if (playerSelection === "paper"){
        if (computerSelection === 'paper') {
            return "Opponent chose paper, its a tie!";
        }
        else if (computerSelection === 'scissors') {
            return "Opponent chose scissors, you lose!";
        }
        return "Opponent chose rock, you win!";
    }
    if (playerSelection === "scissors"){
        if (computerSelection === 'scissors') {
            return "Opponent chose scissors, its a tie!";
        }
        else if (computerSelection === 'rock') {
            return "Opponent chose rock, you lose!";
        }
        return "Opponent chose paper, you win!";
    }
}
/* This function allows to play a game of first to win 5 rounds */
function game(playerSelection) {
    let result = gameRound(playerSelection);

    if (playerScore >= 4 && computerScore < 4) {
        return "Game over. You win!";
    }
    else if (playerScore < 4 && computerScore >= 4) {
        return "Game over. You lose!";
    }
    else {
        if (result.search("you win!") > -1) {
            playerScore++;
            return "your player score is: " + playerScore;
        }
        else if (result.search("you lose!") > -1) {
            computerScore++;
            return "computer score is: " + computerScore;
        }
        else {
            return "tie!";
        }
    }
}

