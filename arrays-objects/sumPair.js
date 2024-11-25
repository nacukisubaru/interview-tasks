// дан массив [2, 4, 3, 5, 3, 1, 9] 
// target = 6 
// output = [[2, 4], [5, 1]]
// не может быть [3, 3]
// нужно найти пары чисел которые вместе составят сумму указанную в target

function sumPair(array, target) {
    const pairs = [];
    if (Array.isArray(array)) {
        array = Array.from(new Set(array));
        array.sort((a, b) => a - b);
        
        let start = 0;
        let end = array.length - 1;

        while (start !== end) {
            let sum = array[start] + array[end];

            if (sum === target) {
                pairs.push([array[start], array[end]]);
                array.splice(start, 1)
                array.splice(end - 1, 1)
                
                let isContinue = false;
                if (array[end] === undefined) {
                    end = array.length - 1;
                    isContinue = true;
                }
    
                if (array[start] === undefined) {
                    start = 0;
                    isContinue = true;
                }
                               
                if (isContinue) continue;
                start--;
                end--;
            } else if (sum < target) {
                start++;
            } else if (sum > target){
                end--;
            }
        }
    }

    return pairs;
}

//const res = sumPair([2, 4, 3, 5, 3, 1, 9], 6);

const res = sumPair([10, 5, 1, 3, 2, 8, 6], 11);


console.log(res);