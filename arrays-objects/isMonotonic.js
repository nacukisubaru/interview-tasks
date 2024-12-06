
//ебать сложное решение
// const isMonotonic = (array) => {
    
//     if (array.length === 1) {
//         return false;
//     }

//     const numbers = new Set();

//     array.forEach(item => {
//         numbers.add(item);
//     });

//     if (numbers.length === 1) {
//         return true;
//     }

//     let subsequenseIncrease = 0;
//     let subsequenseDecrease = 0;

//     const numbersList = Array.from(numbers);
//     numbersList.forEach((item, index) => {
//         const nextItem = numbersList[index + 1];

//         if (!nextItem) {
//             return;
//         }

//         if (item > nextItem) {
//             subsequenseDecrease++;
//         } else if (item < nextItem) {
//             subsequenseIncrease++;
//         }
//     });

//     if (subsequenseDecrease && subsequenseIncrease) {
//         return false;
//     }

//     if (subsequenseDecrease === numbersList.length - 1 ||
//         subsequenseIncrease === numbersList.length - 1
//     ) {
//         return true;
//     }

//     return false;
// }

//решение по проще
const isMonotonic = (array) => {
    if (array.length <= 1) {
        return true; // Пустой массив или массив из одного элемента считается монотонным
    }

    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            decreasing = false;
        }
        if (array[i] < array[i - 1]) {
            increasing = false;
        }
        if (!increasing && !decreasing) {
            return false;
        }
    }

    return true;
};


console.log(isMonotonic([1, 3, 6, 8]));
console.log(isMonotonic([8, 6, 3, 3, 1]));
console.log(isMonotonic([1, 1, 1]));
console.log(isMonotonic([1, 10,7]));