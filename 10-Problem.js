// 10-Problem statement - Write a program that creates a copy of an array without mutating the original.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(`Original array is: [${numbersArray}]`);

const copiedNumbersArray = [...numbersArray];

console.log(`Copied array is: [${copiedNumbersArray}]`);
