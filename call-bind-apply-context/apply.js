Object.prototype.myApply = function(context, args) {
    
    const uniqueProp = Symbol('fn');
    context[uniqueProp] = this;

    let res;
    if (!args) {
        res = context[uniqueProp]();
    } else {
        res = context[uniqueProp](...args);
    }

    delete context[uniqueProp];
    return res;
}

const obj = {
    name: 'ku ky epta'
}

const mytest = function(str) {
    console.log(this.name, str);
}

// const mytest = (str) => {
//     console.log(this.name, str);
// }
//даст undefined так как стрелочные берут контекст извне в зависимости от того где они написаны

mytest.myApply(obj, ['fsdfsdf']);