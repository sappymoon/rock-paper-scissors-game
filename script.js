function computerSelection(){
    let choices = ['rock', 'paper', 'scissors']
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

function playerSelection(){
    while(true){
        let playerSelection = prompt("Please enter rock, paper, or scissors: ")

        playerSelection = playerSelection.toLowerCase();

            if (['rock', 'paper', 'scissors'].indexOf(playerSelection) > -1){
                return playerSelection;
            }
            else {
                alert("Please enter a valid input.");
            }
    }

}

function playRound(playerSelection, computerSelection){
    let result = '';

    if (playerSelection == computerSelection){
        alert("Tie! The computer chose " + computerSelection + ".")
        result = 'tie';
        return result;
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper'){
        alert("You lose! The computer chose " + computerSelection + ".")
        result = 'loss';
        return result;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        alert("You win! The computer chose " + computerSelection + ".")
        result = 'win';
        return result;
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        alert("You lose! The computer chose " + computerSelection + ".")
        result = 'loss';
        return result;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock'){
        alert("You win! The computer chose " + computerSelection + ".")
        result = 'win';
        return result;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        alert("You lose! The computer chose " + computerSelection + ".")
        result = 'loss';
        return result;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        alert("You win! The computer chose " + computerSelection + ".")
        result = 'win';
        return result;
    }
    
    

}

function game(){

}

result = playRound('rock', 'scissors');
alert(result);