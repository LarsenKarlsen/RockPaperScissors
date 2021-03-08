//console.log("hello")

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

const playGame = (playerChoice) => {
    let playerScore = Number(document.querySelector("#humanScore").innerHTML);
    let computerScore = Number(document.querySelector("#aiScore").innerHTML);
    
    let playerSelection = playerChoice; // place for player selection function
    let computerSelection = computerPlay();
    let game = playRound(playerSelection, computerSelection);
    
    if (game['result'] === 'player'){
        playerScore++;
        document.querySelector("#humanScore").innerHTML = playerScore;
    } else if (game['result'] === 'computer'){
        computerScore++;
        document.querySelector("#aiScore").innerHTML = computerScore;
    }
    
    document.querySelector("#log").innerHTML = game['message']// console.log(game['message']);
}

const restartGame = ()=>{
    let playerScoreObj = document.querySelector("#humanScore");
    let aiScoreobj = document.querySelector("#aiScore");
    const refreshBtn = document.querySelector(".refreshBtn");
    const resultContainer = document.querySelector('.result');

    playerScoreObj.innerHTML = 0;
    aiScoreobj.innerHTML = 0;
    const buttons = document.querySelectorAll('.humanbtn')
    buttons.forEach((button)=>{button.disabled=false})
    refreshBtn.remove();
    resultContainer.textContent = ''    
}

const endGame = ()=>{
    const playerScoreObj = document.querySelector("#humanScore");
    const aiScoreobj = document.querySelector("#aiScore");
    const refreshBtn = document.createElement("button");
    const mainContainer = document.querySelector('.main');
    const resultContainer = document.querySelector('.result');

    refreshBtn.classList.add('refreshBtn');
    refreshBtn.textContent = 'Restart Game';
    refreshBtn.addEventListener('click', ()=>{
        restartGame();
    })
    //check if player or AI get 5 wins
    if (Number(playerScoreObj.innerHTML) === 5){
        console.log('player wins');
        document.querySelector("#log").innerHTML = "-";
        mainContainer.appendChild(refreshBtn)
        const buttons = document.querySelectorAll('.humanbtn')
        buttons.forEach((button)=>{button.disabled=true})
        resultContainer.textContent = 'Congratz ! Human player WIN!'
    } else if (Number(aiScoreobj.innerHTML) === 5){
        console.log('AI Wins')
        document.querySelector("#log").innerHTML = "-";
        mainContainer.appendChild(refreshBtn)
        const buttons = document.querySelectorAll('.humanbtn')
        buttons.forEach((button)=>{button.disabled=true})
        resultContainer.textContent = 'Oh sorry ! AI player WIN!'
    }
}

//add eventlistners to buttons;
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playGame("rock");
  });

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playGame("paper");
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playGame("scissors");
  });

//add endGame function to buttons
const buttons = document.querySelectorAll('.humanbtn')
buttons.forEach((button)=>{button.addEventListener('click',()=>{
    endGame();
})
})
//playGame();