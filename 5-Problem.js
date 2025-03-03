// 5-Problem statement - Use `.slice()` to extract the first three elements of an array.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

const firstThreeElements = numbersArray.slice(0, 3);

console.log(
	`First three elements of the array are: [${firstThreeElements.join(", ")}]`
);
