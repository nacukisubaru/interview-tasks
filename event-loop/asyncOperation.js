// Сложная задача:
// Описание: Напиши программу, которая моделирует асинхронные операции с использованием setTimeout, Promise, и async/await. Создай несколько операций, которые выполняются с задержками, и используй их для вычисления суммы чисел.

// javascript
// Копировать код
// function asyncOperation(delay, value) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(value);
//     }, delay);
//   });
// }

// async function calculateSum() {
//   const result1 = await asyncOperation(1000, 5);
//   const result2 = await asyncOperation(1500, 10);
//   const result3 = await asyncOperation(500, 3);

//   console.log('Результат:', result1 + result2 + result3);
// }

// calculateSum();
// Вопрос: Как будет работать event loop в этом примере? Как Promise и async/await взаимодействуют с event loop, и как изменится порядок вывода сообщений, если добавить дополнительные асинхронные операции?