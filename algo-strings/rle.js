export const rle = (string) => {
	let symbolsCount = 0;
	let newString = "";

	for (let inc = 0; inc < string.length; inc++) { 
		const nextSymbol = string[inc + 1];
		const symbol = string[inc];
		if (symbol === nextSymbol) {
			symbolsCount++;
		} else {
			newString += symbol;
			if (symbolsCount) {
				newString += symbolsCount + 1;
				symbolsCount = 0;
			}
		}
	}
	return newString;
}

console.log(rle("AAAABBBCCCC"));