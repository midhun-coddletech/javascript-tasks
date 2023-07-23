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

const concatenatedStringwithliterals = `${stringVariable} ${numberVariable} ${booleanVariable} ${bigintVariable}  ${undefinedVariable} ${nullVariable} ${arrayVariable} ${dateVariable}`;
console.log(`String with template literals :${concatenatedStringwithliterals}`);

const concatenatedStringwithoutliterals =
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

console.log(
  "String without template literals :" + concatenatedStringwithoutliterals,
);
