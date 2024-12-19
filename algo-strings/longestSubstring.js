// Оптимизация алгоритмов
// Задача: Напишите функцию longestPalindrom(s), которая вернет самую длинную подстроку полиндром

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} string
 * @return {string}
 */
//способ brute force
var longestPalindrome = function (string) {
	if (string.length) {
		let palindromStr = string[0];

		for (let inc = 0; inc < string.length; inc++) {

			const nextItem = string[inc + 1];
			if (nextItem) {
				palindromStr += nextItem;

				if (isPalindrome(palindromStr)) {
					return palindromStr;
				}
			}
		}
	}
};

/**
 * @param {string} string
 * @return {string}
 */
//способ brute force
var longestPalindrome2 = function (string) {
    let longest = ""; // Переменная для хранения самого длинного палиндрома

    // Перебираем все возможные начальные позиции
    for (let i = 0; i < string.length; i++) {
        // Перебираем все возможные конечные позиции
        for (let j = i; j < string.length; j++) {
            // Извлекаем подстроку
            const substring = string.slice(i, j + 1);
            // Проверяем, является ли подстрока палиндромом
            if (isPalindrome(substring)) {
                // Если палиндром длиннее текущего самого длинного, обновляем
                if (substring.length > longest.length) {
                    longest = substring;
                }
            }
        }
    }

    return longest;
};


function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(longestPalindrome2('babad'));