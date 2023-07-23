/* eslint-disable no-console */

// Question a

console.log('\nQuestion a');
console.log(`["1", "2", "3", "4", "5", "6", "7"] 

Remove number "6" from the array and console the length of the array.`);

let numArray = ['1', '2', '3', '4', '5', '6', '7'];
const indexofNumber = numArray.indexOf('6');
numArray.splice(indexofNumber, 1);
const arrayLength = numArray.length;
console.log(`Length of array after deletion of "6" is ${arrayLength}`);

// Question b

console.log('\nQuestion b \n');
console.log(
    `Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.`
);

numArray = ['1', '2', '3', '4', '5', '6', '7'];
numArray.forEach((item, index) => {
    numArray[index] = Number(item);
});
numArray.forEach((item) => {
    console.log(item);
    console.log(typeof item);
});

// Question c

console.log('\nQuestion c \n');
console.log(
    `Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array.`
);

numArray = ['1', '2', '3', '4', '5', '6', '7'];
numArray.splice(-3);
console.log(numArray);
numArray.unshift('one', 'two');
console.log(numArray);

// Question d

console.log('\nQuestion d ');
console.log(
    `Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)`
);

numArray = ['1', '2', '3', '4', '5', '6', '7'];
let numString = '';
let sumofElements = 0;
numArray.forEach((item) => {
    numString += item;
    sumofElements += Number(item);
});
console.log(`The string after concatenation ${numString}`);
console.log(`Sum of elements in array is ${sumofElements}`);

// Question e

console.log('\nQuestion e');
console.log(
    `Filter out item "3" from the array and console the array (use any array method)`
);

numArray = ['1', '2', '3', '4', '5', '6', '7'];
numArray = numArray.filter((item) => item !== '3');
console.log(numArray);

// Question f

console.log('\nQuestion f \n');
console.log(
    `Iterate the array and console the item, when item is either "3", "6" or "7"`
);

numArray = ['1', '2', '3', '4', '5', '6', '7'];
numArray = numArray.forEach((item) => {
    if (item === '3' || item === '6' || item === '7') {
        console.log(`Found item ${item}`);
    }
});

// Question g

console.log('\nQuestion g \n');
console.log(
    `[1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)`
);

numArray = ['1', '2', '3', '4', '5', '6', '7'];
const arrayTocheck = [1, 2, '3', 4, 5, 6, '7'];
for (let i = 0; i < numArray.length; i += 1) {
    for (let j = 0; j < arrayTocheck.length; j += 1) {
        if (typeof numArray[i] === typeof arrayTocheck[j]) {
            console.log(
                `${numArray[i]} and ${arrayTocheck[j]} have the same datatype`
            );
        }
    }
}

// Question h

console.log('\nQuestion h');
console.log(
    `[0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.`
);

const newArray = [0, 2, 3, 7, 5, 6, 8];
for (let i = 0; i <= newArray.length; i += 1) {
    const productValue = newArray[i] * i;
    if (productValue > 40) {
        console.log(
            `Product of element and its index of ${newArray[i]} in ${i}-th index is ${productValue}`
        );
    }
}

// Question i

console.log('\nQuestion i');
console.log(
    `Create two arrays with five items each and merge the array into a single array and then console it.\n`
);

const firstArray = [0, 1, 2, 3, 4];
console.log('First array is', firstArray);
const secondArray = [5, 6, 7, 8, 9];
console.log('Second Array is', secondArray);
const mergedArray = firstArray.concat(secondArray);
console.log('Merged array is', mergedArray);

// Question 2

console.log('\nQuestion 2');
console.log(`Console this star pattern  \n
                 *
                * *
               * * *
              * * * *
             * * * * * `);

const heightOfpyramid = 5;
let starPyramid = '';
for (let i = 0; i < heightOfpyramid; i += 1) {
    for (let j = 0; j < heightOfpyramid - i - 1; j += 1) {
        starPyramid += ' ';
    }
    for (let k = 0; k < i + 1; k += 1) {
        starPyramid += '* ';
    }
    starPyramid += '\n';
}
console.log(starPyramid);
