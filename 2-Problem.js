// 2-Problem statement - Find and log the second element of an array.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

if (numbersArray.length >= 2) {
	console.log(
		`Second element of the array [${numbersArray}] is: ${numbersArray[1]}`
	);
} else {
	console.log("The array has only one element.");
}
