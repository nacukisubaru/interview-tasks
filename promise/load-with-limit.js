const urls = [
	'https://jsonplaceholder.typicode.com/posts/3',
	'https://jsonplaceholder.typicode.com/posts/4',
	'https://jsonplaceholder.typicode.com/posts/5',
	'https://jsonplaceholder.typicode.com/posts/6',
	'https://jsonplaceholder.typicode.com/posts/7',
	'https://jsonplaceholder.typicode.com/posts/8',
	'https://jsonplaceholder.typicode.com/posts/9',
	'https://jsonplaceholder.typicode.com/posts/10',
	'https://jsonplaceholder.typicode.com/posts/11',
	'https://jsonplaceholder.typicode.com/posts/12',
];

const loadWithLimit = async (urls, limit) => {
	const results = [];
	let taskTraker = urls.length;
	let errorText = '';
	const urlsCount = urls.length;

	const urlsMap = new Map();
	urls.forEach((url, index) => {
		urlsMap.set(url, index);
	});

	function load(url) {
		fetch(url)
			.then(async (response) => {
				if (!response.ok) {
					errorText = 'Обшибка';
				}
				const order = urlsMap.get(response.url);
				const res = await response.json();
				return { ...res, order };
			})
			.then((result) => {
				results.push(result);
			})
			.catch((error) => {
				errorText = error;
			})
			.finally(() => {
				taskTraker--;
				if (taskTraker && urls.length) {
					load(urls.shift());
				}
			});
	}
	const arr = [...urls.slice(0, limit)];
	urls.splice(0, limit);

	arr.forEach((url) => {
		load(url);
	});

	return new Promise((resolve, reject) => {
		const intervalId = setInterval(() => {
			if (errorText) {
				reject(errorText);
				clearInterval(intervalId);
			}

			if (results.length === urlsCount) {
				resolve(results.sort((a, b) => {
					return a.order - b.order;
				}));
				clearInterval(intervalId);
			}
		}, 1);
	})
}

loadWithLimit(urls, 2)
	.then(results => console.log('Результат: ', results))
 	.catch(error => console.log('Ошибка: ', error))