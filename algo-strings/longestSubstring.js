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
var longestPalindromeBrute = function (string) {
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

//рекурсия
function longestPalindrome(s) {
	
	console.log(s.substring(1))
    if (s === s.split('').reverse().join('')) {
        return s;
    }

    const left = longestPalindrome(s.substring(1));
    const right = longestPalindrome(s.substring(0, s.length - 1));
	

    return left.length > right.length ? left : right;
}

//рассширение от центра
function longestPalindromeСenter(s) {
    let start = 0, end = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1; // Длина палиндрома
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(i, i); // Палиндром с одним центром
        let len2 = expandAroundCenter(i, i + 1); // Палиндром с двумя центрами
        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}


// Пример использования
console.log(longestPalindrome("bagdatababagdat"));
