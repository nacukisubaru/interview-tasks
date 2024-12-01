export const rle = (string) => {

	let symbolsCount = 0;
	let newString = "";
	string.forEach((symbol, index) => {
		const nextSymbol = string[index + 1];
		if (symbol === nextSymbol) {
			symbolsCount++;
		} else {
			newString += symbol;
			if (symbolsCount) {
				newString += symbolsCount;
				symbolsCount = 0;
			}
		}
	});
	
}

console.log(rle("AAAABBBCCCC"));