// Задача: Поиск наибольшей глубины дерева
// Дано бинарное дерево, представленное следующим образом:

// Узел дерева имеет два дочерних элемента: left и right.
// Каждый узел может быть либо числом (значение узла), либо null (отсутствие дочернего элемента).
// Пример структуры дерева:


const tree = {
	value: 1,
	left: {
		value: 2,
		left: {
			value: 4,
			left: {
				value: 5,
				left: null,
				right: {
					value: 5,
					left: null,
					right: null
				}
			},
			right: null
		},
		right: null
	},
	right: {
		value: 3,
		left: {
			value: 5,
			left: null,
			right: null
		},
		right: {
			value: 5,
			left: null,
			right: null
		}
	},
	right2: {
		value: 3,
		left: {
			value: 5,
			left: null,
			right: null
		},
		right: {
			value: 5,
			left: null,
			right: null
		}
	}
};

// Задача:
// Написать функцию, которая принимает дерево в виде объекта и возвращает наибольшую глубину дерева.

// Ожидаемый результат:
// Для приведённого примера:

// javascript
// Копировать код
// getMaxDepth(tree); // 3
// Подсказка:
// Наибольшая глубина — это максимальное число узлов на пути от корня до самого дальнего листа.

function maxDeep(object) {
	let maxDeepCounter = 0;
	Object.values(object).forEach((item) => {
		if (item && typeof item === "object") {
			maxDeepCounter++;
			maxDeepCounter += maxDeep(item)
		}
	});

	return maxDeepCounter;
}

console.log(maxDeep(tree));