const buttons = document.querySelectorAll('input')
let playerScore = 0
let computerScore = 0;
let computerSelection;
let playerHand = document.getElementById('player-hand')
let computerHand = document.getElementById('computer-hand')
let playerScoreTitle = document.getElementById('player-score-title')
let computerScoreTitle = document.getElementById('computer-score-title')
let winnerBox = document.getElementById('winnerBox')

//grabs computer hand
function computerChoice(){
    const choices = ['Rock','Paper','Scissors']
    return( choices[Math.floor(Math.random()* choices.length)].toLowerCase())
   }

function playRound(playerSelection){
    const computerSelection = computerChoice()
    //Draws Game if player selection and computer selection are the same
    if(computerSelection == playerSelection){
        alert('DRAW. Play Again')  
    }
    //Player hand control flow
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        playerScore = playerScore + 1;
        playerScoreTitle.textContent = `Player Score : ${playerScore}`
} 
//computer hand control flow
else if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
(computerSelection == 'scissors' && playerSelection == 'paper') ||
(computerSelection == 'paper' && playerSelection == 'rock')) {
    computerScore = computerScore + 1;
    computerScoreTitle.textContent = `Computer Score : ${computerScore}`
}

computerHand.textContent = computerSelection.toLowerCase()

// number of games up to 5 to declare a winner
if(playerScore >=5){
   winnerBox.textContent = 'Player Wins!'
} else if(computerScore >=5){
    winnerBox.textContent = 'Computer Wins!'
}
}//end playRound function

// on click buttons for player to choose a hand
buttons.forEach(button=>{
    button.addEventListener('click',function(e){
    playRound(button.value.toLowerCase())
    playerHand.textContent = button.value})
})
