// Задание 3. Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function externalFunc(num1) {
    return function (num2) {
      return num1 + num2;
    }
   }
  let resultExternalFunc = externalFunc(5);
  let resultInternalFunc = resultExternalFunc(3);
  console.log(resultInternalFunc);
  
  // еще короче
  // function externalFunc(num1) {
  //   return function (num2) {
  //     return num1 + num2;
  //   }
  //  }
  // console.log(externalFunc (5) (3)); 