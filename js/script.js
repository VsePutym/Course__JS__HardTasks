document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const allMonth = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря", ];

    const addNewElem = () => {
        const elem = document.createElement('div');
        elem.classList.add('date');
        document.body.append(elem);
        return elem;
    }

    const dateA = addNewElem();
    const dateB = addNewElem();

    dateA.style.cssText = `
    font-size: 40px;
    text-align: center;
    color: #902bcf;
    font-family: cursive;
    font-style: italic;
    margin-bottom: 50px`;

    
    dateB.style.cssText = `
    font-size: 40px;
    text-align: center;
    color: #db0f4d;
    font-family: cursive;
    font-style: italic;
    margin-bottom: 50px`;


    const getNewAllTime = () => {
        const date = new Date();
        const month = allMonth[date.getMonth()];
        let numberMonth = date.getMonth();
        const dayWeek = days[date.getDay()];
        let day = date.getUTCDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let second = date.getSeconds();
        const year = date.getUTCFullYear();
        let min = '';

        if (hours >= 5 && hours < 21) {
            min = 'часов';
        } else if (hours === 21 || hours === 1) {
            min = 'час';
        } else if (hours >= 2 && hours <= 4 || hours >= 22 && hours <= 24) {
            min = 'часа';
        }

        if(day < 10){
            day = `0${day}`;
        }if(numberMonth < 10){
            numberMonth = `0${numberMonth}`;
        }if(hours < 10){
            hours = `0${hours}`;
        }if(minutes < 10){
            minutes = `0${minutes}`;
        }if(second < 10){
            second = `0${second}`;
        }

        dateA.innerHTML = `сегодня ${dayWeek} ${day} ${month} ${year} года ${hours} ${min} ${minutes} минуты ${second} секунды`;
        dateB.innerHTML = ` ${day}.${numberMonth}.${year} - ${hours}:${minutes}:${second}`;
    }

    setInterval(() => {
        getNewAllTime();
    }, 1000);


});