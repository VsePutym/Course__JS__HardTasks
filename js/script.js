'use strict';

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let getString = function (arg1) {
    if (!isNumber(arg1)) {
        console.log(typeof arg1);
        console.log(arg1.slice(0, 30) + '...');
    }else{
        console.log('it is not a string');
    }
    return;
};
getString('dwaddddddddddddwawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwdw');

