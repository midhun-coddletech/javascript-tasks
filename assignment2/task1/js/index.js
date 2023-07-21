/* eslint-disable no-console */

// Question a

console.log("\nQuestion a \n");

let numArray = ["1", "2", "3", "4", "5", "6", "7"];
const indexofNumber = numArray.indexOf("6");
numArray.splice(indexofNumber, 1);
const arrayLength = numArray.length;
console.log(`Length of array after deletion of "6" is ${arrayLength}`);

// Question b

console.log("\nQuestion b \n");

numArray = ["1", "2", "3", "4", "5", "6", "7"];
numArray.forEach((item, index) => {
  numArray[index] = Number(item);
});
numArray.forEach((item) => {
  console.log(item);
  console.log(typeof item);
});

// Question c

console.log("\nQuestion c \n");

numArray = ["1", "2", "3", "4", "5", "6", "7"];
numArray.splice(-3);
console.log(numArray);
numArray.unshift("one", "two");
console.log(numArray);

// Question d

console.log("\nQuestion d \n");

numArray = ["1", "2", "3", "4", "5", "6", "7"];
let numString = "";
numArray.forEach((item) => {
  numString += item;
});
console.log(`The string after concatenation ${numString}`);
let sumofElements = 0;
numArray.forEach((item) => {
  sumofElements += Number(item);
});
console.log(`Sum of elements in array is ${sumofElements}`);

// Question e

console.log("\nQuestion e \n");

numArray = ["1", "2", "3", "4", "5", "6", "7"];
numArray = numArray.filter((item) => item !== "3");
console.log(numArray);

// Question f

console.log("\nQuestion f \n");

numArray = ["1", "2", "3", "4", "5", "6", "7"];
numArray = numArray.forEach((item) => {
  if (item === "3" || item === "6" || item === "7") {
    console.log(`Found item ${item}`);
  }
});

// Question g

console.log("\nQuestion g \n");

numArray = ["1", "2", "3", "4", "5", "6", "7"];
const arrayTocheck = [1, 2, "3", 4, 5, 6, "7"];
for (let i = 0; i < numArray.length; i += 1) {
  if (typeof numArray[i] === typeof arrayTocheck[i]) {
    console.log(`${numArray[i]} and ${arrayTocheck[i]} have the same datatype`);
  }
}

// Question h

console.log("\nQuestion h \n");

const newArray = [0, 2, 3, 7, 5, 6, 8];
for (let i = 0; i <= newArray.length; i += 1) {
  const productValue = newArray[i] * i;
  if (productValue > 40) {
    console.log(
      `Product of element and its index of ${newArray[i]} in ${i}-th index is ${productValue}`,
    );
  }
}

// Question i

console.log("\nQuestion i \n");

const firstArray = [0, 1, 2, 3, 4];
const secondArray = [5, 6, 7, 8, 9];
const mergedArray = firstArray.concat(secondArray);
console.log(mergedArray);
