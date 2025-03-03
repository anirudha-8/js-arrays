// 9-Problem statement - Sort an array `[5, 2, 9, 1]` in ascending order.

const numbersArray = [5, 2, 9, 1];

console.log(`Array before sorting - [${numbersArray}]`);

const sortedNumbersArray = [...numbersArray].sort((a, b) => a - b);

console.log(`Array after sorting - [${sortedNumbersArray}]`);
