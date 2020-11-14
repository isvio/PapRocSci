
let start = document.getElementById("start");

start.addEventListener("click", function () {
    document.getElementById("intro").style.display = "none";
});

document.getElementById("intro").style.display = "none";
document.getElementById("game").style.display = "none";
let viorelResult = document.getElementById("viorel-choice");

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

resetGame = () => {
    rock.style.backgroundColor = "";
    rock.style.color = "";
    paper.style.backgroundColor = "";
    paper.style.color = "";
    scissor.style.backgroundColor = "";
    scissor.style.color = "";
    finalGame.style.display = "none";
    game.style.display = "block";
}

let message = document.getElementById("resultGame");

prepareResult = () => {
    game.style.display = "none";
    finalGame.style.display = "block"
}

otherWin = () => {
    prepareResult();
    message.innerHTML = 'your win';
};

viorelWin = () => {
    prepareResult();
    message.innerHTML = 'Viorel win';
};

draw = () => {
    prepareResult();
    message.innerHTML = 'it is draw';
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
    result.innerHTML = 'Rock';
    resultGame('rock', playViorel());
    rock.style.backgroundColor = "#a09ead";
    rock.style.color = "#fff";
});

paper.addEventListener("click", function () {
    result.innerHTML = 'Paper';
    resultGame('paper', playViorel());
    paper.style.backgroundColor = "#a09ead";
    paper.style.color = "#fff";
});

scissor.addEventListener("click", function () {
    result.innerHTML = 'Scissors';
    resultGame('scissors', playViorel());
    scissor.style.backgroundColor = "#a09ead";
    scissor.style.color = "#fff";
});


finalGame.style.display = "block";


