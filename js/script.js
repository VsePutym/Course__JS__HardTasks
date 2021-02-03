'use strict';

let rus = 'ru';
let eng = 'en';
let result = prompt('enter "ru" or "en" to select language');


//? Task 1

let lang = result;
function chooseLanguage(){
    if(lang === rus){
        return('понидельник, вторник, среда, четверг, пятница');
    }
    else if(lang === eng){
        return('Monday, Tuesday, Wednesday, Thursday, Friday');
    }
    else{
        ('incorrect data entered');
    }
}
console.log(chooseLanguage());

//? Task 2

// let lang = result;
// switch(lang){
//     case 'ru':
//         alert('понидельник, вторник, среда, четверг, пятница');
//     break;  
//     case 'en':
//         alert('Monday, Tuesday, Wednesday, Thursday, Friday');
//     break;
// }
// console.log(lang);

//* Task 3

// let array = [];
// array ['ru'] = ['понидельник', 'вторник', 'среда', 'четверг', 'пятница'];
// array ['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// console.log(array[result]);

//? Task 4

// let namePerson = prompt('Enter your name on rus');
// let resultName = ( namePerson === 'Артем') ? 'директор' :
// ( namePerson === 'Максим') ?  'преподователь':
// 'студент' ;

// console.log(resultName);


/* Task 1 version 2
let random = Math.floor(Math.random() * 2);
let lang = (random === 0) ? "ru" : "en";
let daysRu = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье", ];
let daysEn = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", ];

function output(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

if ( lang === "ru" ) {
    output(daysRu);
    } else {
    output(daysEn);
    }
*/