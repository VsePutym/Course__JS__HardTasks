'use strict';




let arr = [23, 27, 755, 104, 47, 78, 377]; 

console.log(arr.filter(num => ['4','2'].includes(num.toString()[0])));



one:
for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0){            
            continue one;
        }
    }
    console.log('делитель числа : ' + i + ' 1 и ' + i);
}