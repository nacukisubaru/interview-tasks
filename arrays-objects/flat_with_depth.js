/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

	function recursiveFlat(arr, level) {
		level = level + 1;
		let newArr = [];
		for (let inc in arr) {
			const item = arr[inc];
			if (Array.isArray(item) && level <= n) {
				newArr = newArr.concat(recursiveFlat(item, level));
			} else {
				newArr.push(item);
			}
		}

		return newArr;
	}

	return recursiveFlat(arr, 0);
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const res = flat(arr);
console.log(res);