const buttons = document.querySelectorAll('input')
let playerScore = 0
let computerScore = 0;

//grabs computer hand

function computerChoice(){
    const choices = ['rock','paper','scissors']

    return( choices[Math.floor(Math.random()* choices.length)])
   }



function playRound(playerSelection){
    const computerSelection = computerChoice()

    console.log('computer chose ' + computerSelection)

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        alert('player Wins')
} 

if ((computerSelection == 'rock' && playerSelection == 'scissors') ||
(computerSelection == 'scissors' && playerSelection == 'paper') ||
(computerSelection == 'paper' && playerSelection == 'rock')) {
    alert('Computer Wins')
} 

if(playerSelection == computerSelection){
    alert('Draw')
}



}//end playRound function



buttons.forEach(button=>{
    button.addEventListener('click',function(e){
    playRound(button.value.toLowerCase())

    console.log('Player Chose ' + button.value)
    })
})
// End playround function