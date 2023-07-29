const cellOne = document.getElementById('cell-1');
const cellTwo = document.getElementById('cell-2');
const cellThree = document.getElementById('cell-3');
const cellFour = document.getElementById('cell-4');
const cellFive = document.getElementById('cell-5');
const cellSix = document.getElementById('cell-6');
const cellSeven = document.getElementById('cell-7');
const cellEight = document.getElementById('cell-8');
const cellNine = document.getElementById('cell-9');
const cells = document.querySelectorAll('.cell');

const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', restartGame);

cellOne.addEventListener('click', markValue);
cellTwo.addEventListener('click', markValue);
cellThree.addEventListener('click', markValue);
cellFour.addEventListener('click', markValue);
cellFive.addEventListener('click', markValue);
cellSix.addEventListener('click', markValue);
cellSeven.addEventListener('click', markValue);
cellEight.addEventListener('click', markValue);
cellNine.addEventListener('click', markValue);
function markValue() {
    this.innerHTML = 'X';
}
function restartGame() {
    for (let i = 0; i < cells.length; i += 1) {
        cells[i].innerHTML = '';
    }
}
