/* eslint-disable no-undef */
const cells = document.querySelectorAll('.cell');
const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', restartGame);
let markSymbol = 'X';
cells.forEach((cell) => cell.addEventListener('click', markValue));
function markValue() {
    if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
        if (markSymbol === 'X') {
            this.innerHTML = 'X';
            markSymbol = 'O';
        } else {
            this.innerHTML = 'O';
            markSymbol = 'X';
        }
    }
}
function restartGame() {
    for (let i = 0; i < cells.length; i += 1) {
        cells[i].innerHTML = '';
    }
}
