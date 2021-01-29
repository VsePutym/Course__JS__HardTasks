'use strict';

let num = 266219;

let newNumbers = num.toString().split('');

let reducer = newNumbers.reduce((item, item2) => item * item2, 1); 

reducer **= 3;

let sliceReduce = String(reducer).slice(0, 2);

sliceReduce = Number(sliceReduce);

console.log(sliceReduce);
console.log(typeof sliceReduce);