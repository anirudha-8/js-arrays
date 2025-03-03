// 3-Problem statement - Add two new elements to the start of an array using `.unshift()`.

const numbersArray = [3, 4, 5];

console.log("Original number array is: ");

console.table(numbersArray);

numbersArray.unshift(1, 2);

console.log("After adding 2 elements at the start of the array, array is: ");

console.table(numbersArray);
