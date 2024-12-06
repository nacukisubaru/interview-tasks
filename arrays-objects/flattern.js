Array.prototype._concat = _concat;
Array.prototype._merge = _merge;

function _merge(array) {
	this.push(...array);
	return this;
}

function _concat(array) {
	return [...this, ...array];
}

function myconcat(array1, array2) {
	return [...array1, ...array2];
}

const flatten = (array) => {
	let results = [];

	for (const item of array) {
		if (Array.isArray(item)) {
			results = flatten(results._merge(item));
			//results = results._concat(flatten(item));
			//results = results.concat(flatten(item));
			//results = flatten(myconcat(results, item));
		} else {
			results.push(item);
		}
	}

	return results;
}

console.log(flatten([1, 2, 3, 4, [5, 6, 7, [8, 9, 10]], [11, 12, 13, [14, 15], 16]]))