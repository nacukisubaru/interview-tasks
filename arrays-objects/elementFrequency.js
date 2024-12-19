// Частота элементов в массиве
// Напишите функцию, которая возвращает объект (или Map), содержащий количество вхождений каждого элемента массива.

function elementFrequency(arr) {
	const map = new Map();
	arr.forEach((item) => {
		const count = map.get(item);
		if (count) {
			map.set(item, count + 1);
		} else {
			map.set(item, 1);
		}
	});

	return map;
}

console.log(elementFrequency(['a', 'b', 'a', 'c', 'b', 'b'])); 
// { a: 2, b: 3, c: 1 }
