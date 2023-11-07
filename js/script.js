
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