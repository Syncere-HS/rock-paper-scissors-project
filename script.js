let max = 4
let number = Math.floor(Math.random() * max);
let computerChoice
let playerChoice = prompt("Choose 'Rock', 'Paper', or 'Scissors' ")




// if random number = 0 roll again
 while (number === 0){
       number =  Math.floor(Math.random() * max);
    }


// random number determines the selection choce
    if(number === 1){
        computerChoice = "Rock"
    }
    if(number === 2){
        computerChoice = "Paper"
    }
    if(number === 3){
        computerChoice = "Scissors"
    }

    

// Take the players choice and computers choice and checks who won

    function game(){
        let playerSelection = playerChoice
        let computerSelection = computerChoice

        if(playerSelection === "Paper" && computerSelection === "Paper"){
            return "Tie."
        }
        else if(playerSelection === "Paper" && computerSelection === "Rock"){
            return "You Win!"
        }
        else if(playerSelection === "Paper" && computerSelection === "Scissors"){
            return "You Lose."
        }

        
        if(playerSelection === "Scissors" && computerSelection === "Scissors"){
            return "Tie."
        }
        else if(playerSelection === "Scissors" && computerSelection === "Paper"){
            return "You Win!"
        }
        else if(playerSelection === "Scissors" && computerSelection === "Rock"){
            return "You Lose."
        }

        if(playerSelection === "Rock" && computerSelection === "Rock"){
            return "Tie."
        }
        else if(playerSelection === "Rock" && computerSelection === "Scissors"){
            return "You Win!"
        }
        else if(playerSelection === "Rock" && computerSelection === "Paper"){
            return "You Lose."
        }



        

    }
    
console.log(`You chose ${playerChoice}`)
console.log(`CPU chose ${computerChoice}`)
console.log(game())

