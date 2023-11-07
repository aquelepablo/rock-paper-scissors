
const Choose = {
    Rock: 1,
    Paper: 2,
    Scissors: 3
};

const maxOptions = Object.keys(Choose).length;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Decides what will the computer choose from Rock, Paper or Scissors
function getComputerChoice(){

    let randomNumber = getRandomInt(1, maxOptions);
    
    return Object.keys(Choose)[randomNumber];
}