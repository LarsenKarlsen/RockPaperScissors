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
        return {'result': 'draw', 'message' :`Draw game ! You select ${playerSelection}, Computer select ${computerSelection}`};
    } else if ((playerSelection === 'scissors' && computerSelection === 'paper')
            || (playerSelection === 'paper' && computerSelection === 'rock')
            || (playerSelection === 'rock' && computerSelection === 'scissors')){
        return {'result':'player', 'message':`You win! You select ${playerSelection}, Computer select ${computerSelection}`};
    } else {
        return {'result':'computer', 'message':`You lose! You select ${playerSelection}, Computer select ${computerSelection}`};
    }
}

const playerChoice = () => {
    let player = prompt('Pick Rock, Paper or Scissors');
    player = player.toLowerCase()
    if (player === 'rock'|| player === 'paper'
        || player === 'scissors') {
            return player;
        } else {
            alert ('ALLOWED only rock, papper, scissors input')
        }
}

const playGame = () => {
    const rounds = 6; // how much games;
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i=1;i<rounds;i++){
        let playerSelection = playerChoice(); // place for player selection function
        let computerSelection = computerPlay();
        let game = playRound(playerSelection, computerSelection);
        
        if (game['result'] === 'player'){
            playerScore++;
        } else if (game['result'] === 'computer'){
            computerScore++;
        }
        
        console.log(`Results of round:${i}`)
        console.log(game['message']);
        console.log(`After ${i} round\tPlayer score: ${playerScore}\tComputer score: ${computerScore}`);
    }
    
    if (playerScore > computerScore){
        console.log(`Congratulations You win !`);
    } else if (playerScore < computerScore){
        console.log(`Sorry but You lose, try next time`);
    } else {
        console.log('Draw game')
    }
}

//playGame();