/* eslint-disable no-alert */
/* eslint-disable no-undef */
// eslint-disable-next-line max-len
const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [1, 3, 6], [2, 4, 7], [3, 5, 8], [0, 4, 8], [2, 4, 6]];
let xIndex = [];
let oIndex = [];
let gameStatus = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
function cellSign(index) {
    const currCell = document.getElementById(index);
    if (currCell.innerHTML === '') {
        if (currentPlayer === 'X') {
            currCell.innerHTML = currentPlayer;
            xIndex.push(index);
            currentPlayer = 'O';
            checkWinner();
        } else {
            currCell.innerHTML = currentPlayer;
            oIndex.push(index);
            currentPlayer = 'X';
            checkWinner();
        }
    }
}

function checkWinner() {
    if ((win.some((subaArray) => subaArray.every((element) => xIndex.includes(element))))) {
        alert('X wins');
        endGame();
    }
    if ((win.some((subaArray) => subaArray.every((element) => oIndex.includes(element))))) {
        alert('O wins');
        endGame();
    }
}

function endGame() {
    xIndex = [];
    oIndex = [];
    gameStatus = ['', '', '', '', '', '', '', '', ''];
    for (i = 0; i < 10; i += 1) {
        document.getElementById(i).innerHTML = '';
    }
}
