/* eslint-disable max-len */
/* eslint-disable no-console */

// Question 1 : ['car', 1, 5, 'js', 'node js', 'mysql', 'sql' ] : Use switch statement inside a map function and console each item by using switch statement.

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

// Question 2 : [1, 2, 3, 4. 5, 6] : Write a closure function to delete indexes 5 and 2 of this array.

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

// Question 3: Use constructor method to console all elements of the passed array. (the array will be passed to the constructor method)

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

// Question 4: Create a function that takes 2 arguments, 1st argument being any array of items, 2nd being any one of the item name either in the passed array or not in the passed array, the function should delete the  passed item if it exists in the array, if it doesn't exist then the item should be inserted into the array,  finnally console the output.

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

// Question 5: Create a self-invoking function to console you name.

(function () {
    const myName = 'Midhun';
    console.log('My name is', myName);
}());

// Question 6: {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])

const givenObject = {
    a: 'one', b: '2', f: '5', c: '33', p: 'do', q: 'one',
};

let arrayObj = Object.keys(givenObject);
arrayObj = arrayObj.reverse();
console.log('Array of keys in reverse order is', arrayObj);

// Question 7: { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] } From the given object remove the data array item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )

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

// Question 8 : Given var string = "Javascript is the King of the web."

const givenString = 'Javascript is the King of the web.';

// Sub Question a) Get the length of the string.

console.log('Lenght of the given string is', givenString.length);

// Sub Question b) Print the 8th character of the string without using any function.

console.log('8th character of the string is', givenString[7]);

// Sub Question c) Execute the above code from browser console.

console.log(givenString[7]);

// Sub Question d) Get the position of the word "King" in string.

console.log('Position of word "King" is', givenString.indexOf('King') + 1);

// Sub Question e) Replace "King" with "Emperor".

console.log(givenString.replace('King', 'Emperor'));

//Sub Question f) Insert the string "new” before the word "King".

const indexofKing = givenString.indexOf('King');
console.log(givenString.slice(0, indexofKing - 1), 'new', givenString.slice(indexofKing));

// Sub Question g) Get the words in string as an array.

console.log(givenString.split(' '));

// Sub Question h) Extract and print the words "is the King" from string.

const word = 'is the King';
const indexofWord = givenString.indexOf(word);

console.log(givenString.slice(indexofWord, indexofWord + word.length));

// Sub Question i) Get the count of occurrences of the strings "the" and "of" in string.

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

// Sub Question j) pad string with "*" and set the total length of the string as 30, displayed at right side.

const givenstringLength = givenString.length;
let paddedString;
if (givenstringLength > 29) {
    paddedString = givenString.slice(0, 29).padEnd(30, '*');
    console.log(paddedString);
} else {
    paddedString = givenString.padEnd(30, '*');
    console.log(paddedString);
}
