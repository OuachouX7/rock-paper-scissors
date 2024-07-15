const opponentDisplay = document.getElementById("opponentDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerDisplay = document.getElementById("playerDisplay");
const playerscore = document.getElementById("playerscore");
const opponentscore = document.getElementById("opponentscore");
const RESET = document.getElementById('reset');

let Win = new Audio("Win.mp3");
let Lose = new Audio("Lose.mp3");
let playerscore2 = 0;
let opponentscore2 = 0;
const choices = ["rock", "paper", "scissors"];

function game(playerChoice){
    const INDEX = Math.floor(Math.random() * 3);
    const opponentChoice = choices[INDEX];
    let result = "";

    if(playerChoice === opponentChoice){
        result = "Draw!";
        resultDisplay.className = 'Draw';
    }

    else if(opponentChoice == "rock"){

        if (playerChoice == "paper") {
            result = "You Win!"
            resultDisplay.className = 'Win';
            
        }else{
            result = "You Lose!"
            resultDisplay.className = 'Lose';
        }
    }

    else if(opponentChoice == "paper"){

        if (playerChoice == "scissors") {
            result = "You Win!"
            resultDisplay.className = 'Win';

        }else{
            result = "You Lose!"
            resultDisplay.className = 'Lose';
        }
    }

    else if(opponentChoice == "scissors"){

        if (playerChoice == "rock") {
            result = "You Win!"
            resultDisplay.className = 'Win';
            
        }else{
            result = "You Lose!"
            resultDisplay.className = 'Lose';
        }
    }

    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    opponentDisplay.textContent = `OPPONENT : ${opponentChoice}`;
    playerDisplay.style.fontSize = '33px';
    opponentDisplay.style.fontSize = '33px';
    resultDisplay.textContent = result;

    if (resultDisplay.className == 'Win') {
        Win.play();
        resultDisplay.style.fontSize = '39px';
        resultDisplay.style.color = 'rgb(193, 119, 192)';
        playerscore2+=1;
        playerscore.textContent = `PLAYER SCORE : ${playerscore2}`;
        playerscore.style.fontSize = '32px';

    }else if (resultDisplay.className == 'Lose') {
        Lose.play();
        resultDisplay.style.fontSize = '39px';
        resultDisplay.style.color = 'rgb(79, 3, 79)';
        opponentscore2+=1;
        opponentscore.textContent = `OPPONENT SCORE : ${opponentscore2}`;
        opponentscore.style.fontSize = '32px';

    }else if (resultDisplay.className == 'Draw') {
        resultDisplay.style.fontSize = '39px';
        resultDisplay.style.color = 'rgb(24, 0, 24)';
    }
}

RESET.onclick = function() {
    playerscore2 = 0;
    opponentscore2 = 0;
    playerscore.textContent = `PLAYER SCORE : ${playerscore2}`;
    opponentscore.textContent = `OPPONENT SCORE : ${opponentscore2}`;
    playerDisplay.textContent = `PLAYER : `;
    opponentDisplay.textContent = `OPPONENT : `;
    resultDisplay.textContent = "";
    playerDisplay.style.fontSize = '32px';
    opponentDisplay.style.fontSize = '32px';
}