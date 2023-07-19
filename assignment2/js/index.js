/* eslint-disable no-console */
const stringVariable = "Tiger";
const numberVariable = 10;
const booleanVariable = true;
let undefinedVariable;
const nullVariable = null;
const arrayVariable = ["Lion", "Tiger", "Cheetah", "Elephant"];
const dateVariable = new Date("2023-07-18");

let concatenatedString = `${stringVariable} ${numberVariable} ${booleanVariable} ${undefinedVariable} ${nullVariable} ${arrayVariable} ${dateVariable}`;
console.log(`String with template literals :${concatenatedString}`);
// eslint-disable-next-line prefer-template
concatenatedString = `${stringVariable} ${numberVariable} ${booleanVariable} ${undefinedVariable} ${nullVariable} ${arrayVariable} ${dateVariable}`;
// eslint-disable-next-line prefer-template
console.log("String without template literals :" + concatenatedString);
