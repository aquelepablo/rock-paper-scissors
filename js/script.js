
/*
Object.keys(Choose)[1] > 'Paper'
Choose['Paper'] > 1
*/

const Choose = {
    Rock: 0,
    Paper: 1,
    Scissors: 2
};

const maxOptions = Object.keys(Choose).length - 1;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Decides what will the computer choose from Rock, Paper or Scissors
function getComputerChoice(){

    let randomNumber = getRandomInt(0, maxOptions);
    
    return Object.keys(Choose)[randomNumber];
}

//Prompt user to choose from Rock, Paper or Scissors
function getUserChoice(){
    try {
        let strUserChoice = prompt(`Make your move: Rock - 0 | Paper - 1 | Scissors - 2`);
        let numUserChoice;
        let userChoice;

        console.log(`strUserChoice: ${strUserChoice}`);

        if (parseInt(strUserChoice) !== NaN) {
            numUserChoice = parseInt(strUserChoice);
            console.log(`numUserChoice: ${numUserChoice}`);

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
            console.log(`strUserChoice: ${strUserChoice}`)

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