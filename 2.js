// Задание 2. Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1. Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

function isPrimeNumber() {
  let num = +prompt("Введите целое число от 0 до 1000");
  if (num < 0) {alert("Oтрицательное число не может быть простым")} 
    else if (num === 0) {alert("Ноль не является простым числом")}
      else if (num === 1) {alert("Единица не является простым числом")}
        else if (num > 1000 || isNaN(num)) {alert("Кажется, вы ошиблись")}
          else {
            let flag = true;
            for (let i = 2; i < num; i++) {
              if (num % i === 0) {
                flag = false;
                break;
              } 
            }
            if (flag === true) {alert("Это число является простым")}
              else {alert("Это число не является простым")}
          }
  }
  isPrimeNumber();