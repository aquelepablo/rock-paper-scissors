
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
function getComputerChoice(){

    let numRandomMin = 0
    let numRandomMax = 2;

    let randomNumber = getRandomInt(numRandomMin, numRandomMax);

    return randomNumber;
}

//Prompt user to choose from Rock, Paper or Scissors
function getUserChoice(){
    try {
        let strUserChoice = prompt(`Make your move: Rock - 0 | Paper - 1 | Scissors - 2`);
        let numUserChoice;
        let userChoice;


        //if user input is a number...
        if (!isNaN(parseInt(strUserChoice))) {
            numUserChoice = parseInt(strUserChoice);

            if (numUserChoice < 0 || numUserChoice > 2) {
                console.log(`You choose ${numUserChoice}. The options are: Rock - 0 | Paper - 1 | Scissors - 2 `)
                return -1;
            }

            switch (numUserChoice) {
                case Choose.Rock:
                    userChoice = Choose.Rock;
                    break;

                case Choose.Paper:
                    userChoice = Choose.Paper;
                    break;

                case Choose.Scissors:
                    userChoice = Choose.Scissors;
                    break;

                default:
                    userChoice = -1;
                    break;
            }

        } else if (strUserChoice.length > 1) {

            strUserChoice = strUserChoice.charAt(0).toUpperCase() + strUserChoice.substring(1).toLowerCase();

            switch (Choose[strUserChoice]) {
                case Choose.Rock:
                    userChoice = Choose.Rock;
                    break;

                case Choose.Paper:
                    userChoice = Choose.Paper;
                    break;

                case Choose.Scissors:
                    userChoice = Choose.Scissors;
                    break;

                default:
                    userChoice = -1;
                    break;
            }
        }
        return userChoice;
    } catch (error) {
        throw error;
    }
}

function getWinner(userChoice, computerChoice){
    
    let objResult = {
        userWin: false,
        result: ''
    }

    //0 BEATS 1
    if((userChoice == Choose.Paper && computerChoice == Choose.Rock) ||
        (userChoice == Choose.Rock && computerChoice == Choose.Scissors) ||
        (userChoice == Choose.Scissors && computerChoice == Choose.Paper)
    ){
        objResult.userWin = true;
        objResult.result = `You Win! ${Choose[userChoice]} beats ${Choose[computerChoice]}`

    }else if(userChoice == computerChoice){
        objResult.userWin = false;
        objResult.result = `This round is tied! ${Choose[userChoice]} equals ${Choose[computerChoice]}`

    }else{
        objResult.userWin = false;
        objResult.result = `You Lose! ${Choose[computerChoice]} beats ${Choose[userChoice]}`
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
function startRound(){
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
    let winner = getWinner(userChoice, computerChoice);

    console.log(winner.result);
}