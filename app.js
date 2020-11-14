
let start = document.getElementById("start");

start.addEventListener("click", function () {
    document.getElementById("intro").style.display = "none";
});

let viorelResult = document.getElementById("viorel-result");

playViorel = () => {
    let choice = Math.floor(Math.random() * 3);
    let result = '';
    if (choice === 0) {
        result = 'rock';
        viorelResult.innerHTML = 'Rock';
    } else if (choice === 1) {
        result = 'paper';
        viorelResult.innerHTML = 'Paper';
    } else {
        result = 'scissors';
        viorelResult.innerHTML = 'Scissors';
    }
    return result;
}

let rock = document.getElementById("rock-btn"),
    paper = document.getElementById("paper-btn"),
    scissor = document.getElementById("scissor-btn");

let finalGame = document.getElementById("finalGame");

let result = document.getElementById("other-result");
let game = document.getElementById("game");


document.getElementById("reset").addEventListener("click", function () {
    finalGame.style.display = "none";
    game.style.display = "block";
});

let message = document.getElementById("resultGame");

prepareResult = () => {
    game.style.display = "none";
    finalGame.style.display = "block"
}

otherWin = () => {
    prepareResult();
    viorelResult.style.color = "#a85d5d"; //red
    result.style.color = "#5da87b"; //green
    message.style.color = "#5da87b";
    message.innerHTML = 'You win!';

};

viorelWin = () => {
    prepareResult();
    message.style.color = "#a85d5d";
    result.style.color = "#a85d5d";
    viorelResult.style.color = "#5da87b";
    message.innerHTML = 'You lose!';
};

draw = () => {
    prepareResult();
    message.style.color = "#8c918f";
    viorelResult.style.color = "#8c918f";
    result.style.color = "#8c918f";
    message.innerHTML = 'It\'s a draw';
};

resultGame = (player, viorel) => {
    if (player === viorel) {
        draw();
    } else {
        if (player === 'rock') {
            if (viorel === 'paper') {
                viorelWin();
            } else {
                otherWin();
            }
        }
        if (player === 'paper') {
            if (viorel === 'scissors') {
                viorelWin();
            } else {
                otherWin();
            }
        }
        if (player === 'scissors') {
            if (viorel === 'rock') {
                viorelWin();
            } else {
                otherWin();
            }
        }
    }
}

rock.addEventListener("click", function () {
    resultGame('rock', playViorel());
    result.innerHTML = 'Rock';
});

paper.addEventListener("click", function () {
    resultGame('paper', playViorel());
    result.innerHTML = 'Paper';
});

scissor.addEventListener("click", function () {
    resultGame('scissors', playViorel());
    result.innerHTML = 'Scissors';
});



