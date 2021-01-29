'use strict';
/*
1) Создать переменную num со значением 266219 (тип данных число)
2) Вывести в консоль произведение (умножение) цифр этого числа
Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.
Правильно использовать цикл или методы перебора.
3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
4) Вывести на экран первые 2 цифры полученного числа */


//! Version 0.1 =====

// let num = 266219;

// let newNumbers = num.toString().split('');

// let reducer = newNumbers.reduce((item, item2) => item * item2, 1); 

// reducer **= 3;

// let sliceReduce = String(reducer).slice(0, 2);

// sliceReduce = Number(sliceReduce);

// console.log(sliceReduce);
// console.log(typeof sliceReduce);


//? Version 0.2 =======

let num = 266219;
const strNum = String(num);
let result = 1;

for( let i = 0; i < strNum.length; i++){
    result = result * +strNum[i];
}

result **= 3;
document.write( +String(result).slice(0, 2) ); //вывод в html
console.log(result); //вывод в консоль
console.log(typeof result); // вывод типа данных в консоль




