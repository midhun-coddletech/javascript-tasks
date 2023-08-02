/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const a = ['1.jpg', '2.jpg', '3.jpg'];
let selectedIndex = 0;

function updateImg(type) {
    if (type === '0') {
        selectedIndex -= 1;
    } else selectedIndex += 1;
    if (selectedIndex < 0) {
        selectedIndex = a.length - 1;
    } else if (selectedIndex >= a.length) {
        selectedIndex = 0;
    }
    document.getElementById('imgs').src = `./images/${a[selectedIndex]}`;
}
