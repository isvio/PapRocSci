document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("start").addEventListener("click", function () {
        document.getElementById("title").style.display = "none";
        document.getElementById("start").style.display = "none";
        document.getElementById("game").style.display = "block";
    });

   /*  let viorelResult = document.getElementById("viorel-result"),
        result = document.getElementById("other-result");

    let viorelScore = 0, otherScore = 0, coffee = 3;

    document.getElementById("new").addEventListener("click", function () {
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
        let result;
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

    /* ameOverDisplay = () => {
        finalGame.style.display = "none";
        document.getElementById("game-over").style.display = "block";
    } 

    let mf = document.getElementById("message-final");
    let mfd = document.getElementById("message-final-details");
    decideWinner = (viorel, player, coffee) => {
        if (coffee === 0) {
            if (viorel === 3 && otherScore < 3) {
                gameOverDisplay();
                mf.style.color = "#a85d5d";
                mf.innerHTML = 'Game Over';
                mfd.style.color = "#a85d5d";
                mfd.innerHTML = 'You lost the game :(';
                document.getElementById("img-final").innerHTML = '🤦‍♂️';
            }
        }
        if (player === 3) {
            gameOverDisplay();
            mf.style.color = "#5da87b";
            mf.innerHTML = 'You won';
            mfd.style.color = "#5da87b";
            mfd.innerHTML = 'You are very lucky';
            document.getElementById("img-final").innerHTML = '😍';
        }
    }

    otherWin = () => {
        prepareResult();
        otherScore++;
        otherScorePlace.innerHTML = otherScore;
        decideWinner(viorelScore, otherScore, coffee);
        viorelResult.style.color = "#a85d5d"; //red
        result.style.color = "#5da87b"; //green
        message.style.color = "#5da87b";
        message.innerHTML = 'You won!';
    };

    drinkCoffee = (coup) => {
        if (coup > 0) {
            document.getElementById(coup).style.display = "none";
            coffee--;
        }
    }

    viorelWin = () => {
        prepareResult();
        viorelScore++;
        drinkCoffee(coffee);
        decideWinner(viorelScore, otherScore, coffee);
        viorelScorePlace.innerHTML = viorelScore;
        message.style.color = "#a85d5d";
        result.style.color = "#a85d5d";
        viorelResult.style.color = "#5da87b";
        message.innerHTML = 'You lost!';
    };

    draw = () => {
      //  prepareResult();
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
      //  result.innerHTML = 'Rock';
    });

    paper.addEventListener("click", function () {
        resultGame('paper', playViorel());
      //  result.innerHTML = 'Paper';
    });

    scissor.addEventListener("click", function () {
        resultGame('scissors', playViorel());
     //   result.innerHTML = 'Scissors';
    }); */
});




