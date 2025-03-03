// 7-Problem statement - Check if a value exists in an array using `.includes()`.

// 6-Problem statement - Find the index of a specific element in an array using `.indexOf()`.

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

const searchElement = 8;

const isElementPresent = numbersArray.includes(searchElement);

console.log(isElementPresent);

if (isElementPresent) {
	console.log(`Element ${searchElement} is included in the array!`);
} else {
	console.log(`Element ${searchElement} is not found in the array!`);
}
