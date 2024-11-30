//дан лимит купюр каким то номиналом в банкомате
//если купюр не достаточно чтобы выдать запрошенную сумму выдавать ошибку
//если купюр достаточно то возвращать массив ключ значение
//номинал и количество выданных купюр в сумме должно составить запрошенную сумму

const limits = {
	5000: 5,
	2000: 3,
	1000: 4,
	500: 8,
	200: 8,
	100: 15,
	50: 20,
	20: 2,
	23: 1
};

//Решение
//если сумма больше номинала банкноты 
//то брать эту банкноту пока их количество не кончится либо пока не наберется нужная сумма
//проверять что сумма не набралась больше нужной 
//если сумма становится больше нужной то 
//не добавляем купюру на выдачу, а проходим мимо и идем к следующей купюре

const atm = (sum, limits) => {
	const banknotesList = {};
	const sortedBanknotes = Object.entries(limits).sort((a, b) => b[0] - a[0]);
	sortedBanknotes.forEach(([banknote, count]) => {
		banknote = Number(banknote);
		if (sum >= banknote && count) {
			let totalBanknotes = 0;
			let banknotesCount = 0;
			
			if (count === 1) {
				banknotesCount++;
				totalBanknotes = banknote;
			}

			for (let inc = 1; inc < count; inc++) {
				const total = banknote * inc;
				if (total > sum) {
					break;
				}

				totalBanknotes = total;
				banknotesCount = inc;
			}

			if (banknotesCount) {
				sum -= totalBanknotes;
				limits[banknote] = count - banknotesCount;
				banknotesList[banknote] = banknotesCount;
			}
		} else if (!count) {
			return;
		}
	});

	if (sum > 0 || !Object.keys(banknotesList).length) {
		throw new Error('Я не щмогла');
	}

	return banknotesList;
}

console.log(atm(16950, limits));
console.log(atm(2000, limits));
console.log(atm(5200, limits));

console.log(atm(2000, limits));
console.log(atm(5200, limits));
