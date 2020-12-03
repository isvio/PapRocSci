document.addEventListener("DOMContentLoaded", function () {
    let viorelResult = document.getElementById("my-result"),
        result = document.getElementById("your-result"),
        myPoints = 2, yourPoints = 2, click = 1,
        gameOver = document.getElementById("game-over"),
        my = document.getElementsByClassName("my"),
        you = document.getElementsByClassName("your");
    document.getElementById("new").addEventListener("click", function () {
        gameOver.style.display = "none";
        game.style.display = "block";
        my[0].style.opacity = "1";
        you[0].style.opacity = "1";
        my[1].style.opacity = "1";
        you[1].style.opacity = "1";
        my[2].style.opacity = ".2";
        you[2].style.opacity = ".2";
        my[3].style.opacity = ".2";
        you[3].style.opacity = ".2";
        myPoints = 2;
        yourPoints = 2;
        click = 1;
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
    const prepare = () => {
        game.style.display = "none";
        gameOver.style.display = "block";
    }
    let mf = document.getElementById("message-final"),
        mfd = document.getElementById("message-final-details"),
        img = document.getElementById("img-final"),
        game = document.getElementById("game");
    decideWinner = (viorel, player) => {
        if (viorel === 4) {
            prepare();
            mf.style.color = "#a85d5d";
            mf.innerHTML = 'Game Over';
            mfd.style.color = "#a85d5d";
            img.style.color = "#a85d5d";
            mfd.innerHTML = 'You lost the game :(';
            img.innerHTML = '🤦‍♂️ (' + click + ')';
        }
        if (player === 4) {
            prepare();
            game.style.display = "none";
            gameOver.style.display = "block";
            mf.style.color = "#5da87b";
            mf.innerHTML = 'You won';
            mfd.style.color = "#5da87b";
            mfd.innerHTML = 'You are lucky';
            img.style.color = "#5da87b";
            img.innerHTML = '😍 (' + click + ')';
        }
    }
    const trans = (x, y, p1, p2) => {
        if (x === y) {
            if (p1 === 1 && p2 === 0) {
                my[2].style.opacity = "1";
                you[1].style.opacity = ".2";
            }
            if (p1 === 0 && p2 === 1) {
                my[1].style.opacity = ".2";
                you[2].style.opacity = "1";
            }
        } else if (x > y) {
            if (p1 === 0 && p2 === 1) {
                my[2].style.opacity = ".2";
                you[1].style.opacity = "1";
            }
        } else {
            if (p1 === 1 && p2 === 0) {
                my[1].style.opacity = "1";
                you[2].style.opacity = ".2";
            }
        }
    }
    viorelWin = () => {
        trans(myPoints, yourPoints, 1, 0);
        myPoints++;
        yourPoints--;
        decideWinner(myPoints, yourPoints);
        result.style.color = "#a85d5d";
        viorelResult.style.color = "#5da87b";
    };

    otherWin = () => {
        trans(myPoints, yourPoints, 0, 1);
        myPoints--;
        yourPoints++;
        decideWinner(myPoints, yourPoints);
        viorelResult.style.color = "#a85d5d";
        result.style.color = "#5da87b";
    };
    draw = () => {
        viorelResult.style.color = "#8c918f";
        result.style.color = "#8c918f";
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
    document.getElementById("rock").addEventListener("click", function () {
        resultGame('rock', playViorel());
        result.innerHTML = 'Rock';
        click++;
    });
    document.getElementById("paper").addEventListener("click", function () {
        resultGame('paper', playViorel());
        result.innerHTML = 'Paper';
        click++;
    });
    document.getElementById("scissor").addEventListener("click", function () {
        resultGame('scissors', playViorel());
        result.innerHTML = 'Scissors';
        click++;
    });
});