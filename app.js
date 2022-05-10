const choices = ['rock','paper','scissors']

//Grab user input
function playerChoice (){
   let input = prompt('Enter Rock, Paper, or Scissors')
   input = input.toLowerCase()
   return input
} 
// Get Computer input
 function computerChoice(){
  return choices[Math.floor(Math.random()* choices.length)]
 }

// 
function playRound(){

const computerSelection = computerChoice()
const playerSelection = playerChoice()


if (playerSelection === "rock") {
   if (computerSelection === "rock") {
       console.log( "Draw!")
   } else if (computerSelection === "paper") {
       console.log( "Computer wins!")
   } else {
       console.log( "Player wins!")
   }

} else if (playerSelection === "paper") {
   if (computerSelection === "rock") {
       console.log( "Player wins!")
   } else if (computerSelection === "paper") {
       console.log( "Draw!")
   } else {
       console.log( "Computer wins!")
   }

} else {
   if (computerSelection === "rock") {
       console.log( "Computer wins!")
   } else if (computerSelection === "paper") {
       console.log( "Player wins!")
   } else {
       console.log( "Draw!")
   }



}

console.log(`player chose ${playerSelection}`)
console.log(`Computer Chose ${computerSelection}`)

}// End PlayRound Function

//Call the playRound Function to start score
playRound(playerChoice,computerChoice)



