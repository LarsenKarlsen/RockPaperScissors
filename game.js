console.log("hello")

// randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
const computerPlay = () =>{
    const rolls = []; // rock[0], Paper[1], Scissors[2]
    for (i=0; i < 3; i++){
        rolls.push(Math.random())
    }
    // get index of max value in array
    let max_roll = rolls.indexOf(Math.max(...rolls));
    
    switch (max_roll){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const playRound = (playerSelection, computerSelection)=>{
    if (playerSelection === computerSelection) {
        return `Draw game ! You select ${playerSelection}, Computer select ${computerSelection}`;
    } else if ((playerSelection === 'scissors' && computerSelection === 'paper')
            || (playerSelection === 'paper' && computerSelection === 'rock')
            || (playerSelection === 'rock' && computerSelection === 'scissors')){
        return `You win! You select ${playerSelection}, Computer select ${computerSelection}`;
    } else {
        return `You lose! You select ${playerSelection}, Computer select ${computerSelection}`;
    }
}
console.log(computerPlay())