// Удаление дубликатов из массива
// Напишите функцию, которая принимает массив чисел и возвращает массив, в котором все дубликаты удалены.

function removeDuplicates(arr) {
	const set = new Set();
	arr.forEach((item) => {
		set.add(item);
	})

	return Array.from(set);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
