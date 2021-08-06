let playerScore = 0;
let computerScore = 0;
let playerScore_span = document.getElementById("playerscore");
let computerScore_span = document.getElementById("computerscore");
let outcomeDiv = document.querySelector('.outcome');
let rockDiv = document.getElementById("r");
let paperDiv = document.getElementById('p');
let scissorsDiv = document.getElementById('s');
let restart = document.querySelector('.restart-btn');

/* This function generates a random choice among rock, paper and scissors for the computer */
function computerPlay() {
    let choices = ['Rock','Paper','Scissors'];
    return choices[Math.floor(Math.random() *choices.length)];
}

function disable() {
    rockDiv.disabled = true;
    paperDiv.disabled = true;
    scissorsDiv.disabled = true;
}

function win(playerSelection, computerSelection) {
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    outcomeDiv.innerHTML = playerSelection + " (You) beats " + computerSelection + ". You win!";
}

function draw(playerSelection, computerSelection) {
    outcomeDiv.innerHTML = "The computer also chose " + playerSelection + " It\s a draw!";
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    outcomeDiv.innerHTML = computerSelection + " beats " + playerSelection + ". You lose!";
}

function gameRound(playerSelection) {
    let computerSelection = computerPlay();

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection=== 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            win(playerSelection, computerSelection);
        }
        else if (playerSelection === computerSelection) {
            draw(playerSelection, computerSelection);
        }
        else {
            lose(playerSelection, computerSelection);
        }
}

function endgame() {
    if (playerScore === 5 && computerScore <= 5) {
        disable();
        outcomeDiv.innerHTML = "You defeated the computer.";
    }
    else if (computerScore === 5 && playerScore <= 5) {
        disable();
        outcomeDiv.innerHTML = "The computer defeated you.";
    }
    else {
        return;
    }
}

function main() {
    rockDiv.addEventListener('click', function() {
        gameRound('Rock');
        endgame(); 
    })

    paperDiv.addEventListener('click', function() {
        gameRound('Paper');
        endgame();
    })

    scissorsDiv.addEventListener('click', function() {
        gameRound('Scissors');
        endgame();
    })
    restart.addEventListener('click', function(){
        window.location.reload();
        return false;
    });

}
main();

