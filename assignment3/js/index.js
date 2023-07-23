/* eslint-disable no-console */

// Question 1

console.log(
    `\nQuestion 1: ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and console each item by using switch statement.\n`
);
const switchArray = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];

switchArray.map((item, arr) => {
    switch (arr) {
    case arr:
        console.log(item);
        break;
    default:
        console.log('Empty array');
    }
    return item;
});

// Question 4

console.log(
    `\nQuestion 4: Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one of the item name either in the passed array or not in the passed array, the function should delete the passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array, finnally console the output.\n`
);

function updateArray(array, item) {
    if (array.includes(item)) {
        array.splice(array.indexOf(item), 1);
    } else {
        array.push(item);
    }
    console.log(array);
}
const array = [1, 2, 3, 4, 5];
updateArray(array, 1);
updateArray(array, 6);

// Question 5

console.log(
    `\nQuestion 5: Create a self-invoking function to console your name.\n`
);

(function () {
    const myName = 'Midhun';
    console.log(`My name is ${myName}`);
})();

// Question 8

console.log(`\nQuestion 8: Given var string = "Javascript is the King of the web."

i) Get the count of occurrences of the strings "the" and "of" in string. 
j) pad string with "*" and set the total length of the string as 30, displayed at right side.\n`);

// Question 8.a

console.log(`a) Get the length of the string.\n`);

const string = 'Javascript is the King of the web.';
console.log(`Length of the string is ${string.length}`);

// Question 8.b

console.log(
    `\nb) Print the 8th character of the string without using any function.\n`
);

console.log(`8-th character of the string is ${string[7]}`);

// Question 8.c

console.log(`\nc) Execute the above code from browser console. \n`);

// Question 8.d

console.log(`d) Get the position of the word "King" in string. \n`);

console.log(`Postion of "King" in the string is ${string.indexOf('King') + 1}`);

// Quesiton 8.e

console.log(`\ne) Replace "King" with "Emperor". \n`);
const newString = string.replace('King', 'Emperor');
console.log(`String after the updation: ${newString}`);

// Question 8.f

console.log(`\nf) Insert the string "new" before the word "King". \n`);

const indexofKing = string.indexOf('King');
const UpdatedString = `${string.substring(
    0,
    indexofKing
)}new ${string.substring(indexofKing)}`;

console.log(`String after updation: "${UpdatedString}"`);

// Question 8.g

console.log(`\ng) Get the words in string as an array. \n`);

const stringArray = string.split(' ');
console.log('String to Array: ', stringArray);

// Question 8.h

console.log(`\nh) Extract and print the words "is the King" from string. \n`);

const wordtoExtract = 'is the King';
const wordLength = wordtoExtract.length;
const indexofWord = string.indexOf('is the King');
const extractedWord = string.slice(indexofWord, indexofWord + wordLength);
console.log(`Extracted word is: "${extractedWord}"`);

// Question 8.i

console.log(
    `\ni) Get the count of occurrences of the strings "the" and "of" in string. \n`
);

const theOccurance = string.match('the');
const ofOccurance = string.match('of');
console.log(
    `Occurence of "the" is ${theOccurance.length} and "of" is ${ofOccurance.length} times`
);

// Question 8.j

console.log(
    `\nj) pad string with "*" and set the total length of the string as 30, displayed at right side.\n`
);

const paddedString = string.padEnd(30, '*');
console.log(`String after padding: ${paddedString}`);
