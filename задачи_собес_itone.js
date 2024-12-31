interface Props {
    [key: string]: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}


const x = { a: 1, b: 2, c: 3 };

getProperty(x, 'a');

getProperty(x, 'd');
// тут должна быть ошибка

// import { useState, useEffect, useLayoutEffect } from 'react';
// 
// 
// // Ответ = 
// // child: render 'child: useEffect
// // parent: render parent: useLayoutEffect 
// //
// 
// //child: cleanup useEffect
// //parent: cleanup useLayoutEffect
// 
// // parent: render
// // child: render
// // parent: useLayoutEffect
// // child: useEffect
// 
// // function Child({ num }) {
// //     console.log('child: render');
// 
// //     useEffect(() => {
// //         console.log('child: useEffect');
// //         return () => {
// //             console.log('child: cleanup useEffect');
// //         };
// //     }, [num]);
// 
// //     return null;
// // }
// 
// // export default function App() {
// //     const [num, setNum] = useState(0);
// 
// //     console.log('parent: render');
// 
// //     function clickHandler() {
// //         setNum(prev => prev + 1);
// //     }
// 
// //     useLayoutEffect(() => {
// //         console.log('parent: useLayoutEffect');
// 
// //         return () => {
// //             console.log('parent: cleanup useLayoutEffect');
// //         };
// //     }, [num]);
// 
// //     return (
// //         <>
// //             <Child num={num} />
// //             <button onClick={clickHandler}>my button</button>
// //             <div style={{ fontSize: '45px', textAlign: 'center' }}>{num}</div>
// //         </>
// //     );
// // }
// 
// 
// 
// 
// 
// 
// // // К массиву применятся метод findUnique, который возвращает новый массив из уникальных элементов,
// // // то есть тех, которые в исходном массиве присутствуют всего один раз
// // // Необходимо реализовать метод findUnique так, что бы он работал как обычный метод массива. Порядок следования имеет значение. 
// // 
// // // Array.prototype.findUnique = function findUnique() {
// // //     const test = function func() {}
// // //     const array = this;
// // //     const map = array.reduce((acc, item) => {
// // //         console.log(item)
// // //         acc[item] = (acc[item] || 0) + 1;
// // //         return acc;
// // //     }, {});
// // 
// // //     return this.filter(item => map[item] == 1)
// // // }
// // 
// // // console.log([10, 5, 10, 0, 6, 6, 7, 2, 9, 9].findUnique()); // [5, 0, 7, 2]
// // 
// // 
// // 
// // // let foo = {
// // //     x: 42,
// // //     baz: function () {
// // //         console.log(this.x);
// // //     },
// // //     bar: () => {
// // //         console.log(this.x);
// // //     },
// // // };
// // 
// // // foo.baz(); // 42
// // 
// // // let baz = foo.baz.bind(foo);
// // // baz(); // ? undefined
// // 
// // // foo.bar(); // ? undefined
// // 
// // // В каком порядке будет вывод в консоли?
// // // setTimeout(() => {
// // //     console.log('Енисей');
// // // }, 0);
// // 
// // // console.log('Лена');
// // 
// // // new Promise(resolve => {
// // //     console.log('Обь');
// // //     setTimeout(() => {
// // //         console.log('Нижняя Тунгуска');
// // //         resolve();
// // //     }, 0);
// // // })
// // //     .then(() => {
// // //         setTimeout(() => console.log('Урал'), 1);
// // //     })
// // //     .then(() => {
// // //         console.log('Амур');
// // //     });
// // 
// // // console.log('Волга');
// // 
// // // setTimeout(() => {
// // //     console.log('Вилюй');
// // // }, 0);
// // 
// // //Лена Волга Обь Амур Енисей Нижняя Тунгуска Вилюй Урал
// // 
// // 
// // 