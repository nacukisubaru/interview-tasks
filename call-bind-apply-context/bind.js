// Симуляция bind
// Задача: Реализуйте функцию myBind, которая работает как встроенный метод bind.

// Пример:

// javascript
// Копировать код
// function greet(greeting, punctuation) {
//   return `${greeting}, ${this.name}${punctuation}`;
// }

// const person = { name: 'John' };
// const boundGreet = greet.myBind(person, 'Hello');
// console.log(boundGreet('!')); // Hello, John!