function _map(array, callback) {
	const results = [];
	for (let key in array) {
		const result = callback(array[key], key, array);
		results.push(result);
	}

	return results;
}

const res = _map(
	[{name: 'ivan', surname: 'ivanov'}, {name: 'ivan', surname: 'ivanov'}],
	(item, key, array) => {
		console.log(array[key])
		return `${item.surname} ${item.name} ${key}`;
	}
);

console.log(res)
