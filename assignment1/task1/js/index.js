/* eslint-disable no-console */
const stringVariable = "Tiger";
console.log("stringVariable:", typeof stringVariable);
console.log(stringVariable);

const numberVariable = 10;
console.log("numberVariable:", typeof numberVariable);
console.log(numberVariable);

const bigintVariable = BigInt("99999999999999999999999");
console.log("bigintVariable:", typeof bigintVariable);
console.log(bigintVariable);

const booleanVariable = true;
console.log("booleanVariable:", typeof booleanVariable);
console.log(booleanVariable);

let undefinedVariable;
console.log("undefinedVariable:", typeof undefinedVariable);
console.log(undefinedVariable);

const nullVariable = null;
console.log("nullVariable:", typeof nullVariable);
console.log(nullVariable);

const symbolVariable = Symbol("ThisIsASymbol");
console.log("symbolVariable:", typeof symbolVariable);
console.log(symbolVariable);

const objectVariable = {
  filmName: "Lucifer",
  actorName: "Mohanlal",
  directorName: "Prithviraj",
};
console.log("objectVariable:", typeof objectVariable);
console.log(objectVariable);

const arrayVariable = ["Lion", "Tiger", "Cheetah", "Elephant"];
console.log("arrayVariable:", typeof arrayVariable);
console.log(arrayVariable);

const dateVariable = new Date("2023-07-18");
console.log("dateVariable:", typeof dateVariable);
console.log(dateVariable);
