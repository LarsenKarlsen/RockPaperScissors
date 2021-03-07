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
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

console.log(computerPlay())