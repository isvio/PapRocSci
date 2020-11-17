document.addEventListener("DOMContentLoaded", function () {
    let start = document.getElementById("start");

    start.addEventListener("click", function () {
        document.getElementById("intro").style.display = "none";
    });

    let viorelResult = document.getElementById("viorel-result"),
        result = document.getElementById("other-result");

    let viorelScore = 0, otherScore = 0, coffee = 3;

    let newGame = document.getElementById("new");
    newGame.addEventListener("click", function () {
        gameOver.style.display = "none";
        game.style.display = "block";
        document.getElementById("viorel-score").innerHTML = '0';
        document.getElementById("other-score").innerHTML = '0';
        viorelScore = 0;
        otherScore = 0;
        coffee = 3;
        for (let coup = 1; coup <= 3; coup++) {
            document.getElementById(coup).style.display = "inline-block";
        }
    });

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

    let gameOver = document.getElementById("game-over");
    let finalGame = document.getElementById("finalGame");
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

    let otherScorePlace = document.getElementById("other-score"),
        viorelScorePlace = document.getElementById("viorel-score");

    gameOverDispplay = () => {
        finalGame.style.display = "none";
        document.getElementById("game-over").style.display = "block";
    }

    otherWin = () => {
        prepareResult();
        otherScore++;
        otherScorePlace.innerHTML = otherScore;
        if (otherScore === 3) {
            gameOverDispplay();
            let mf = document.getElementById("message-final");
            let mfd = document.getElementById("message-final-details");
            mf.style.color = "#5da87b";
            mf.innerHTML = 'You win the game!';
            mfd.style.color = "#5da87b";
            mfd.innerHTML = 'You are very lucky';
            document.getElementById("img-final").innerHTML = '😍';
        }
        viorelResult.style.color = "#a85d5d"; //red
        result.style.color = "#5da87b"; //green
        message.style.color = "#5da87b";
        message.innerHTML = 'You win!';
        console.log(viorelScorePlace + " " + otherScore);
    };


    drinkcCoffee = (coup) => {
        if (coup === 1) {
            gameOverDispplay();
            document.getElementById("score-final").innerHTML = otherScore;
        }
        document.getElementById(coup).style.display = "none";
    }

    viorelWin = () => {
        prepareResult();
        viorelScore++;
        drinkcCoffee(coffee--);
        viorelScorePlace.innerHTML = viorelScore;
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

    let rock = document.getElementById("rock-btn"),
        paper = document.getElementById("paper-btn"),
        scissor = document.getElementById("scissor-btn");

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
});




