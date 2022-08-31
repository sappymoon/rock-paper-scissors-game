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
                break;
            }
            else {
                alert("Please enter a valid input.");
            }
    }

}

function playRound(playerSelection, computerSelection){

}

function game(){

}

console.log(computerSelection());
console.log(playerSelection());