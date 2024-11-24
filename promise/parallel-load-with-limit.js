// Ожидаемое поведение:
// Первые два запроса запускаются параллельно, так как limit = 2.
// Как только один из них завершится, запускается следующий запрос.
// Все запросы выполняются до конца, и результаты собираются в массив.
// Если хотя бы один запрос завершится с ошибкой, вся функция отклоняется с этой ошибкой.

const urls = [
	//'https://jsonplacdfsdfsdfeholder.typicode.com/posts/1', //с ошибкой
	'https://jsonplaceholder.typicode.com/posts/2',
	'https://jsonplaceholder.typicode.com/posts/3',
	'https://jsonplaceholder.typicode.com/posts/4',
];

const loadWithLimit = async (urls, limit = 0) => {
	return new Promise(async (resolve, reject) => {
		let start = 0;
		let end = limit;
		const resultsArray = [];
		try {
			while (start < urls.length) {
				const fetchMap = urls.slice(start, end).map(url => fetch(url).catch(error => {
					throw new Error(error)
				}));

				const results = await Promise.all(fetchMap);
				if (results) {
					const a = await Promise.all(results);
					const b = await Promise.all(a.map(response => response.json()));

					resultsArray.push(b);

					start += limit;
					end += limit;
				}
			}
		} catch (error) {
			reject(error);
		}

		resolve(resultsArray);
	})
}

// loadWithLimit(urls, 2)
// 	.then((results) => console.log('Результаты:', results))
// 	.catch((error) => console.error('Ошибка:', error));


function loadWithLimit2(urls, limit) {
	const results = new Array(urls.length); // Для сохранения результатов
	let activeTasks = 0; // Текущий счётчик активных запросов
	let currentIndex = 0; // Индекс следующего URL из очереди

	return new Promise((resolve, reject) => {
		function launchNext() {
			if (currentIndex >= urls.length) {
				// Если все запросы завершены, проверяем активные задачи
				if (activeTasks === 0) resolve(results);
				return;
			}

			if (activeTasks < limit) {
				const index = currentIndex++; // Берём текущий индекс и увеличиваем его
				activeTasks++; // Увеличиваем счётчик активных задач

				fetch(urls[index])
					.then(async (response) => {
						if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
						//  console.log((await response.json()))
						return response.json();
					})
					.then((data) => {
						results[index] = data; // Сохраняем результат в правильной позиции
					})
					.catch((error) => reject(error)) // Если ошибка — отклоняем весь промис
					.finally(() => {
						activeTasks--; // Уменьшаем счётчик активных задач
						launchNext(); // Запускаем следующую задачу
					});

			}
		}

		// Запускаем начальные задачи
		for (let i = 0; i < limit; i++) {
			launchNext();
		}
	});
}

loadWithLimit2(urls, 2).then(results => console.log('Результат: ', results));