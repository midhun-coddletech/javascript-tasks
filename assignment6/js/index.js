/* eslint-disable no-alert */
/* eslint-disable no-undef */
const cells = document.querySelectorAll('.cell');
const cellContainer = document.getElementById('cell-container');
const resultDiv = document.getElementById('result-div');
const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', restartGame);
cells.forEach((cell) => cell.addEventListener('click', markValue));
resultDiv.style.display = 'none';

let markSymbol = 'X';
let startState = ['', '', '', '', '', '', '', '', ''];
let xIndex = [];
let oIndex = [];
const winningChances = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]];

function markValue() {
    const selectedIndex = Array.from(cells).indexOf(this);
    if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
        if (markSymbol === 'X') {
            this.innerHTML = 'X';
            startState[selectedIndex] = 'X';
            markSymbol = 'O';
            xIndex.push(selectedIndex);
        } else {
            this.innerHTML = 'O';
            startState[selectedIndex] = 'O';
            markSymbol = 'X';
            oIndex.push(selectedIndex);
        }
    }
    checkWinner();
}

function checkWinner() {
    if (winningChances.some((chance) => chance.every((index) => xIndex.includes(index)))) {
        restartGame();
        gameEnd('X wins');
    } else if (winningChances.some((chance) => chance.every((index) => oIndex.includes(index)))) {
        restartGame();
        gameEnd('O Wins');
    } else if (startState.every((cell) => cell !== '')) {
        restartGame();
        gameEnd('Match Tied');
    }
}

function gameEnd(winner) {
    cellContainer.style.display = 'none';
    const winnerText = winner;
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = winnerText;
}

function restartGame() {
    startState = ['', '', '', '', '', '', '', '', ''];
    xIndex = [];
    oIndex = [];
    markSymbol = 'X';
    for (let i = 0; i < cells.length; i += 1) {
        cells[i].innerHTML = '';
    }
    cellContainer.style.display = 'grid';
    resultDiv.style.display = 'none';
}
