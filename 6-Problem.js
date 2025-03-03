// 6-Problem statement - Find the index of a specific element in an array using `.indexOf()`.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

const searchElement = 8;

const indexOfElement = numbersArray.indexOf(searchElement);

if (indexOfElement !== -1) {
	console.log(`Index of element ${searchElement} is: ${indexOfElement}`);
} else {
	console.log(`Element ${searchElement} not found in the array!`);
}
