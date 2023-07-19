/* eslint-disable prefer-template */
/* eslint-disable no-console */
const stringVariable = "Tiger";
const numberVariable = 10;
const bigintVariable = BigInt("999999999999999999999999999");
const booleanVariable = true;
let undefinedVariable;
const nullVariable = null;
const arrayVariable = ["Lion", "Tiger", "Cheetah", "Elephant"];
const dateVariable = new Date("2023-07-18");

let concatenatedString = `${stringVariable} ${numberVariable} ${booleanVariable} ${bigintVariable}  ${undefinedVariable} ${nullVariable} ${arrayVariable} ${dateVariable}`;
console.log(`String with template literals :${concatenatedString}`);

concatenatedString =
  stringVariable +
  " " +
  numberVariable +
  " " +
  booleanVariable +
  " " +
  bigintVariable +
  " " +
  undefinedVariable +
  " " +
  nullVariable +
  " " +
  arrayVariable +
  " " +
  dateVariable;

console.log("String without template literals :" + concatenatedString);
