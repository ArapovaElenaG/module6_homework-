// Задание 5. Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат. Используйте Arrow Function синтаксис. Протестируйте функцию на любых значениях и выведите результат в консоль.

// через Math
let raiseDegree = (x, n) => Math.pow(x, n);
console.log(raiseDegree(4, 3));

// через цикл
// let result = 1;
// let raiseDegree = (x, n) => {
//   for(let i = 0; i < n; i++) {result *= x};
//   return result;
// }
// console.log(raiseDegree(4, 3));