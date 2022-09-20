let playerScore = 0;
let computerScore = 0;

function computerSelection(){
    let choices = ['rock', 'paper', 'scissors']
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function playRound(playerChoice){
    let result = '';
    let computerChoice = computerSelection();

        const pChoice = document.getElementById('player-choice');
        pChoice.textContent = 'You chose ' + playerChoice;
        const cChoice = document.getElementById('computer-choice');
        cChoice.textContent = 'The computer chose ' + computerChoice;

        if (playerChoice == computerChoice){
            result = 'tie';
            return result;
        }
        else if (playerChoice == 'rock' && computerChoice == 'paper'){
            result = 'loss';
            return result;
        }
        else if (playerChoice == 'rock' && computerChoice == 'scissors'){
            result = 'win';
            return result;
        }
        else if (playerChoice == 'paper' && computerChoice == 'scissors'){
            result = 'loss';
            return result;
        }
        else if (playerChoice == 'paper' && computerChoice == 'rock'){
            result = 'win';
            return result;
        }
        else if (playerChoice == 'scissors' && computerChoice == 'rock'){
            result = 'loss';
            return result;
        }
        else if (playerChoice == 'scissors' && computerChoice == 'paper'){
            result = 'win';
            return result;
        }

}

//UI stuff

function startGame(){
    const choices = document.querySelectorAll('button');
    choices.forEach((button) =>
    button.addEventListener('click', () => {
        let reset = trackScore(playRound(button.id));

        if(reset == 'player'){
            let gameWinner = document.getElementById('game-result');
            gameWinner.textContent = 'You won the game!';
        }
        if(reset == 'computer'){
            let gameWinner = document.getElementById('game-result');
            gameWinner.textContent = 'You lost the game!';
        }
    }));
}

function trackScore(result){
    if(result === 'win'){
        playerScore++;
        let winner = document.getElementById('winner');
        winner.textContent = 'You won the round!';
    }
    else if(result === 'loss'){
        computerScore++;
        let winner = document.getElementById('winner');
        winner.textContent = 'You lost the round!';
    }
    else if(result == 'tie'){
        let winner = document.getElementById('winner');
        winner.textContent = 'You tied!';
    }

    let pScore = document.getElementById('player-score');
    pScore.textContent = 'Player Score ' + playerScore;
    let cScore = document.getElementById('computer-score');
    cScore.textContent = 'Computer Score ' + computerScore;

    if(playerScore == 5){
        return 'player';
    }
    if(computerScore == 5){
        return 'computer';
    }
}

startGame();
