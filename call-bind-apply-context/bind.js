// Симуляция bind
// Задача: Реализуйте функцию myBind, которая работает как встроенный метод bind.

// Пример:

Object.prototype.myBind = function(context, ...args) {
    if (typeof this !== "function") {
        throw new Error('it is not a function');
    }

    return bound = (...boundArgs) => {
        return this.apply(context, [...args, ...boundArgs]);
    }
}

function greet(greeting = '', punctuation = '') {
    return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'John' };
const boundGreet = greet.myBind(person, 'Hello');
console.log(boundGreet('!')); // Hello, John!