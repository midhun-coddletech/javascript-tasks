/* eslint-disable no-console */
// Question 1

const givenArray = ['car', 1, 5, 'js', 'node js', 'mysql', 'sql'];

givenArray.map((value, index) => {
    switch (index) {
    case index: console.log(value);
        break;
    default:
        break;
    }
    return value;
});

// Question 2

const numArray = [1, 2, 3, 4, 5, 6];
function firstFunction() {
    const firstIndex = 5;
    function secondFunction() {
        const secondIndex = 2;
        numArray.splice(firstIndex, 1);
        numArray.splice(secondIndex, 1);
        console.log(numArray);
    }
    secondFunction();
}

firstFunction();

// Question 3

class Array {
    constructor(array) {
        this.array = array;
        this.printElements();
    }

    printElements() {
        this.array.forEach((item) => {
            console.log(item);
        });
    }
}

// eslint-disable-next-line no-unused-vars
const newArray = new Array(['A', 'B', 'C', 'D']);

// Question 4

function checkElements(array, element) {
    const elementIndex = array.indexOf(element);
    if (elementIndex >= 0) {
        array.splice(elementIndex, 1);
        console.log('Array after deletion :', array);
    } else {
        array.push(element);
        console.log('Array after addition :', array);
    }
}

const array = ['Mango', 'Orange', 'Grapes', 'Pine Apple', 'Carrot'];
console.log('Array before deletion: ', array);
const element = 'Mango';
console.log('Element to be checked : ', element);

checkElements(array, element);

// Question 5

(function () {
    const myName = 'Midhun';
    console.log('My name is', myName);
}());

// Question 6

const givenObject = {
    a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one',
};

let arrayObj = Object.keys(givenObject);
arrayObj = arrayObj.reverse();
console.log('Array of keys in reverse order is', arrayObj);

// Question 7

const idObject = { data: [{ a: 'one', id: '22' }, { a: 'four', id: '7' }, { a: 'six', b: '2' }, { a: 'sixty', id: '24' }, { a: 'five', id: '212' }] };
const objArray = idObject.data;
const objArray1 = [];
objArray.forEach((item) => {
    if (item.id !== '24') {
        objArray1.push(item);
    }
});
idObject.data = objArray1;
console.log(idObject);

// Question 8

const givenString = 'Javascript is the King of the web.';

// Sub Question a

console.log('Lenght of the given string is', givenString.length);

// Sub Question b

console.log('8th character of the string is', givenString[7]);

// Sub Question c

console.log(givenString[7]);

// Sub Question d

console.log('Position of word "King" is', givenString.indexOf('King') + 1);

// Sub Question e

console.log(givenString.replace('King', 'Emperor'));

//Sub Question f

const indexofKing = givenString.indexOf('King');
console.log(givenString.slice(0, indexofKing - 1), 'new', givenString.slice(indexofKing));

// Sub Question g

console.log(givenString.split(' '));

// Sub Question h

const word = 'is the King';
const indexofWord = givenString.indexOf(word);

console.log(givenString.slice(indexofWord, indexofWord + word.length));

// Sub Question i

const arrayfromString = givenString.split(' ');
let countThe = 0;
let countOf = 0;

arrayfromString.forEach((item) => {
    if (item === 'the') {
        countThe += 1;
    } else if (item === 'of') {
        countOf += 1;
    }
});

console.log('Count of "the" =', countThe, '\nCount of "Of" =', countOf);

// Sub Question j

const givenstringLength = givenString.length;
let paddedString;
if (givenstringLength > 29) {
    paddedString = givenString.slice(0, 29).padEnd(30, '*');
    console.log(paddedString);
} else {
    paddedString = givenString.padEnd(30, '*');
    console.log(paddedString);
}
