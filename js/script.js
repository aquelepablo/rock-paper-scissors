
/*
Object.keys(Choose)[1] > 'Paper'
Choose['Paper'] > 1
*/

const Choose = {
    Rock: 0,
    Paper: 1,
    Scissors: 2,
    [0]: 'Rock',
    [1]: 'Paper',
    [2]: 'Scissors'
};

function getRandomInt(min, max) {

    let inclusiveMax = 1;
    
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + inclusiveMax)) + min;
}

//Decides what will the computer choose from Rock, Paper or Scissors
function getComputerSelection(){

    let numRandomMin = 0
    let numRandomMax = 2;

    let numComputerSelection = getRandomInt(numRandomMin, numRandomMax);

    return numComputerSelection;
}

//Prompt user to choose from Rock, Paper or Scissors
function getPlayerSelection(){
    try {
        //let strUserChoice = prompt(`Make your move: Rock - 0 | Paper - 1 | Scissors - 2`);
        let strUserSelection = document.getElementById("playerChoice").value

        let numUserSelection;
        let userSelection;


        //if user input is a number...
        if (!isNaN(parseInt(strUserSelection))) {
            numUserSelection = parseInt(strUserSelection);

            if (numUserSelection < 0 || numUserSelection > 2) {
                console.log(`You choose ${numUserSelection}. The options are: Rock - 0 | Paper - 1 | Scissors - 2 `)
                return -1;
            }

            switch (numUserSelection) {
                case Choose.Rock:
                    userSelection = Choose.Rock;
                    break;

                case Choose.Paper:
                    userSelection = Choose.Paper;
                    break;

                case Choose.Scissors:
                    userSelection = Choose.Scissors;
                    break;

                default:
                    userSelection = -1;
                    break;
            }

        } else if (strUserSelection.length > 1) {

            strUserSelection = strUserSelection.charAt(0).toUpperCase() + strUserSelection.substring(1).toLowerCase();

            switch (Choose[strUserSelection]) {
                case Choose.Rock:
                    userSelection = Choose.Rock;
                    break;

                case Choose.Paper:
                    userSelection = Choose.Paper;
                    break;

                case Choose.Scissors:
                    userSelection = Choose.Scissors;
                    break;

                default:
                    userSelection = -1;
                    break;
            }
        }
        return userSelection;
    } catch (error) {
        throw error;
    }
}

function playRound(userChoice, computerChoice, round = 0){
    
    let objResult = {
        userWin: false,
        computerWin: false,
        tied: false,
        result: ''
    }

    //0 BEATS 1
    if((userChoice == Choose.Paper && computerChoice == Choose.Rock) ||
        (userChoice == Choose.Rock && computerChoice == Choose.Scissors) ||
        (userChoice == Choose.Scissors && computerChoice == Choose.Paper)
    ){
        objResult.userWin = true;
        objResult.computerWin = false;
        objResult.tied = false;
        objResult.result = `You Win! ${Choose[userChoice]} beats ${Choose[computerChoice]}`

    }else if(userChoice == computerChoice){
        objResult.userWin = false;
        objResult.computerWin = false;
        objResult.tied = true;
        objResult.result = `This round is tied! ${Choose[userChoice]} equals ${Choose[computerChoice]}`

    }else{
        objResult.userWin = false;
        objResult.computerWin = true;
        objResult.tied = false;
        objResult.result = `You Lose! ${Choose[computerChoice]} beats ${Choose[userChoice]}`
    }

    if(round > 0){
        document.getElementById("results").innerHTML += `<p>Round ${round} - ${objResult.result}</p>`;    
    }else{
        document.getElementById("results").innerHTML = `<p>${objResult.result}</p>`;    
    }
    
    return objResult;
    
    /*
    Choose.Paper BEATS Choose.Rock
    Choose.Rock BEATS Choose.Scissors
    Choose.Scissors BEATS Choose.Paper

    0 BEATS 1
    1 BEATS 2
    2 BEATS 0


    "You Lose! 
    "You Win! 
    "Paper beats Rock"
    "Rock beats Scissors"
    "Scissors beats Paper"
    */
}

//Plays a single match of Rock, Paper, Scissors
function game(numRounds = 5){
    let computerSelection = NaN;
    let playerSelection = NaN;
    let result = {
        totalRounds: 0,
        playerWins: 0,
        computerWins: 0,
        tiedRounds: 0,
        //strResult: '',
        roundsList: [],
    };

    for(i = 1; i <= numRounds; i++){
        
        computerSelection = getComputerSelection();
        playerSelection = getPlayerSelection();
        let round = playRound(playerSelection, computerSelection, i);
        //playRound.userWin
        with (result) {
            totalRounds++;
            if(round.userWin) playerWins++;
            if(round.computerWin) computerWins++;
            if(round.tied) tiedRounds++;
            roundsList.push({
                playerSelection: Choose[playerSelection],
                computerSelection: Choose[computerSelection],
                result: round.result,
            })
        }

        console.log(result)

    }

    /* computerSelection = getComputerSelection();
    playerSelection = getPlayerSelection();
    result = playRound(playerSelection, computerSelection); */
}

function startGame(){
    game(5);
}

window.onload = function () {
    document.getElementById("play").addEventListener("click", startGame);
}

/*
Changes:
    playRound: Added status for computerWin and tied rounds
*/