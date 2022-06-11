// Задание 1. В прошлом модуле в разделе «Циклы» вы выполняли следующее задание: Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.


function groupElements (arr) {
    let oddElements = 0;
    let evenElements = 0;
    let nollElements = 0;
    let otherElements = 0;
    let infinityElements = 0;
    let fractionalElements = 0;
    for ( let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i]) || typeof arr[i] !== 'number') {otherElements++}
        else if (arr[i] === Infinity || arr[i] === -Infinity) {infinityElements++}
          else if (arr[i] % 1 > 0) {fractionalElements++}
            else if (arr[i] === 0) {nollElements++}
              else if (arr[i] % 2 === 0) {evenElements++}
                else if (arr[i] % 2 !== 0) {oddElements++}
      // debugger ;
    };
    console.log("Количество не числовых элементов составляет " + otherElements);
    console.log("Количество элементов равных +/- бесконечности составляет " + infinityElements);
    console.log("Количество дробных элементов составляет " + fractionalElements);
    console.log("Количество элементов равных нулю составляет " + nollElements);
    console.log("Количество четных элементов не равных нулю составляет " + evenElements);
    console.log("Количество не четных элементов составляет " + oddElements);
    console.log("ВСЕГО посчитано элементов " + (otherElements + nollElements + oddElements+evenElements + infinityElements + fractionalElements));
    console.log("Длина массива " + arr.length);
  };
  groupElements ([null, NaN, 0, 1, 4, Infinity, -Infinity, Math.PI, 'one', "", true, false, undefined, "1", "0", "2"]);