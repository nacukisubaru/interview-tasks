//isSimilar([0,1,2], [2,1,0]) === true
//isSimilar([0,1], [2,1,0]) === false
//isSimilar([0,5,1], [0,1,5]) === true
//isSimilar([0,5,1], [1,5,8]) === false

const isSimilar = (array1, array2) => {
	if (array1.length !== array2.length) {
		return false;
	}
	
	const numbers = new Set();
	array2.forEach((item) => {
		numbers.add(item);
	})

	let similar = false;
	for (let item of array1) {
		similar = numbers.has(item);
		if (similar === false) {
			break;
		}
	}

	return similar
}

console.log(isSimilar([0,1,2], [2,1,0]))
console.log(isSimilar([0,1], [2,1,0]))
console.log(isSimilar([0,5,1], [0,1,5]))
console.log(isSimilar([0,5,1], [1,5,8]))