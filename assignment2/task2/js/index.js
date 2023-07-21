/* eslint-disable no-console */

const heightOfpyramid = 5;
let starPyramid = "";
for (let i = 0; i < heightOfpyramid; i += 1) {
  for (let j = 0; j < heightOfpyramid - i - 1; j += 1) {
    starPyramid += " ";
  }
  for (let k = 0; k < i + 1; k += 1) {
    starPyramid += "* ";
  }
  starPyramid += "\n";
}
console.log(starPyramid);
